import Link from "next/link";

export default function ContentPage() {

   return (
    <div className="pt-8 w-4/5 md:w-2/5">
       <section className="paragraph space-y-8">

        <p className="title">CONTENT I RECOMMEND TO FRIENDS</p>
        
        <p>Below is a list of content I thoroughly enjoyed. Anything on this list is something I would recommend to a friend.</p>
        <p>The effect each piece of content may have on you depends heavily on your current situation. Look for things that naturally interest you.</p>
        <p>Anythng in <span style={{ color: 'red' }}>red text</span> is something that deeply impacted my personal philosophy & changed who I am in some way.</p>

        <ul className="list-disc pl-8">
          <li>
            <Link href="https://en.wikipedia.org/wiki/Fight_Club" target="_blank" rel="noopener noreferrer">Fight Club (2h 19m)</Link>
          </li>
          <li>
            <Link href="https://www.navalmanack.com" target="_blank" rel="noopener noreferrer">The Almanack of Naval Ravikant (5-6h)</Link>
          </li>
          <li>
            <Link href="https://jamesclear.com/atomic-habits" target="_blank" rel="noopener noreferrer" style={{ textDecorationColor: 'red' }}><span style={{ color: 'red' }}>Atomic Habits (6-7h)</span></Link>
            <span className="block text-muted-foreground paragraph">by admitting you have control you take responsibility</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
