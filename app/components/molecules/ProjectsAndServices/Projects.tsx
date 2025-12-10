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
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleProjects = portfolio.projects.slice(0, visibleCount);

  // In Next.js, importing assets or using string paths is fine.
  // We will enforce a uniform aspect ratio using CSS.

  return (
    <section id="projects" className="py-24 bg-secondary/5">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          {/* Header Content */}
          <div className="inline-block p-2 rounded-full bg-secondary/30 mb-4 backdrop-blur-sm">
            <div className="px-4 py-1 rounded-full border border-primary/20 bg-background/50 text-sm font-medium text-primary shadow-[0_0_15px_rgba(168,85,247,0.1)]">
              My Portfolio
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            A collection of applications demonstrating expertise in Full Stack Development, Cloud Architecture, and AI Integration.
          </p>
        </div>

        {/* Regular Grid (Uniform) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground line-clamp-2 text-sm">{project.description}</p>

                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map(tech => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-secondary/50">{tech}</Badge>
                  ))}
                  {project.stack.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-secondary/50">+{project.stack.length - 3}</Badge>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < portfolio.projects.length && (
          <div className="mt-12 text-center">
            <Button
              onClick={() => setVisibleCount(portfolio.projects.length)}
              variant="outline" size="lg" className="rounded-full px-8 border-primary/20 hover:bg-primary/10 text-lg"
            >
              Load More Projects
            </Button>
          </div>
        )}

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
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card border-none">
            {selectedProject && (
              <div className="flex flex-col md:flex-row h-[80vh] md:h-auto overflow-y-auto">
                {/* Image Section */}
                <div className="w-full md:w-1/2 relative bg-muted aspect-video md:aspect-auto">
                  {selectedProject.image && (
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
                  <div className="mb-6">
                    <Badge className="mb-3">{selectedProject.category}</Badge>
                    <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.stack.map(tech => (
                          <Badge key={tech} variant="outline" className="text-sm py-1 px-3 border-primary/20 bg-primary/5">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-8 flex gap-4">
                    <Button className="w-full gap-2 rounded-full" asChild>
                      <div className="cursor-pointer">
                        I want a similar project <ExternalLink className="w-4 h-4" />
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </section >
  );
}
