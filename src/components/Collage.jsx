"use client";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Lenis from "lenis";

export default function Collage() {
  const container = useRef(null);

  // Framer Motion Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 3.9]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    { src: "/team_img_1.webp", scale: scale4 },
    { src: "/celebration.webp", scale: scale4 },
    { src: "/heads_coheads_1.webp", scale: scale5 },
    { src: "/front.jpeg", scale: scale6 },
    { src: "/image.png", scale: scale6 },
    { src: "/event_img_2.webp", scale: scale8 },
    { src: "/hackathon_1.webp", scale: scale9 },
  ];

  const positions = [
    "relative w-[25vw] h-[25vh] md:w-[25vw] md:h-[25vh]",
    "relative top-[-30vh] left-[5vw] w-[35vw] h-[30vh] md:top-[-30vh] md:left-[5vw] md:w-[35vw] md:h-[30vh]",
    "relative top-[-10vh] left-[-25vw] w-[20vw] h-[45vh] md:top-[-10vh] md:left-[-25vw] md:w-[20vw] md:h-[45vh]",
    "relative left-[27.5vw] w-[25vw] h-[25vh] md:left-[27.5vw] md:w-[25vw] md:h-[25vh]",
    "relative top-[27.5vh] left-[5vw] w-[20vw] h-[25vh] md:top-[27.5vh] md:left-[5vw] md:w-[20vw] md:h-[25vh]",
    "relative top-[27.5vh] left-[-22.5vw] w-[30vw] h-[25vh] md:top-[27.5vh] md:left-[-22.5vw] md:w-[30vw] md:h-[25vh]",
    "relative top-[22.5vh] left-[25vw] w-[15vw] h-[15vh] md:top-[22.5vh] md:left-[25vw] md:w-[15vw] md:h-[15vh]",
  ];

  const mobilePositions = [
    "relative w-[40vw] h-[20vh]",
    "relative  top-[-26vh] left-[18vw] w-[50vw] h-[25vh]",
    "relative  top-[-26vh] left-[-30vw] w-[35vw] h-[30vh]",
    "relative top-[23vh] left-[30vw] w-[40vw] h-[20vh]",
    "relative hidden top-[15vh] left-[-25vw] w-[45vw] h-[20vh]",
    "relative  top-[24vh] left-[-20vw] w-[35vw] h-[20vh]",
    "relative hidden top-[10vh] left-[20vw] w-[30vw] h-[15vh]",
  ];

  const smoothEase = [0.25, 0.1, 0.25, 1];

  return (
    <div ref={container} className="h-[300vh] bg-black relative ">
      <div className="sticky top-0 h-screen  overflow-hidden">
        {pictures.map(({ src, scale }, index) => (
          <motion.div
            key={index}
            style={{ scale }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="absolute top-0 flex items-center justify-center w-full h-full"
          >
            <div className={`md:hidden ${mobilePositions[index]}`}>
              <Image src={src} fill alt={src} className="object-cover" />
            </div>
            <div className={`hidden md:block ${positions[index]}`}>
              <Image src={src} fill alt={src} className="object-cover" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
