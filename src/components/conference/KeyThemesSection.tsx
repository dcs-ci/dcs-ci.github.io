import { Shield, Cpu, Factory, Zap, Network, CheckCircle } from "lucide-react";

const themes = [
  {
    icon: Shield,
    title: "Secure-by-Design",
    description: "Architectures that embed security from conception through deployment",
  },
  {
    icon: Cpu,
    title: "Cyber-Physical Systems",
    description: "Integrated approaches to digital and physical security domains",
  },
  {
    icon: Factory,
    title: "Operational Technology",
    description: "Security for industrial control systems and automation networks",
  },
  {
    icon: Zap,
    title: "Critical Infrastructure",
    description: "Protecting water, energy, transport, and essential services",
  },
  {
    icon: Network,
    title: "Resilience Engineering",
    description: "System-level approaches to withstand and recover from attacks",
  },
  {
    icon: CheckCircle,
    title: "Testing & Assurance",
    description: "Validation methodologies for security controls and defenses",
  },
];

export function KeyThemesSection() {
  return (
    <section className="section-alt section-spacing">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-foreground">Key Conference Themes</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Exploring the critical intersection of cybersecurity, engineering, and infrastructure protection
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme, index) => (
            <div
              key={theme.title}
              className="conference-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <theme.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{theme.title}</h3>
              <p className="text-sm text-muted-foreground">{theme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
