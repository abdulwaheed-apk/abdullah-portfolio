import {
  IconCode,
  IconLayout,
  IconDatabase,
  IconChartBar,
  IconCloud,
  IconGitBranch,
  IconCertificate,
} from "@tabler/icons-react";

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBgColor: string;
  iconColor: string;
  technologies: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    icon: IconCode,
    iconBgColor: "bg-primary/20",
    iconColor: "text-primary",
    technologies: [
      "PHP",
      "Laravel",
      "Node.js",
      "Express.js",
      "Python",
      "CodeIgniter",
      "WordPress",
    ],
  },
  {
    title: "Frontend Development",
    icon: IconLayout,
    iconBgColor: "bg-accent/20",
    iconColor: "text-accent",
    technologies: [
      "Angular",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases",
    icon: IconDatabase,
    iconBgColor: "bg-primary/20",
    iconColor: "text-primary",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Oracle PL/SQL",
      "SQL Server",
    ],
  },
  {
    title: "Data Analysis",
    icon: IconChartBar,
    iconBgColor: "bg-accent/20",
    iconColor: "text-accent",
    technologies: [
      "Tableau",
      "Power BI",
      "Google Data Studio",
      "Google Analytics",
      "Excel Advanced",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: IconCloud,
    iconBgColor: "bg-primary/20",
    iconColor: "text-primary",
    technologies: [
      "Docker",
      "Docker Compose",
      "AWS",
      "Jenkins",
      "Elastic Search",
      "Linux",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: IconGitBranch,
    iconBgColor: "bg-accent/20",
    iconColor: "text-accent",
    technologies: ["Git", "JIRA", "Bitbucket", "GitHub", "ClickUp", "Slack"],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen py-24 px-8 lg:px-16 bg-background"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-16">
          Skills & Technologies
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          role="list"
          aria-label="Skill categories"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <article
                key={category.title}
                className="group bg-card rounded-lg p-6 border border-border hover:border-accent hover:bg-card/80 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-out animate-fade-in-up focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
                role="listitem"
              >
                <div className="flex flex-col gap-4 mb-6">
                  <div
                    className={`${category.iconBgColor} ${category.iconColor} p-3 rounded-lg w-fit transition-all duration-500 group-hover:scale-105`}
                    aria-hidden="true"
                  >
                    <Icon className="w-6 h-6 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground transition-colors duration-500">
                    {category.title}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2" role="list">
                  {category.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded-md transition-colors duration-300 hover:bg-secondary/80"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <article
          className="bg-primary/10 rounded-lg p-6 lg:p-8 border border-primary/30 animate-fade-in-up hover:scale-[1.01] hover:shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
          style={{
            animationDelay: `${skillCategories.length * 0.1}s`,
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="bg-primary/20 text-primary p-3 rounded-lg flex-shrink-0"
              aria-hidden="true"
            >
              <IconChartBar className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Google Data Analytics Professional Certificate
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Expertise in data cleaning, visualization, and analysis using
                SQL, Python, and Tableau. Skilled in making data-driven
                decisions and communicating findings through reports and
                dashboards.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
