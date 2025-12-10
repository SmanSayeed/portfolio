"use client";

import Link from "next/link";
import { portfolio } from "@/app/data/portfolio";
import { Github, Linkedin, Twitter, Facebook, Mail } from "lucide-react";

export default function Footer() {
  const { socials, personal } = portfolio;

  return (
    <footer className="bg-secondary/5 border-t border-border pt-20 pb-10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              {personal.name}
            </Link>
            <p className="text-muted-foreground text-lg max-w-sm">
              Building scalable solutions for the web and beyond. Let's create something extraordinary together.
            </p>
            <div className="flex gap-4">
              <Link href={socials.github} target="_blank" className="p-3 rounded-full bg-background border hover:border-primary/50 transition-colors"><Github size={20} /></Link>
              <Link href={socials.linkedin} target="_blank" className="p-3 rounded-full bg-background border hover:border-primary/50 transition-colors"><Linkedin size={20} /></Link>
              <Link href={socials.twitter} target="_blank" className="p-3 rounded-full bg-background border hover:border-primary/50 transition-colors"><Twitter size={20} /></Link>
              <Link href={socials.facebook} target="_blank" className="p-3 rounded-full bg-background border hover:border-primary/50 transition-colors"><Facebook size={20} /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg mb-2">Explore</h4>
            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</Link>
            <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link>
            <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg mb-2">Contact</h4>
            <Link href={`mailto:${personal.email}`} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Mail size={16} /> {personal.email}
            </Link>
            <p className="text-muted-foreground">{personal.location}</p>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}