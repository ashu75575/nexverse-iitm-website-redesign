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
    { src: "/celebration_img.JPG ", scale: scale4 },
    { src: "/heads_coheads_1.webp", scale: scale5 },
    { src: "/front.jpeg", scale: scale6 },
    { src: "/image.png", scale: scale6 },
    { src: "/event_img_2.JPG", scale: scale8 },
    { src: "/hackathon_1.webp", scale: scale9 },
  ];

 const positions = [
    "relative w-[25vw] h-[25vh]",
    "relative top-[-30vh] left-[5vw] w-[35vw] h-[30vh]",
    "relative top-[-10vh] left-[-25vw] w-[20vw] h-[45vh]",
    "relative left-[27.5vw] w-[25vw] h-[25vh]",
    "relative top-[27.5vh] left-[5vw] w-[20vw] h-[25vh]",
    "relative top-[27.5vh] left-[-22.5vw] w-[30vw] h-[25vh]",
    "relative top-[22.5vh] left-[25vw] w-[15vw] h-[15vh]",
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
            <div className={positions[index]}>
              <Image src={src} fill alt={src} className="object-cover" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
