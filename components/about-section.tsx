import {
  IconMapPin,
  IconBriefcase,
  IconSchool,
  IconAward,
} from "@tabler/icons-react";

interface PersonalInfo {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

interface Statistic {
  value: string;
  label: string;
}

const personalInfo: PersonalInfo[] = [
  {
    icon: IconMapPin,
    label: "Riyadh, Saudi Arabia",
  },
  {
    icon: IconBriefcase,
    label: "Project Manager",
  },
  {
    icon: IconSchool,
    label: "BS Software Eng.",
  },
  {
    icon: IconAward,
    label: "Google Certified",
  },
];

const statistics: Statistic[] = [
  {
    value: "7+",
    label: "YEARS EXPERIENCE",
  },
  {
    value: "50+",
    label: "PROJECTS DELIVERED",
  },
  {
    value: "5+",
    label: "TEAM SIZE LED",
  },
  {
    value: "40%",
    label: "PERFORMANCE BOOST",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-24 px-8 lg:px-16 bg-background"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">
              About Me
            </h2>
            <div className="space-y-6 text-foreground">
              <p className="text-lg leading-relaxed">
                Seasoned Full-Stack Developer and Certified Data Analyst
                specializing in building scalable e-commerce platforms and
                marketplace integrations. Expert in Laravel, Node.js, and modern
                frontend frameworks, with deep experience in API integrations
                for social media advertising, payment gateways, and
                multi-marketplace systems.
              </p>
              <p className="text-lg leading-relaxed">
                Currently leading development of Twsaa (AI-powered e-commerce
                SaaS) and M5azn (first Saudi dropshipping platform). Proven
                track record of implementing complex integrations including
                Amazon Seller Central, Trendyol, and major social media
                advertising platforms, while architecting high-performance
                microservices using Docker, Redis, and PostgreSQL.
              </p>
            </div>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {personalInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.label}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <Icon
                      className="w-5 h-5 text-accent flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-base">{info.label}</span>
                  </div>
                );
              })}
            </dl>
          </div>
          <div className="grid grid-cols-2 gap-4" role="list" aria-label="Statistics">
            {statistics.map((stat) => (
              <div
                key={stat.label}
                role="listitem"
                className="bg-card rounded-lg p-5 border border-border hover:border-accent transition-colors flex flex-col items-center justify-center text-center min-h-[120px]"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
