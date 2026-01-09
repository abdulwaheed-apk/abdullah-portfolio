import { Button } from "@/components/ui/button";
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconChevronDown,
} from "@tabler/icons-react";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";

const NAVIGATION_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 lg:px-16 bg-background border-b border-border">
        <div className="text-2xl font-bold text-foreground" aria-label="Abdullah Khan Logo">
          AK.
        </div>
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
          aria-label="Hire me"
        >
          Hire Me
        </Button>
      </header>
  );
};

const Hero = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
    <p className="text-accent text-lg mb-4">Hello, I&apos;m</p>
    <h1 id="hero-heading" className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
      <span className="text-foreground">Abdullah</span>{" "}
      <span className="text-accent">Khan</span>
    </h1>
    <div className="w-24 h-1 bg-accent mb-6" aria-hidden="true" />
    <h2 className="text-2xl md:text-3xl text-foreground mb-6">
      Software Engineer & Data Analyst
    </h2>
    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-8">
      7+ years building enterprise e-commerce platforms and marketplace
      integrations. Specialized in Laravel, Node.js, Docker, and API
      integrations. Currently leading Twsaa & M5azn in Riyadh.
    </p>
    <div className="flex items-center gap-6 mb-16">
      <Button
        asChild
        className="bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        <a href="#contact">
          <IconMail className="w-5 h-5" aria-hidden="true" />
          Get in Touch
        </a>
      </Button>
      <Button
        asChild
        variant="ghost"
        size="icon"
        className="w-12 h-12 rounded-full bg-secondary hover:bg-secondary/80 text-foreground"
        aria-label="Visit LinkedIn profile"
      >
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin className="w-6 h-6" aria-hidden="true" />
        </a>
      </Button>
      <Button
        asChild
        variant="ghost"
        size="icon"
        className="w-12 h-12 rounded-full bg-secondary hover:bg-secondary/80 text-foreground"
        aria-label="Visit GitHub profile"
      >
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub className="w-6 h-6" aria-hidden="true" />
        </a>
      </Button>
    </div>
  </div>
  );
};

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>
     <Navbar />
      <main id="main-content">
        <section
          className="min-h-screen flex items-center justify-center px-8 lg:px-16 pt-24 bg-background"
          aria-labelledby="hero-heading"
        >
          <Hero />
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            aria-hidden="true"
          >
            <IconChevronDown className="w-6 h-6 text-foreground" />
          </div>
        </section>
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
