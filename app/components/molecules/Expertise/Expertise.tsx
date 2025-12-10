"use client";

import { motion } from "framer-motion";
import { Badge } from "@/app/components/ui/badge";
import { portfolio } from "@/app/data/portfolio";

export default function Expertise() {
  const { languages, frameworks, cloud, ai } = portfolio.skills;

  const allSkills = [
    { title: "Languages", items: languages, color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    { title: "Frameworks", items: frameworks, color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
    { title: "Cloud & AI", items: [...cloud, ...ai], color: "bg-pink-500/10 text-pink-400 border-pink-500/20" },
  ];

  return (
    <section id="expertise" className="py-20 bg-black/20">
      <div className="container px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Tech Arsenal</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allSkills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl neon-glow hover:bg-white/5 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-white">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.items.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-full border text-sm font-semibold backdrop-blur-sm ${category.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
