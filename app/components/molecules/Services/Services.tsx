"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/app/data/portfolio";
import { Badge } from "@/app/components/ui/badge";
import { Monitor, Smartphone, Bot, Cloud, Briefcase, Code } from "lucide-react";

// Icon mapping
const iconMap: any = {
    "Globe": Monitor,
    "Smartphone": Smartphone,
    "Bot": Bot,
    "Cloud": Cloud,
    "Briefcase": Briefcase,
};

export default function Services() {
    return (
        <section id="services" className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                        What I Offer
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Specialized Services
                    </h2>
                    <p className="max-w-[700px] mx-auto text-muted-foreground text-lg">
                        High-impact solutions for businesses and startups.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolio.services.map((service, index) => {
                        const Icon = iconMap[service.icon] || Code;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-3xl border border-border bg-card hover:bg-accent/5 transition-all hover:-translate-y-2 hover:shadow-xl group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
