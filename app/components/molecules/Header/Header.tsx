"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { ThemeSwitcher } from "../../ThemeSwitcher/ThemeSwitcher";
import { cn } from "@/app/lib/utils";

export default function Header() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Services", link: "#services" },
    { name: "Reviews", link: "#reviews" },
    { name: "Skills", link: "#expertise" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center",
          scrolled ? "glass shadow-md py-3" : "bg-transparent py-4"
        )}
      >
        <div className="text-2xl font-bold tracking-tighter">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-gradient">sman.dev</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-sm font-medium hover:text-primary transition-colors hover:font-bold"
            >
              {item.name}
            </Link>
          ))}
          <ThemeSwitcher />
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeSwitcher />
          <button onClick={() => setShow(!show)} className="text-2xl">
            {show ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ type: "tween" }}
        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            onClick={() => setShow(false)}
            className="text-2xl font-bold hover:text-primary"
          >
            {item.name}
          </Link>
        ))}
      </motion.div>
    </>
  );
}
