"use client";
import { InView } from "@/components/ui/in-view";
import { motion } from "framer-motion";
import Image from "next/image";
import Pintrest from "@/assets/images/7b86cbb6fbb47c5fa672b6c466d609a0.webp";
import personalSignature from "@/assets/images/signature.webp";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json() as { error?: string };

      if (response.ok) {
        setMessage("Thanks for subscribing!");
        setEmail("");
      } else {
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

   return (
    <div className="pt-8 w-2/5">
      <section className="paragraph space-y-8">

        <p className="title">GARRETT NELSON</p>

        <p>Loading good copy...</p>

        <p>I want to send emails when I do something big. If you'd like to be on that list you can sign up here.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="paragraph w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="paragraph w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {message && (
          <p className="paragraph text-center">{message}</p>
        )}

        <InView
          viewOptions={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
              visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
            }}
            className="w-full"
          >
            <Image
              src={Pintrest}
              alt="I wanna be this and I wanna be that"
              className="w-full rounded-lg object-cover"
              style={{ height: 'auto' }}
            />
          </motion.div>
        </InView>

        <p>It would be really fun to get emails from people. Everything is appreciated. You can ping me here at: garrett@cloverbloom.co</p>
        <p>Cheers.</p>

        <Image
          src={personalSignature}
          alt="Signature"
          className="w-1/5 mx-auto rounded-lg object-cover"
          style={{ height: 'auto' }}
        />

      </section>
    </div>
  );
}
