import {
  IconShoppingCart,
  IconBuilding,
  IconStethoscope,
  IconTools,
  IconExternalLink,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Project {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
  isLarge?: boolean;
}

const featuredProjects: Project[] = [
  {
    title: "Twsaa",
    icon: IconShoppingCart,
    description:
      "First Saudi AI-powered SaaS e-commerce platform enabling instant online store creation with integrated marketing tools, payment gateways, and shipping providers. Features AI-driven SEO, product descriptions, and automated ad campaign management across social media platforms.",
    technologies: [
      "Laravel",
      "Node.js",
      "Vue.js",
      "AI",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    image: "https://images.pexels.com/photos/5905701/pexels-photo-5905701.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "https://twsaa.com",
    isLarge: true,
  },
  {
    title: "M5azn",
    icon: IconBuilding,
    description:
      "Saudi Arabia's first dropshipping platform providing seamless product integration with local and international suppliers. Features automatic order fulfillment, multi-marketplace integration (Amazon, Trendyol), and comprehensive inventory management with real-time analytics.",
    technologies: [
      "Laravel",
      "Express.js",
      "Angular",
      "PostgreSQL",
      "API Integration",
      "Docker",
    ],
    image: "https://images.pexels.com/photos/5905701/pexels-photo-5905701.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "https://m5azn.com",
    isLarge: true,
  },
  {
    title: "MyClinics",
    icon: IconStethoscope,
    description:
      "Healthcare management system streamlining clinic operations and patient management.",
    technologies: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    title: "Medical Shipment - AlMaghrib",
    icon: IconStethoscope,
    description:
      "Medical logistics and shipment tracking system for efficient healthcare supply chain management.",
    technologies: ["Laravel", "Angular", "PostgreSQL"],
  },
  {
    title: "Hospitality Ordering App",
    icon: IconTools,
    description:
      "Digital ordering solution for restaurants and hospitality businesses with real-time management.",
    technologies: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    title: "MD Pocket",
    icon: IconStethoscope,
    description:
      "Mobile-first medical reference and patient management tool for healthcare professionals.",
    technologies: ["Laravel", "Vue.js", "MySQL"],
  },
];

export function ProjectsSection() {
  const largeProjects = featuredProjects.filter((p) => p.isLarge);
  const smallProjects = featuredProjects.filter((p) => !p.isLarge);

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-8 lg:px-16 bg-background"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-16">
          Featured Projects
        </h2>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
          role="list"
          aria-label="Featured projects"
        >
          {largeProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <article
                key={project.title}
                className="group bg-card rounded-lg border border-border hover:border-accent hover:scale-[1.02] hover:shadow-lg transition-all duration-300 overflow-hidden animate-fade-in-up focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2"
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
                role="listitem"
              >
                <div className="w-full h-48 bg-secondary relative overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-secondary/40" aria-hidden="true" />
                  )}
                  <div
                    className="absolute inset-0 bg-background/60 group-hover:bg-background/70 transition-all duration-300"
                    aria-hidden="true"
                  />
                  {project.link && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        asChild
                        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                          aria-label={`Visit ${project.title} website`}
                        >
                          Visit Website
                          <IconExternalLink className="w-4 h-4" aria-hidden="true" />
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-foreground" aria-hidden="true" />
                    <div className="flex items-center gap-2 flex-1">
                      <h3 className="text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      {project.link && (
                        <IconExternalLink
                          className="w-4 h-4 text-muted-foreground"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2" role="list">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded-md border border-border"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Additional projects"
        >
          {smallProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <article
                key={project.title}
                className="group bg-card rounded-lg p-6 border border-border hover:border-accent hover:scale-[1.02] hover:shadow-lg transition-all duration-300 animate-fade-in-up focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2"
                style={{
                  animationDelay: `${(largeProjects.length + index) * 0.1}s`,
                }}
                role="listitem"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-5 h-5 text-foreground" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2" role="list">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="px-3 py-1.5 bg-slate-700/50 text-white text-xs rounded-md border border-slate-600/50"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
