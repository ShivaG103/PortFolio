"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Links  */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link, i) => (
          <NavLink link={link} key={i} />
        ))}
      </div>

      {/* Logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <motion.div
          className="text-sm bg-black rounded-md p-1 font-semibold "
          initial={{ rotateZ: 0, scale: 1 }}
          whileHover={{ rotateZ: "3deg", scale: 1.2 }}
          transition={{ type: "spring", bounce: 0.75 }}
        >
          <Link href="/" className="flex items-center justify-center">
            <span className="text-white mr-1">Shivam</span>
            <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
              Gupta
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Socials */}
      <div className="hidden md:flex items-center gap-4 w-1/3 justify-end">
        <motion.span
          whileHover={{
            backgroundColor: "rgb(0,0,0)",
            borderRadius: "4px",
            color: "rgb(255, 255, 255)",
            width: "4.8rem",
            fontSize: "18px",
            textAlign: "center",
          }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="w-fit text-center"
        >
          <Link
            href="/shivam_mern_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Link>
        </motion.span>

        <motion.span
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", bounce: 0.75 }}
        >
          <Link
            href="https://github.com/ShivaG103"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/github.png" alt="" width={24} height={24} />
          </Link>
        </motion.span>
        {/* <motion.span
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", bounce: 0.75 }}
        >
          <Link
            href="https://www.facebook.com/profile.php?id=100011206691840&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/facebook.png" alt="" width={24} height={24} />
          </Link>
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", bounce: 0.75 }}
        >
          <Link
            href="https://www.instagram.com/__shiva___gupta/?igsh=d2Y3Znk5YXNqdmlt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/instagram.png" alt="" width={24} height={24} />
          </Link>
        </motion.span> */}

        <motion.span
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", bounce: 0.75 }}
        >
          <Link
            href="https://www.linkedin.com/in/shivamggggg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/linkedin.png" alt="" width={24} height={24} />
          </Link>
        </motion.span>
      </div>

      {/* responive menu */}
      <div className="md:hidden">
        {/* menu button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {/* menu list  */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link, i) => (
              <motion.div variants={listItemVariants} key={i} className="">
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
            <motion.div variants={listItemVariants}>
              <Link
                href="/shivam_mern_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
