"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/app/components/ui/badge";
import { portfolio } from "@/app/data/portfolio";
import { ExternalLink, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section id="timeline" ref={containerRef} className="py-24 bg-background relative">
            <div className="container px-4 md:px-6 mb-12">
                <Badge variant="outline" className="mb-4 text-primary border-primary/20">Milestones</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recent Highlights</h2>
            </div>

            <div className="w-full overflow-x-auto pb-8 hide-scrollbar">
                <div className="flex gap-8 px-4 md:px-6 w-max">
                    {portfolio.timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative w-[300px] md:w-[400px] h-[500px] rounded-3xl overflow-hidden group border border-border bg-card shrink-0"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Background Image */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-4">
                                <div className="flex items-center gap-2 text-primary font-mono text-sm">
                                    <Calendar size={14} />
                                    <span>{item.year}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white leading-tight">{item.title}</h3>
                                <p className="text-gray-300 line-clamp-3">{item.description}</p>

                                {item.link && (
                                    <Link href={item.link} target="_blank" className="flex items-center gap-2 text-white hover:text-primary transition-colors mt-2">
                                        Read More <ExternalLink size={16} />
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
