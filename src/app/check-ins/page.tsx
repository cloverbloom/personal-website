import Link from "next/link";

export default function ContentPage() {

   return (
    <div className="pt-8 w-4/5 md:w-2/5">
       <section className="paragraph space-y-8">

        <p className="title">WEEKLY CHECK-IN VIDEOS</p>
        
        <p> Here is a collection of videos I've recorded as personal check-ins.</p>

        <p> These cover what I was thinking about at the time.</p>

        <ul className="list-disc pl-8">

          {/* july 12th, 2025 */}
          <li>
            <Link href="https://garrettnelson.co/check-ins" rel="noopener noreferrer">July 12th, 2025 (10m)</Link>
          </li>

          {/* july 17th, 2025 */}
          <li>
            <Link href="https://youtu.be/FPJEPo5kgm0" target="_blank" rel="noopener noreferrer">July 17th, 2025 (14m)</Link>
          </li>

          {/* august 4th, 2025 */}
          <li>
            <Link href="https://youtu.be/p2ryzCTziZw" target="_blank" rel="noopener noreferrer">August 4th, 2025 (17m)</Link>
          </li>

          {/* october 7th, 2025 */}
          <li>
            <Link href="https://garrettnelson.co/check-ins" rel="noopener noreferrer">October 27th, 2025 (10m)</Link>
          </li>

        </ul>
      </section>
    </div>
  );
}
