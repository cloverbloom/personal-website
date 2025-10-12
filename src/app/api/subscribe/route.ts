import { NextRequest, NextResponse } from 'next/server';

// API route to save email subscriptions to Google Sheets
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { email?: string };
    const { email } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Send email to Google Sheets via Apps Script
    const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbxOfAEeR3g2lyGi7uF7zmJvtvKp9RmcTeNevD0Ndar5cz_JlDP2VfYV0QXbEG77JwdCrQ/exec';

    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      console.error('Google Script error:', response.statusText);
      return NextResponse.json(
        { error: 'Failed to save email. Please try again.' },
        { status: 500 }
      );
    }

    console.log('Email saved to Google Sheets:', email, 'Timestamp:', new Date().toISOString());

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