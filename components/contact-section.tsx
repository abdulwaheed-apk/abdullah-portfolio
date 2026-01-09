"use client";

import { useState } from "react";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconSend,
  IconBrandLinkedin,
  IconBrandGithub,
  IconCopy,
  IconCheck,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  isCopyable?: boolean;
}

const contactInfo: ContactInfo[] = [
  {
    icon: IconMail,
    label: "Email",
    value: "abdullah.dev.analyst@gmail.com",
    isCopyable: true,
  },
  {
    icon: IconPhone,
    label: "Phone",
    value: "+966 536 942 191",
    isCopyable: true,
  },
  {
    icon: IconMapPin,
    label: "Location",
    value: "Riyadh, Saudi Arabia",
    isCopyable: false,
  },
];

export function ContactSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (value: string, index: number) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedIndex(index);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#0066FF", "#BFC5C9", "#FFFFFF"],
      });
      setTimeout(() => {
        setCopiedIndex(null);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-8 lg:px-16 bg-background"
      aria-labelledby="contact-heading"
    >
      <div className="w-full max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <p className="text-accent text-lg mb-4">Let&apos;s Connect</p>
          <h2
            id="contact-heading"
            className="text-5xl md:text-6xl font-bold text-foreground mb-6"
          >
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you have a project in mind or just want to chat about tech,
            I&apos;m always open to new opportunities and conversations.
          </p>
        </header>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          role="list"
          aria-label="Contact information"
        >
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            const isCopied = copiedIndex === index;
            return (
              <div
                key={contact.label}
                className="bg-card rounded-lg p-6 border border-border hover:border-accent hover:scale-[1.02] hover:shadow-lg transition-all duration-300 text-center animate-fade-in-up group focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
                role="listitem"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-accent/20 p-3 rounded-lg" aria-hidden="true">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-foreground font-semibold mb-2">
                  {contact.label}
                </h3>
                {contact.isCopyable ? (
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-muted-foreground">{contact.value}</span>
                    <button
                      onClick={() => handleCopy(contact.value, index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleCopy(contact.value, index);
                        }
                      }}
                      className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 p-1 hover:bg-accent/10 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                      aria-label={`Copy ${contact.label.toLowerCase()}`}
                      aria-pressed={isCopied}
                    >
                      {isCopied ? (
                        <>
                          <IconCheck className="w-4 h-4 text-green-400" />
                          <span className="sr-only">Copied</span>
                        </>
                      ) : (
                        <>
                          <IconCopy className="w-4 h-4 text-muted-foreground hover:text-accent transition-colors" />
                          <span className="sr-only">Copy to clipboard</span>
                        </>
                      )}
                    </button>
                  </div>
                ) : (
                  <p className="text-muted-foreground">{contact.value}</p>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mb-12">
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-8 py-6 text-lg shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            <a href="mailto:abdullah.dev.analyst@gmail.com">
              <IconSend className="w-5 h-5 mr-2" aria-hidden="true" />
              Send Message
            </a>
          </Button>
        </div>
        <nav
          className="flex justify-center gap-4 mb-12"
          aria-label="Social media links"
        >
          <Button
            asChild
            variant="outline"
            size="icon"
            className="w-12 h-12 rounded-lg border-border text-foreground hover:bg-accent/10 hover:border-accent hover:text-accent transition-all duration-300"
          >
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
            >
              <IconBrandLinkedin className="w-6 h-6" aria-hidden="true" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="w-12 h-12 rounded-lg border-border text-foreground hover:bg-accent/10 hover:border-accent hover:text-accent transition-all duration-300"
          >
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
            >
              <IconBrandGithub className="w-6 h-6" aria-hidden="true" />
            </a>
          </Button>
        </nav>
        <footer className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Abdullah Khan. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Software Engineer & Data Analyst | Specialized in Full-Stack
            Development & Enterprise Solutions
          </p>
        </footer>
      </div>
    </section>
  );
}
