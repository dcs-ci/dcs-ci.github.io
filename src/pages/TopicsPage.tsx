import { ConferenceLayout } from "@/components/layout/ConferenceLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, AlertTriangle, Cog, RefreshCcw, Cpu, FlaskConical, Info, Brain, Layers } from "lucide-react";

const topics = [
  {
    icon: Shield,
    title: "Secure-by-Design and Secure-by-Default Architectures",
    description: "Research addressing the integration of security principles into the foundational architecture of critical infrastructure systems.",
    subtopics: [
      "Architectural patterns that embed security from system conception",
      "Secure-by-default configurations for operational technology environments",
      "Zero-trust architectures for industrial control systems",
      "Security reference architectures for specific infrastructure sectors",
      "Design methodologies that minimize attack surfaces while maintaining operational functionality",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Cyber-Physical Risk, Safety, and Resilience",
    description: "Studies examining the intersection of cybersecurity, physical safety, and system resilience in infrastructure contexts.",
    subtopics: [
      "Risk assessment frameworks for cyber-physical systems",
      "Safety-security co-engineering methodologies",
      "Resilience quantification and measurement approaches",
      "Attack impact analysis and consequence modeling",
      "Recovery and restoration strategies following cyber incidents",
      "Business continuity in the context of cyberattacks",
    ],
  },
  {
    icon: Cog,
    title: "Operational Technology (OT) and Automation Security",
    description: "Contributions focused on securing industrial control systems, SCADA networks, and automation platforms.",
    subtopics: [
      "ICS/SCADA security monitoring and anomaly detection",
      "Secure remote access for industrial environments",
      "Legacy system protection and secure integration",
      "Protocol security for industrial communications (Modbus, DNP3, OPC UA, etc.)",
      "Security challenges in IT/OT convergence",
      "Human factors in OT security operations",
    ],
  },
  {
    icon: RefreshCcw,
    title: "System Lifecycle and Engineering Perspectives",
    description: "Work that addresses security across the full system lifecycle, from requirements through decommissioning.",
    subtopics: [
      "Security requirements engineering for critical infrastructure",
      "Secure development practices for embedded and control systems",
      "Security considerations in procurement and supply chain management",
      "Patch management and vulnerability remediation in operational contexts",
      "Security implications of system modernization and digital transformation",
      "Decommissioning and secure disposal of infrastructure components",
    ],
  },
  {
    icon: Cpu,
    title: "Digitalisation and Emerging Technologies",
    description: "Research on security implications of digital transformation and new technology adoption in infrastructure.",
    subtopics: [
      "AI/ML applications in infrastructure security and their vulnerabilities",
      "Cloud computing security for infrastructure operations",
      "IoT security in infrastructure monitoring and control",
      "5G and communications security for critical infrastructure",
      "Digital twins and simulation for security analysis",
      "Blockchain and distributed ledger applications in infrastructure",
    ],
  },
  {
    icon: FlaskConical,
    title: "Testing, Validation, and Assurance",
    description: "Methodologies and case studies related to verifying and validating security controls in infrastructure settings.",
    subtopics: [
      "Penetration testing methodologies for OT environments",
      "Red team and purple team exercises for infrastructure",
      "Security testbed design and implementation",
      "Formal verification and assurance approaches",
      "Compliance frameworks and security auditing",
      "Metrics and indicators for infrastructure security posture",
    ],
  },
  {
    icon: Brain,
    title: "AI for Cyber-Physical System Security",
    description: "Innovative use of AI for novel and effective approaches to attack and defence in cyber-physical systems.",
    subtopics: [
      "Machine learning for intrusion detection in industrial control systems",
      "AI-driven threat hunting and anomaly detection in OT networks",
      "Adversarial machine learning and AI system robustness",
      "Automated vulnerability discovery and exploit generation",
      "AI-assisted incident response and forensic analysis",
      "Generative AI for attack simulation and red teaming",
    ],
  },
  {
    icon: Layers,
    title: "Digital Twins and Cyber Twins *",
    description: "Virtual replicas and simulation environments for security analysis, testing, and operational resilience in critical infrastructure.",
    subtopics: [
      "Digital twin architectures for critical infrastructure security",
      "Cyber twin models for attack simulation and defence validation",
      "Real-time synchronisation and fidelity challenges in security contexts",
      "AI-assisted design and implementation of digital twins and cyber ranges",
      "Predictive security analytics using digital twin simulations",
      "Integration of digital twins with SIEM and SOC operations",
    ],
    note: "*We define Cyber Twins as “purpose-built digital twins for cyber use cases”",
  },
];

const TopicsPage = () => {
  return (
    <ConferenceLayout>
      {/* Page header */}
      <div className="border-b bg-card">
        <div className="section-container">
          <h1 className="text-foreground">Topics of Interest</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            DCS-CI 26 welcomes original contributions across a broad range of topics related to the design and assurance of cyber-secure critical infrastructure.
          </p>
        </div>
      </div>

      {/* Topics */}
      <div className="section-container">
        <div className="space-y-8">
          {topics.map((topic, index) => (
            <div
              key={topic.title}
              className="topic-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <topic.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">{topic.title}</h2>
                  <p className="mt-2 text-muted-foreground">{topic.description}</p>
                </div>
              </div>

              <div className="ml-16">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Example sub-topics
                </h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {topic.subtopics.map((subtopic) => (
                    <li key={subtopic} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <span>{subtopic}</span>
                    </li>
                  ))}
                </ul>
                {(topic as any).note && (
                  <p className="mt-4 text-sm italic text-muted-foreground">
                    {(topic as any).note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Out of scope note */}
        <div className="mt-12 rounded-lg border bg-muted/50 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted">
              <Info className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-foreground">Submissions Outside Listed Topics</h3>
              <p className="text-muted-foreground">
                The topics listed above are indicative rather than exhaustive. Submissions that address
                cyber-secure critical infrastructure from perspectives not explicitly listed may still be
                considered if they are relevant to the conference themes and meet academic quality standards.
                Authors are encouraged to contact the program chairs if uncertain about the suitability of
                their topic.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 rounded-lg border-l-4 border-l-accent bg-accent/5 p-6">
          <h3 className="mb-2">Ready to Submit Your Research?</h3>
          <p className="mb-4 text-muted-foreground">
            Review the submission guidelines and important dates before preparing your paper.
          </p>
          <div className="flex flex-wrap gap-4">

            <Button variant="outline" asChild>
              <Link to="/call-for-submissions">
                Call for Submissions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </ConferenceLayout>
  );
};

export default TopicsPage;
