import Link from "next/link";

export default function ContentPage() {

   return (
    <div className="pt-8 w-4/5 md:w-2/5">
       <section className="paragraph space-y-8">

        <p className="title">CONTENT I'D RECOMMEND</p>
        
        <p>Anything on this list is something I would recommend to a friend depending on the conversation.</p>
        <p>Maybe these resonate with you, maybe not. However, I think all of these messages are universal in some way & should be considered.</p>
        <p>Anythng in <span style={{ color: 'red' }}>red</span> is something that deeply impacted me & shifted my personal philosophy in some way.</p>

        <ul className="list-disc pl-8">

          {/* fight club */}
          <li>
            <Link href="https://en.wikipedia.org/wiki/Fight_Club" target="_blank" rel="noopener noreferrer">Fight Club (2h 19m)</Link>
          </li>

          {/* man's search for meaning */}
          <li>
            <Link href="https://www.amazon.com/Mans-Search-Meaning-Viktor-Frankl/dp/0807014273" target="_blank" rel="noopener noreferrer">Man's Search for Meaning (165 Pages)</Link>
          </li>

          {/* the almanack of naval ravikant */}
          <li>
            <Link href="https://www.navalmanack.com" target="_blank" rel="noopener noreferrer">The Almanack of Naval Ravikant (164 Pages)</Link>
          </li>

          {/* atomic habits */}
          <li>
            <Link href="https://jamesclear.com/atomic-habits" target="_blank" rel="noopener noreferrer">Atomic Habits (320 Pages)</Link>
          </li>

          {/* four thousand weeks */}
          <li>
            <Link href="https://www.oliverburkeman.com/fourthousandweeks" target="_blank" rel="noopener noreferrer">Four Thousand Weeks (288 Pages)</Link>
          </li>

          {/* fantastic mr.fox */}
          <li>
            <Link href="https://en.wikipedia.org/wiki/Fantastic_Mr._Fox_(film)" target="_blank" rel="noopener noreferrer">Fantastic Mr.Fox (1h 27m)</Link>
          </li>

          {/* man's search for meaning */}
          <li>
            <Link href="https://youtu.be/9boVw2lnP5Q?si=N08IeP4BxG8Adohj&t=2532" target="_blank" rel="noopener noreferrer">J. Cole's ESPN Interview (8m)</Link>
          </li>

          <li>
            <Link href="https://youtu.be/pqWUuYTcG-o?si=2ipn05OR_5HfrCnR&t=794" target="_blank" rel="noopener noreferrer">Rodger Federer's Commencement Address (2m)</Link>
          </li>

          {/* jeff bezos's shareholder letters */}
          <li>
            <Link href="https://open.spotify.com/episode/47t4mFYbqPy4uZWag2iO8m?si=5138b55b9ed84dec" target="_blank" rel="noopener noreferrer">Jeff Bezos's Shareholder Letters (1h 20m)</Link>
          </li>

          <li>
            <Link href="https://open.spotify.com/episode/6HWgMkWRkyqJZmZfqiMcCJ?si=-MZgAmxbRzOmTwXdIb0U2A" target="_blank" rel="noopener noreferrer">Ross Mackay's Open Residency Interview (1h 44m)</Link>
          </li>

          {/* the iliad - no clear message ( maybe just for "no one will remember your name" ) */}
          <li>
            <Link href="https://en.wikipedia.org/wiki/Iliad" target="_blank" rel="noopener noreferrer">The Iliad (704 Pages)</Link>
          </li> 

          {/* save for later */}
         
          {/* red text template */}
          {/* <li>
            <Link href="https://youtu.be/pqWUuYTcG-o?si=2ipn05OR_5HfrCnR&t=794" target="_blank" rel="noopener noreferrer" style={{ textDecorationColor: 'red' }}><span style={{ color: 'red' }}>Rodger Federer "Perfection is Impossible" (2m)</span></Link>
            <span className="block text-muted-foreground paragraph">but once it's behind you it's behind you</span>
          </li> */}

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
