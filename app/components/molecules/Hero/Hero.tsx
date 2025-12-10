"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { portfolio } from "@/app/data/portfolio";
import { useEffect, useState } from "react";

// Ticker Component for the "Angled Sliding Texts"
function Marquee({ text, direction = 1 }: { text: string, direction?: number }) {
  return (
    <div className="flex overflow-hidden whitespace-nowrap opacity-10 select-none">
      <motion.div
        animate={{ x: direction * -1000 }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex gap-4 text-9xl font-black uppercase text-white/20"
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-4">{text}</span>
        ))}
      </motion.div>
    </div>
  );
}

// Typing/Cycling Text Component
function AnimatedRoles({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="h-8 overflow-hidden relative">
      <motion.div
        key={index}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-2xl font-semibold text-purple-400"
      >
        {roles[index]}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const { name, roles, bio, hooks } = portfolio.personal;
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative w-full min-h-screen flex items-center bg-background overflow-hidden">

      {/* Background Angled Marquee */}
      <div className="absolute inset-0 flex flex-col justify-center items-center -rotate-[15deg] scale-150 pointer-events-none z-0">
        <Marquee text="Developer Founder Mentor" direction={1} />
        <Marquee text="Innovation Code Future" direction={-1} />
        <Marquee text="Fullstack AI Cloud" direction={1} />
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/30 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />


      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Content (Text) */}
          <div className="flex-1 flex flex-col gap-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xl font-medium text-gray-400 mb-2">Meet</h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                <span className="text-gradient block">{name}</span>
              </h1>

              <AnimatedRoles roles={roles} />
            </motion.div>

            {/* About Me Points (Animated) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-foreground uppercase tracking-widest border-l-4 border-purple-500 pl-4 py-1">
                About Me
              </h3>
              <ul className="space-y-3">
                {hooks.map((hook, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + (i * 0.2) }}
                    className="flex items-start gap-3 text-muted-foreground text-lg"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                    {hook}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4"
            >
              <Link href="#projects">
                <Button size="lg" className="w-full sm:w-auto rounded-full text-lg px-8 py-6 bg-white text-black hover:bg-gray-200">
                  My Work <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-lg px-8 py-6 border-white/20 hover:bg-white/10">
                  Contact Me
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex gap-6 justify-center lg:justify-start pt-4"
            >
              <Link href={portfolio.socials.github} target="_blank" className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-white/60 hover:text-white"><Github /></Link>
              <Link href={portfolio.socials.linkedin} target="_blank" className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-white/60 hover:text-white"><Linkedin /></Link>
              <Link href={`mailto:${portfolio.personal.email}`} className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-white/60 hover:text-white"><Mail /></Link>
              <Link href={portfolio.socials.twitter} target="_blank" className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-white/60 hover:text-white"><Twitter /></Link>
            </motion.div>
          </div>

          {/* Right Content (Image) */}
          <motion.div
            style={{ y: y1 }}
            className="flex-1 relative w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[600px] lg:w-[600px] lg:h-[700px]">
              {/* Image Backdrop/Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-20" />

              <Image
                src="/images/hero/saadman2.png"
                alt={name}
                fill
                className="object-cover object-top z-10 mask-image-b"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
