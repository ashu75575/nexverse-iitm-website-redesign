"use client";

import { motion } from "framer-motion";
import Collage from "./Collage";

// 🔹 Reusable animated text component (word-by-word)
const AnimatedText = ({ text, className }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {words.map((word, i) => {
        // Ensure "Nexverse" doesn't wrap by treating it as a single unit
        const displayWord = word === "Nexverse." ? (
          <span className="whitespace-nowrap">{word}</span>
        ) : word;
        
        return (
          <motion.span key={i} variants={child} className="inline-block mr-2">
            {displayWord}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative mx-auto  text-white py-12 sm:py-16 md:py-20 pb-0 overflow-hidden"
    >
      <div className="mx-auto  z-10">
        {/* About Section */}
        <section className="text-gray-100 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
          <div className="max-w-7xl mx-auto w-full">
            {/* Small heading + animated main heading */}
            <motion.div
              className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-12 justify-between mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Small heading */}
              <div className="flex-shrink-0">
                <h3 className="text-xs sm:text-sm tracking-widest uppercase text-gray-400 mb-4 lg:mb-6">
                  About Us
                </h3>
              </div>

              {/* Main animated text */}
              <div className="flex-1 lg:max-w-[65%] xl:max-w-[60%]">
                <AnimatedText
                  text="College life is more than classes and exams — it's about exploring, experimenting, and growing for the real world. That's what we do at Nexverse."
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-medium border-y border-zinc-100 leading-tight sm:leading-snug py-4 sm:py-5"
                />
              </div>
            </motion.div>

            {/* Supporting paragraphs with word animation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 text-gray-400 text-sm sm:text-base lg:text-base leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="lg:pr-4"
              >
                <span className="whitespace-nowrap">Nexverse</span> is more than events and workshops – it's a community that turns curiosity into creation. We believe in learning by building, and building by daring to imagine bigger.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="lg:pl-4"
              >
                From hackathons to creative collabs, we bring students together to push boundaries, create impact, and shape ideas into projects that truly matter.
              </motion.p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}