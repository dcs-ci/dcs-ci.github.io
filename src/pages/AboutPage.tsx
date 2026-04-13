import { ConferenceLayout } from "@/components/layout/ConferenceLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, History, Target, Globe } from "lucide-react";

const AboutPage = () => {
  return (
    <ConferenceLayout>
      {/* Page header */}
      <div className="border-b bg-card">
        <div className="section-container">
          <h1 className="text-foreground">About the Conference</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Understanding the vision, scope, and evolution of the Design of Cyber-Secure Critical Infrastructure conference series.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="section-container prose-academic">
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-3">
            <Target className="h-6 w-6 text-accent" />
            Why This Conference Exists
          </h2>

          <p>
            Critical infrastructures underpin the functioning of modern societies. They enable the continuous provision of essential services, support economic activity, safeguard public safety, and contribute to national and societal resilience. Water treatment plants, electrical grids, transportation systems, and healthcare networks are increasingly reliant on interconnected digital systems—systems that must be protected not merely as an afterthought, but as a fundamental design principle.
          </p>

          <p>
            As the flagship venue, DCS-CI aims at convening leading researchers, engineers, policymakers, and practitioners who share a commitment to embedding security into the very architecture of the systems upon which societies depend.
          </p>

          <p>
            In an era of escalating cyber threats—ranging from nation-state actors to criminal enterprises—traditional perimeter-based defenses are insufficient. DCS-CI 26 promotes a paradigm shift toward <strong>secure-by-design</strong> and <strong>secure-by-default</strong> methodologies: approaches that consider security as intrinsic to system engineering, not as a supplementary layer applied after deployment.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-3">
            <History className="h-6 w-6 text-accent" />
            Building on DCS-Water 24 and DCS-Water 25
          </h2>

          <p>
            The DCS-CI series has its origins in the DCS-Water conferences, which focused specifically on the cybersecurity challenges facing water and wastewater utilities. DCS-Water 24 and DCS-Water 25, held under the auspices of the iTrust research centre at the Singapore University of Technology and Design, brought together world-leading experts to address operational technology (OT) vulnerabilities, cyber-physical attack scenarios, and resilience strategies for water critical infrastructure.
          </p>

          <p>
            These conferences demonstrated the value of cross-disciplinary dialogue—bringing together control systems engineers, cybersecurity researchers, utility operators, and regulatory bodies. The insights generated and collaborations formed have influenced both academic research and industry practice.
          </p>

          <p>
            DCS-CI 26 expands upon this foundation. While water infrastructure remains a vital concern, the conference now embraces the full spectrum of critical infrastructure sectors: energy, transportation, healthcare, telecommunications, and beyond. This broader scope reflects the recognition that many of the challenges—and many of the solutions—transcend sectoral boundaries. Secure-by-design principles, threat modeling frameworks, and resilience engineering methodologies are applicable across all domains where cyber and physical systems intersect.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-3">
            <Globe className="h-6 w-6 text-accent" />
            Why System-Level, Secure-by-Design Thinking is Critical
          </h2>

          <p>
            Modern critical infrastructure systems are complex socio-technical assemblages. They comprise legacy industrial control systems, contemporary IT networks, cloud-based analytics platforms, and human operators—all interacting in intricate and often unpredictable ways. Securing such systems requires a holistic, system-level perspective.
          </p>

          <p>
            Secure-by-design thinking acknowledges that security cannot be effectively retrofitted. It must be embedded from the earliest stages of system conception, through design, implementation, deployment, and ongoing operations. This approach requires:
          </p>

          <ul>
            <li>
              <strong>Threat modeling</strong> that anticipates adversary capabilities and motivations
            </li>
            <li>
              <strong>Architectural patterns</strong> that minimise attack surfaces and contain breaches
            </li>
            <li>
              <strong>Defense-in-depth strategies</strong> that layer multiple controls
            </li>
            <li>
              <strong>Resilience engineering</strong> that enables graceful degradation and rapid recovery
            </li>
            <li>
              <strong>Continuous validation</strong> through testing, red-teaming, and assurance processes
            </li>
          </ul>

          <p>
            DCS-CI 26 provides a forum for the presentation of original research, case studies, and position papers that advance these objectives. It welcomes contributions from academia and industry alike, recognizing that the most impactful insights often emerge at the intersection of theoretical innovation and practical experience.
          </p>
        </section>

        {/* Call to action */}
        <div className="mt-12 rounded-lg border-l-4 border-l-accent bg-accent/5 p-6">
          <h3 className="mb-2">Join Us in Advancing Critical Infrastructure Security</h3>
          <p className="mb-4 text-muted-foreground">
            We invite researchers, practitioners, and policymakers to contribute to this important conversation.
            Review our topics of interest and consider submitting your work.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="cta" asChild>
              <Link to="/topics">
                View Topics of Interest
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
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

export default AboutPage;
