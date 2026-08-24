import { NextRequest, NextResponse } from 'next/server';

type KitErrorResponse = {
  errors?: string[];
};

async function getKitErrorMessage(response: Response) {
  try {
    const data = await response.json() as KitErrorResponse;
    return data.errors?.join(', ') || response.statusText;
  } catch {
    return response.statusText;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { email?: string };
    const email = body.email?.trim().toLowerCase();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const kitApiKey = process.env.KIT_API_KEY;
    const kitFormId = process.env.KIT_FORM_ID;

    if (!kitApiKey || !kitFormId) {
      console.error('Kit subscription is not configured.');
      return NextResponse.json(
        { error: 'Subscription is not configured yet.' },
        { status: 500 }
      );
    }

    const createSubscriberResponse = await fetch('https://api.kit.com/v4/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Kit-Api-Key': kitApiKey,
      },
      body: JSON.stringify({ email_address: email }),
    });

    if (!createSubscriberResponse.ok) {
      const error = await getKitErrorMessage(createSubscriberResponse);
      console.error('Kit subscriber error:', error);
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      );
    }

    const addToFormResponse = await fetch(`https://api.kit.com/v4/forms/${kitFormId}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Kit-Api-Key': kitApiKey,
      },
      body: JSON.stringify({
        email_address: email,
        referrer: request.headers.get('referer'),
      }),
    });

    if (!addToFormResponse.ok) {
      const error = await getKitErrorMessage(addToFormResponse);
      console.error('Kit form subscription error:', error);
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Thanks for subscribing!'
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
