"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-20 overflow-y-scroll">
        {/* Image container  */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>

        {/* text container  */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* title  */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Coding the Future, Crafting Tomorrow's Digital World.
          </h1>

          {/* desc */}
          <p className="md:xl">
            Step into my digital realm, where creativity meets cutting-edge
            technology. As a passionate developer with a flair for aesthetics,
            my portfolio is a testament to my dedication to crafting innovative
            solutions. From dynamic web applications to elegant user interfaces,
            explore how my MERN stack expertise is shaping the future of digital
            experiences.
          </p>

          {/* buttons */}
          <div className="w-full flex gap-4">
            <Link
              href="/portfolio"
              className="p-4 rounded-lg  ring-1 ring-black bg-black text-white"
            >
              View My Work
            </Link>
            <Link href="/contact" className="p-4 rounded-lg  ring-1 ring-black">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
