"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Layout, ChevronRight, Globe, Award } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { portfolio } from "@/app/data/portfolio";
import { cn } from "@/app/lib/utils";

export default function ExperienceTree() {
  const { experience } = portfolio;

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-20 relative z-10">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">Career Path</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Professional Journey</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Tree Trunk Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/20 via-blue-500/20 to-purple-500/20 md:-translate-x-1/2 rounded-full" />

          <div className="space-y-16">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center",
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Timeline Marker (Mobile Left / Desktop Center) */}
                  <div className="absolute left-[20px] md:left-1/2 w-8 h-8 -translate-x-1/2 flex items-center justify-center z-10">
                    <div className={cn(
                      "w-4 h-4 rounded-full border-4 shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-500",
                      item.highlight ? "bg-purple-500 border-white dark:border-zinc-900 scale-125" : "bg-background border-purple-500"
                    )} />
                  </div>

                  {/* Content Card */}
                  <div className={cn(
                    "w-full md:w-[calc(50%-40px)] pl-12 md:pl-0",
                    isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  )}>
                    <div className={cn(
                      "relative p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:shadow-2xl group",
                      item.highlight
                        ? "bg-gradient-to-br from-purple-900/10 to-blue-900/10 border-purple-500/50"
                        : "bg-card border-border hover:border-primary/50"
                    )}>
                      {/* Connecting Branch Line (Desktop only - simplified via CSS pseudo-elements idea, but explicit div here for control) */}
                      <div className={cn(
                        "hidden md:block absolute top-1/2 h-[2px] w-12 bg-purple-500/30",
                        isEven ? "-right-12" : "-left-12"
                      )} />

                      <div className={cn("flex flex-col gap-2 mb-4", isEven ? "md:items-end" : "md:items-start")}>
                        <span className="text-sm font-bold tracking-wider text-purple-500 uppercase">{item.year}</span>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                        <div className={cn("flex items-center gap-2 text-muted-foreground", isEven ? "md:flex-row-reverse" : "flex-row")}>
                          {item.highlight ? <Award className="w-4 h-4 text-yellow-500" /> : <Globe className="w-4 h-4" />}
                          <span className="font-medium text-foreground">{item.institute}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {item.details}
                      </p>

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:gap-3",
                            item.highlight ? "text-purple-400 hover:text-purple-300" : "text-primary hover:text-primary/80"
                          )}
                        >
                          {item.linkTitle || "Visit"} <ChevronRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Empty side for layout balance */}
                  <div className="hidden md:block w-[calc(50%-40px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
