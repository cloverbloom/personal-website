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
            <Link href="https://www.navalmanack.com" target="_blank" rel="noopener noreferrer">The Almanack of Naval Ravikant (164 Pages)</Link>
          </li>
          <li>
            <Link href="https://jamesclear.com/atomic-habits" target="_blank" rel="noopener noreferrer" style={{ textDecorationColor: 'red' }}><span style={{ color: 'red' }}>Atomic Habits (320 Pages)</span></Link>
            <span className="block text-muted-foreground paragraph">habits establish a baseline good or bad</span>
          </li>
          <li>
            <Link href="https://en.wikipedia.org/wiki/Iliad" target="_blank" rel="noopener noreferrer">The Iliad (704 Pages)</Link>
          </li>
          <li>
            <Link href="https://en.wikipedia.org/wiki/Poems_%26_Prayers" target="_blank" rel="noopener noreferrer" style={{ textDecorationColor: 'red' }}><span style={{ color: 'red' }}>Poems & Prayers (208 Pages)</span></Link>
            <span className="block text-muted-foreground paragraph">refreshing take on modern philosophy</span>
          </li>
          <li>
            <Link href="https://en.wikipedia.org/wiki/Poems_%26_Prayers" target="_blank" rel="noopener noreferrer" style={{ textDecorationColor: 'red' }}><span style={{ color: 'red' }}>Man's Search for Meaning (165 Pages)</span></Link>
            <span className="block text-muted-foreground paragraph"> a go to book for understanding modern depression</span>
          </li>
          <li>
            <Link href="https://en.wikipedia.org/wiki/Good_Will_Hunting" target="_blank" rel="noopener noreferrer">Good Will Hunting (2h 4m)</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
