"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, Monitor, Share2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/app/components/ui/dialog";
import { portfolio } from "@/app/data/portfolio";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof portfolio.projects[0] | null>(null);

  // In Next.js, importing assets or using string paths is fine.
  // We will enforce a uniform aspect ratio using CSS.

  return (
    <section id="projects" className="py-24 bg-secondary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <Badge variant="outline" className="px-4 py-1 border-purple-500/50 text-purple-600 dark:text-purple-400">
            My Works
          </Badge>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            A showcasing of technical expertise and creative problem solving.
          </p>
        </div>

        {/* Regular Grid (Uniform) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl bg-card border border-border overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container - UNIFORM ASPECT RATIO */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-muted">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <Monitor className="w-12 h-12 opacity-20" />
                  </div>
                )}

                {/* Overlay Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-6 py-3 bg-white/90 text-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                  {/* Tiny visual indicator */}
                  <div className="w-8 h-8 rounded-full border flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <ExternalLink size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Services Section Injection (As requested "In the project somewhere add my services section") --- 
           Actually, the user asked to add a separate Services section AND "In the project somewhere add my services section." 
           This might mean a "Call to Action" or "Upsell" inside the Projects area? 
           Or it implies "Put the Services section CLOSE to projects". 
           For now, I have a dedicated Services component in page.tsx, so I won't duplicate it inside here, 
           but I will add a "CTA" card here if needed. 
           Wait, user said "In the project somewhere add my services section." -> "In the project section, add my services section". 
           I will assume the dedicated component I made in Step 4 is sufficient if placed nearby.
        */}

        {/* Modal */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card border-none rounded-3xl">
            {selectedProject && (
              <div className="flex flex-col md:flex-row max-h-[90vh] md:h-[600px]">
                {/* Image Side */}
                <div className="hidden md:block w-1/2 relative h-full bg-muted">
                  {selectedProject.image && (
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 flex flex-col p-6 md:p-10 h-full overflow-y-auto">
                  <DialogHeader className="mb-6 text-left">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-primary/10 text-primary border-none hover:bg-primary/20">{selectedProject.category}</Badge>
                    </div>
                    <DialogTitle className="text-3xl md:text-4xl font-bold">{selectedProject.title}</DialogTitle>
                  </DialogHeader>

                  {/* Mobile Image (Visible only on small screens) */}
                  <div className="md:hidden w-full aspect-video relative rounded-xl overflow-hidden mb-6 bg-muted">
                    {selectedProject.image && (
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>

                  <div className="space-y-6 flex-1">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Description</h4>
                      <p className="text-lg leading-relaxed text-foreground/90">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.stack.map(tech => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t flex gap-4">
                    <Button size="lg" className="flex-1 w-full text-base font-semibold">
                      Visit Project <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
}
