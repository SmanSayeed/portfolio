"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/app/components/ui/badge";
import { portfolio } from "@/app/data/portfolio";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="reviews" className="py-24 bg-secondary/5 relative overflow-hidden">
            <div className="container px-4 md:px-6">

                <div className="text-center mb-16 space-y-4">
                    <Badge variant="outline" className="border-yellow-500/50 text-yellow-600 dark:text-yellow-400">
                        Client Stories
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Trusted by Global Professionals
                    </h2>
                </div>

                {/* Scrolling Carousel Container */}
                <div className="relative w-full overflow-hidden mask-linear-fade">
                    <motion.div
                        className="flex gap-6 w-max cursor-grab active:cursor-grabbing p-4"
                        drag="x"
                        dragConstraints={{ right: 0, left: -1000 }} // Simple drag constraint, ideally dynamic
                        whileTap={{ cursor: "grabbing" }}
                    >
                        {[...portfolio.testimonials, ...portfolio.testimonials].map((review, index) => (
                            <motion.div
                                key={index}
                                className="w-[350px] md:w-[450px] p-8 rounded-3xl bg-background border border-border shadow-lg flex flex-col gap-6 select-none"
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <Quote className="w-10 h-10 text-primary/20 rotate-180" />

                                <p className="text-lg text-muted-foreground leading-relaxed italic">
                                    "{review.text}"
                                </p>

                                <div className="mt-auto flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-primary/20">
                                        <Image
                                            src={review.image}
                                            alt={review.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">{review.name}</h4>
                                        <p className="text-xs text-primary font-medium uppercase tracking-wide">{review.role}</p>
                                    </div>
                                    <div className="ml-auto flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map(star => <Star key={star} size={14} className="fill-yellow-500 text-yellow-500" />)}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
