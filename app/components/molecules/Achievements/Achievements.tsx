"use client";

import { motion } from "framer-motion";
import { Badge } from "@/app/components/ui/badge";
import { portfolio } from "@/app/data/portfolio";
import { Award, GraduationCap, Trophy } from "lucide-react";

export default function Achievements() {
    const { certificates, education, achievements } = portfolio;

    return (
        <section id="achievements" className="py-20 bg-background relative overflow-hidden">
            <div className="container px-4 md:px-6">

                {/* Header */}
                <div className="text-center mb-16 space-y-4 relative z-10">
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500 border-none">
                        Excellence & Learning
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                        Achievements & Certifications
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">

                    {/* Achievement Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Trophy className="w-8 h-8 text-yellow-500" />
                            <h3 className="text-2xl font-bold">Awards & Recognition</h3>
                        </div>
                        <div className="space-y-4">
                            {achievements.map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-card border border-border shadow-sm flex gap-4 items-start">
                                    <span className="mt-1 w-2 h-2 rounded-full bg-yellow-500 shrink-0" />
                                    <p className="text-lg font-medium">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-3 mb-6 mt-12">
                            <GraduationCap className="w-8 h-8 text-blue-500" />
                            <h3 className="text-2xl font-bold">Education</h3>
                        </div>
                        <div className="space-y-4">
                            {education.map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-card border border-border shadow-sm">
                                    <h4 className="text-xl font-bold">{item.degree}</h4>
                                    <p className="text-primary font-medium">{item.institute}</p>
                                    <p className="text-muted-foreground text-sm">{item.year}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications Category */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Award className="w-8 h-8 text-purple-500" />
                            <h3 className="text-2xl font-bold">Certifications</h3>
                        </div>
                        <div className="grid md:grid-cols-1 gap-4">
                            {certificates.map((cert, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-4 rounded-xl bg-secondary/5 border border-border flex items-center gap-3 hover:bg-secondary/10 transition-colors"
                                >
                                    <Badge variant="outline" className="h-8 w-8 rounded-full flex items-center justify-center border-purple-500 text-purple-500 p-0">
                                        {i + 1}
                                    </Badge>
                                    <span className="font-medium text-foreground">{cert}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Decorative Gradient Box */}
                        <div className="mt-8 p-8 rounded-3xl bg-gradient-to-br from-purple-600 to-blue-600 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold mb-2">Always Learning</h4>
                                <p className="text-white/80">"Continuous improvement is better than delayed perfection."</p>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
