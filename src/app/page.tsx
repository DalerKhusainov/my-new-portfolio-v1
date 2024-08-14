"use client";

import Image from "next/image";
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectBtn from "@/components/ProjectBtn";
import Avatar from "@/components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import useHydrationTest from "@/hooks/useHydrationTest";

// console.log(fadeIn("down", 0.4));
const animationVariants = {
  hidden: {
    y: -80,
    opacity: 0,
    x: 0,
    transition: {
      type: "tween",
      duration: 1.5,
      delay: 0.4,
      ease: [0.42, 0, 0.58, 1],
    },
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1.4,
      delay: 0.4,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

export default function Home() {
  const isHydrated = useHydrationTest();

  if (!isHydrated) return null;

  return (
    <main className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <h1 className="h1">
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </h1>
          {/* subtitle */}
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            consectetur corrupti voluptatibus cum asperiores at ex quas animi
            aspernatur omnis.
          </p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectBtn />
          </div>
          {/* <motion.div
            animate={{ x: 100 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-10 h-10"
          /> */}
          {/* <motion.div
            // variants={fadeIn("down", 0.4)}
            variants={animationVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectBtn />
          </motion.div> */}
        </div>
      </div>
      {/* image */}
      <div>Image</div>
    </main>
  );
}
