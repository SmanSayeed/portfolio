import { portfolio } from "@/app/data/portfolio";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { ArrowLeft, ExternalLink, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static params for classic SSG of known projects
export async function generateStaticParams() {
    return portfolio.projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = portfolio.projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-24 pb-20 container px-4 md:px-6">
            <Link href="/#projects">
                <Button variant="ghost" className="mb-8 gap-2 pl-0 hover:bg-transparent hover:text-primary">
                    <ArrowLeft className="w-4 h-4" /> Back to Projects
                </Button>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <Badge variant="secondary" className="text-primary">{project.category}</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                            {project.title}
                        </h1>
                    </div>

                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {project.description}
                    </p>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map(tech => (
                                <Badge key={tech} variant="outline" className="px-3 py-1 text-sm border-primary/20 bg-primary/5">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 pt-6">
                        <Button size="lg" className="flex-1 gap-2">
                            <ExternalLink className="w-4 h-4" /> Visit Live Site
                        </Button>
                        <Button variant="outline" size="lg" className="gap-2">
                            <Share2 className="w-4 h-4" /> Share
                        </Button>
                    </div>
                </div>

                <div className="relative aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">No Image</div>
                    )}
                </div>
            </div>
        </div>
    );
}
