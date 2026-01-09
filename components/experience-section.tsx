import {
  IconBriefcase,
  IconMapPin,
  IconCalendar,
  IconTrendingUp,
} from "@tabler/icons-react";

interface PerformanceHighlight {
  metric: string;
  value: string;
}

interface Project {
  name: string;
  description: string;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  performanceHighlights?: PerformanceHighlight[];
  projects?: Project[];
  technicalAchievements?: string[];
  keyAchievements?: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Project Manager",
    company: "M5azn",
    location: "Riyadh, Saudi Arabia",
    startDate: "Aug 2024",
    endDate: "Present",
    isCurrent: true,
    performanceHighlights: [
      { metric: "30% faster delivery", value: "30%" },
      { metric: "60% reduced load", value: "60%" },
    ],
    projects: [
      {
        name: "Twsaa - Al E-commerce SaaS",
        description:
          "First Saudi AI-powered platform enabling instant online store creation with integrated marketing automation",
      },
      {
        name: "M5azn - Dropshipping Platform",
        description:
          "Saudi Arabia's first dropshipping marketplace with seamless supplier integration and fulfillment",
      },
    ],
    technicalAchievements: [
      "Integrated social media advertising APIs (Facebook, Instagram, TikTok) for automated campaign management",
      "Built Amazon Seller Central and Trendyol marketplace integrations with real-time inventory sync",
      "Implemented payment gateway integrations (Stripe, PayPal, local Saudi payment methods)",
      "Architected microservices using Docker, reducing deployment time by 50%",
      "Implemented Redis caching layer, reducing database load by 60% and response times by 45%",
      "Designed and developed RESTful APIs handling 10M+ requests monthly",
    ],
    technologies: [
      "Laravel",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Redis",
      "AWS",
      "Express.js",
      "API Integration",
    ],
  },
  {
    title: "Senior Full-Stack Developer & Data Analyst",
    company: "Bitfoot Sdn. Bhd",
    location: "Malaysia",
    startDate: "Aug 2022",
    endDate: "Jul 2024",
    performanceHighlights: [
      { metric: "30% engagement boost", value: "30%" },
      { metric: "40% faster load times", value: "40%" },
    ],
    keyAchievements: [
      "Led a team of 5 developers in building scalable e-commerce solutions",
      "Architected microservices infrastructure, improving system reliability by 35%",
      "Reduced application load times by 40% through optimization and caching strategies",
      "Automated CI/CD pipelines using Jenkins, reducing deployment time by 60%",
      "Developed real-time performance dashboards using Power BI, enabling data-driven decisions",
      "Mentored junior developers and conducted code reviews to maintain code quality",
    ],
    technologies: [
      "Laravel",
      "Angular",
      "Vue.js",
      "Jenkins",
      "Docker",
      "Power BI",
      "MySQL",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "CreditBPO.com",
    location: "Philippines",
    startDate: "Aug 2021",
    endDate: "Jul 2022",
    keyAchievements: [
      "Developed and maintained enterprise web applications serving 50K+ users",
      "Collaborated with product teams to implement new features and improve user experience",
      "Implemented scalable features using Laravel and Angular frameworks",
      "Integrated third-party APIs for payment processing and data analytics",
    ],
    technologies: ["Laravel", "Angular", "Codeigniter", "WordPress", "MySQL"],
  },
  {
    title: "Senior PHP Developer",
    company: "PandaEpos.com",
    location: "United Kingdom",
    startDate: "Feb 2020",
    endDate: "Jul 2021",
    keyAchievements: [
      "Built hospitality management web applications for restaurants and hotels",
      "Optimized database queries and application performance, improving response times by 25%",
      "Delivered new features and enhancements based on client requirements",
      "Implemented best practices for code organization and maintainability",
      "Collaborated with cross-functional teams to ensure timely project delivery",
    ],
    technologies: ["PHP", "Laravel", "Angular", "MySQL"],
  },
  {
    title: "AK. Web Developer",
    company: "iraximecn.com",
    location: "United States",
    startDate: "Jan 2018",
    endDate: "Feb 2020",
    keyAchievements: [
      "Developed full-stack web applications using Laravel and Angular",
      "Managed code versioning and deployment processes using Git",
      "Conducted code reviews and maintained high code quality standards",
      "Mentored junior developers and provided technical guidance",
    ],
    technologies: ["Laravel", "Codeigniter", "WordPress", "Angular", "Git"],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen py-24 px-8 lg:px-16 bg-background"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-16">
          Professional Experience
        </h2>
        <ol className="space-y-8" aria-label="Work experience timeline">
          {experiences.map((experience, index) => (
            <li
              key={`${experience.company}-${experience.startDate}`}
              className="bg-card rounded-lg p-6 lg:p-8 border border-border hover:border-accent transition-all duration-300 hover:scale-[1.02] hover:shadow-lg animate-fade-in-up focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <article>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-foreground">
                        {experience.title}
                      </h3>
                      {experience.isCurrent && (
                        <span
                          className="px-3 py-1 text-xs font-semibold bg-green-500/20 text-green-400 rounded-full border border-green-500/30"
                          aria-label="Current position"
                        >
                          Current
                        </span>
                      )}
                    </div>
                    <dl className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                      <div className="flex items-center gap-2">
                        <IconBriefcase
                          className="w-4 h-4 text-accent"
                          aria-hidden="true"
                        />
                        <dt className="sr-only">Company</dt>
                        <dd>{experience.company}</dd>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconMapPin
                          className="w-4 h-4 text-accent"
                          aria-hidden="true"
                        />
                        <dt className="sr-only">Location</dt>
                        <dd>{experience.location}</dd>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconCalendar
                          className="w-4 h-4 text-accent"
                          aria-hidden="true"
                        />
                        <dt className="sr-only">Duration</dt>
                        <dd>
                          {experience.startDate} - {experience.endDate}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  {experience.performanceHighlights && (
                    <div className="flex flex-col gap-2 mt-4 lg:mt-0 lg:ml-4">
                      {experience.performanceHighlights.map((highlight) => (
                        <div
                          key={highlight.metric}
                          className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-md"
                        >
                          <IconTrendingUp
                            className="w-4 h-4 text-green-400"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-green-400">
                            {highlight.metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {experience.projects && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                      Key Projects
                    </h4>
                    <ul className="space-y-4">
                      {experience.projects.map((project) => (
                        <li
                          key={project.name}
                          className="pl-4 border-l-2 border-accent/30"
                        >
                          <h5 className="text-lg font-semibold text-foreground mb-1">
                            {project.name}
                          </h5>
                          <p className="text-muted-foreground text-sm">
                            {project.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {(experience.technicalAchievements ||
                  experience.keyAchievements) && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                      {experience.technicalAchievements
                        ? "Technical Achievements"
                        : "Key Achievements"}
                    </h4>
                    <ul className="space-y-2">
                      {(experience.technicalAchievements ||
                        experience.keyAchievements)?.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="text-accent mt-1.5" aria-hidden="true">
                            •
                          </span>
                          <span className="text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <ul className="flex flex-wrap gap-2" role="list">
                    {experience.technologies.map((tech) => (
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
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
