"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/app/components/ui/badge";
import { portfolio } from "@/app/data/portfolio";
import { cn } from "@/app/lib/utils";
import { Button } from "@/app/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function ExperienceTree() {
  const { experience } = portfolio;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 relative z-10 flex flex-col items-center">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">Career Path</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">Professional Journey</h2>

          <Button
            onClick={() => setShowDetails(!showDetails)}
            size="lg"
            variant="outline"
            className="rounded-full border-purple-500/50 text-purple-500 hover:bg-purple-500/10 hover:text-purple-400 transition-all font-semibold gap-2 animate-pulse hover:animate-none"
          >
            {showDetails ? "Collapse Details" : "View Detailed Experience"}
            {showDetails ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </Button>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Tree Trunk Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/20 via-blue-500/20 to-purple-500/20 md:-translate-x-1/2 rounded-full" />

          <div className={cn("space-y-4 md:space-y-6 transition-all duration-500", showDetails ? "space-y-8 md:space-y-12" : "")}>
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
                    "relative flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center transition-all duration-500",
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Timeline Marker - Branch Node */}
                  <div className="absolute left-[20px] md:left-1/2 w-8 h-8 -translate-x-1/2 flex items-center justify-center z-10">
                    <div className={cn(
                      "w-4 h-4 rounded-full border-4 shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-500",
                      item.highlight ? "bg-purple-500 border-white dark:border-zinc-900 scale-125" : "bg-background border-purple-500"
                    )} />
                  </div>

                  {/* Connecting Branch Line */}
                  <div className={cn(
                    "absolute top-8 md:top-1/2 left-[20px] md:left-1/2 w-8 md:w-[calc(50%-40px)] h-1 bg-purple-500/20 -z-10 origin-left transition-all duration-500",
                    isEven ? "md:ml-0 md:origin-left" : "md:origin-right md:-ml-[calc(50%-40px)]",
                    !showDetails && "opacity-0 md:opacity-100 scale-x-50" // Subtler lines when collapsed
                  )} />

                  {/* Content Card */}
                  <div className={cn(
                    "w-full md:w-[calc(50%-40px)] pl-12 md:pl-0 transition-all duration-500",
                    isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  )}>
                    <div className={cn(
                      "relative rounded-2xl border transition-all duration-500 hover:shadow-2xl group cursor-pointer",
                      showDetails ? "p-6 md:p-8" : "p-4", // Smaller padding when collapsed
                      item.highlight
                        ? "bg-gradient-to-br from-purple-900/10 to-blue-900/10 border-purple-500/50"
                        : "bg-card border-border hover:border-primary/50"
                    )}
                      onClick={() => setShowDetails(true)} // Clicking card also expands
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-mono text-primary font-bold">{item.year}</span>
                        <h3 className={cn("font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 transition-all duration-300", showDetails ? "text-xl md:text-2xl" : "text-lg")}>
                          {item.title}
                        </h3>
                        <div className="text-base font-semibold text-muted-foreground">
                          {item.institute}
                        </div>
                      </div>

                      {/* Expandable Details */}
                      <AnimatePresence>
                        {showDetails && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-border/50 mt-4">
                              <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
                                {item.details}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

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
