"use client";
import { InView } from "@/components/ui/in-view";
import { motion } from "framer-motion";
import myImage from "@/assets/images/7b86cbb6fbb47c5fa672b6c466d609a0.jpg";

export default function Home() {

   return (
    <div className="pt-8 w-2/5">
       <section className="paragraph space-y-8">

        <p className="title">GARRETT NELSON</p>

        <p>Loading...</p>

        <InView
          viewOptions={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
              visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
            }}
            className="w-full aspect-square"
          >
            <img
              src={myImage.src}
              alt="I wanna be this and I wanna be that"
              className="w-full rounded-lg object-cover"
            />
          </motion.div>
        </InView>

      </section>
    </div>
  );
}
