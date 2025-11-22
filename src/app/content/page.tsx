import Link from "next/link";

export default function ContentPage() {

   return (
    <div className="pt-8 w-4/5 md:w-2/5">
       <section className="paragraph space-y-8">

        <p className="title">CONTENT I'D RECOMMEND</p>
        
        <p>Anything on this list is something I would recommend to a friend depending on the conversation.</p>
        <p>Maybe these resonate with you maybe not. However, I think all the messages presented are universal in some way.</p>
        <p>Anythng in <span style={{ color: 'red' }}>red</span> is something that deeply impacted me & shifted my personal philosophy in some way.</p>

        <ul className="list-disc pl-8">

          {/* fight club */}
          <li>
            <Link href="https://en.wikipedia.org/wiki/Fight_Club" target="_blank" rel="noopener noreferrer">Fight Club (2h 19m)</Link>
          </li>

          {/* man's search for meaning */}
          <li>
            <Link href="https://en.wikipedia.org/wiki/Poems_%26_Prayers" target="_blank" rel="noopener noreferrer" style={{ textDecorationColor: 'red' }}><span style={{ color: 'red' }}>Man's Search for Meaning (165 Pages)</span></Link>
            <span className="block text-muted-foreground paragraph">has ideas most people are not ready to accept</span>
            <span className="block text-muted-foreground paragraph">think about this book daily</span>
          </li>

          {/* the almanack of naval ravikant */}
          <li>
            <Link href="https://www.navalmanack.com" target="_blank" rel="noopener noreferrer">The Almanack of Naval Ravikant (164 Pages)</Link>
          </li>

          {/* atomic habits */}
          <li>
            <Link href="https://jamesclear.com/atomic-habits" target="_blank" rel="noopener noreferrer">Atomic Habits (320 Pages)</Link>
          </li>

          {/* good will hunting */}
          <li>
            <Link href="https://en.wikipedia.org/wiki/Good_Will_Hunting" target="_blank" rel="noopener noreferrer">Good Will Hunting (2h 4m)</Link>
          </li>

          {/* four thousand weeks */}
          <li>
            <Link href="https://www.oliverburkeman.com/fourthousandweeks" target="_blank" rel="noopener noreferrer">Four Thousand Weeks (288 Pages)</Link>
          </li>

          {/* youtube @sneako */}
          <li>
            <Link href="https://www.youtube.com/@SNEAKO" target="_blank" rel="noopener noreferrer">YouTube @Sneako</Link>
          </li>

          {/* casey returns to new york city */}
          <li>
            <Link href="https://www.youtube.com/watch?v=igZ6PoZAszQ" target="_blank" rel="noopener noreferrer">Casey Niestat Returns To NYC</Link>
          </li>

          {/* fantastic mr.fox */}
          <li>
            <Link href="https://en.wikipedia.org/wiki/Fantastic_Mr._Fox_(film)" target="_blank" rel="noopener noreferrer">Fantastic Mr.Fox (1h 27m)</Link>
          </li>

          {/* man's search for meaning */}
          <li>
            <Link href="https://youtu.be/9boVw2lnP5Q?si=N08IeP4BxG8Adohj&t=2532" target="_blank" rel="noopener noreferrer" style={{ textDecorationColor: 'red' }}><span style={{ color: 'red' }}>J. Cole ESPN Interview (8m)</span></Link>
            <span className="block text-muted-foreground paragraph">define your dream as high as you possibly can</span>
            <span className="block text-muted-foreground paragraph">believe it is possible & protect it</span>
            <span className="block text-muted-foreground paragraph">start doing the hard work</span>
          </li>

          {/* man's search for meaning */}
          <li>
            <Link href="https://youtu.be/pqWUuYTcG-o?si=2ipn05OR_5HfrCnR&t=794" target="_blank" rel="noopener noreferrer" style={{ textDecorationColor: 'red' }}><span style={{ color: 'red' }}>Rodger Federer "Perfection is Impossible" (2m)</span></Link>
            <span className="block text-muted-foreground paragraph">attack everything with intensity</span>
            <span className="block text-muted-foreground paragraph">but once it's behind you it's behind you</span>
          </li>

          {/* ---------- save for later ---------- */}

          {/* 7 floor 645 square foot home in tokyo
          <li>
            <Link href="https://www.youtube.com/watch?v=Wgw9tBynJck&list=WL&index=3" target="_blank" rel="noopener noreferrer">How an Architect Fit 7 Floors into His 645-Square-Foot Tokyo Home (12m)</Link>
          </li> 
          */}

          {/* mr.freeman part 02
          <li>
            <Link href="https://www.youtube.com/watch?v=YtcQz5Tplek" target="_blank" rel="noopener noreferrer">Mr.Freeman Part 02 (6m)</Link>
          </li> 
          */}

          {/* poems & prayers - haven't finished this yet ( to abstract for most )
          <li>
            <Link href="https://en.wikipedia.org/wiki/Poems_%26_Prayers" target="_blank" rel="noopener noreferrer" style={{ textDecorationColor: 'red' }}><span style={{ color: 'red' }}>Poems & Prayers (208 Pages)</span></Link>
            <span className="block text-muted-foreground paragraph">refreshing take on modern philosophy</span>
          </li> 
          */}

          {/* the iliad - no clear message ( maybe just for "no one will remember your name" )
          <li>
            <Link href="https://en.wikipedia.org/wiki/Iliad" target="_blank" rel="noopener noreferrer">The Iliad (704 Pages)</Link>
          </li> 
          */}

          {/* good will hunting - presents the message that you shouldn't run from your destiny?
          <li>
            <Link href="https://en.wikipedia.org/wiki/Good_Will_Hunting" target="_blank" rel="noopener noreferrer">Good Will Hunting (2h 4m)</Link>
          </li>
          */}

          {/* ---------- save for later ---------- */}

        </ul>
      </section>
    </div>
  );
}
