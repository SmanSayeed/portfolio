"use client";

import { motion } from "framer-motion";
import { Badge } from "@/app/components/ui/badge";
import { portfolio } from "@/app/data/portfolio";

export default function About() {
    const { bio } = portfolio.personal;

    return (
        <section id="about" className="py-20 relative overflow-hidden bg-secondary/5">
            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center space-y-8"
                >
                    <Badge variant="outline" className="border-purple-500/50 text-purple-600 dark:text-purple-400">Who I Am</Badge>

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
                        Turning <span className="text-gradient">Complex Problems</span> into <br className="hidden md:block" /> Elegant Solutions
                    </h2>

                    <div className="p-8 md:p-12 rounded-3xl glass text-xl md:text-2xl leading-relaxed text-muted-foreground shadow-2xl">
                        <p>
                            {bio}
                        </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                </motion.div>
            </div>
        </section>
    );
}
