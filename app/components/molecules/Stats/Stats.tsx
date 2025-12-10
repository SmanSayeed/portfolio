"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/app/data/portfolio";

export default function Stats() {
    const { stats } = portfolio;

    return (
        <section className="py-10 bg-primary/5 border-y">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
