import { ConferenceLayout } from "@/components/layout/ConferenceLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, BookOpen, ArrowRight, CheckCircle, Upload, Search, Users, AlertCircle, Info } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Prepare Your Manuscript",
    description: "Format your paper according to Springer CCIS guidelines. Ensure all fonts are embedded and the document is properly anonymized for double-blind review.",
    icon: FileText,
  },
  {
    number: "2",
    title: "Create EasyChair Account",
    description: "If you do not have an EasyChair account, create one at easychair.org. Use your professional email address for correspondence.",
    icon: Users,
  },
  {
    number: "3",
    title: "Submit Your Paper",
    description: "Navigate to the DCS-CI 26 submission page, fill in the required metadata (title, abstract, keywords), and upload your PDF.",
    icon: Upload,
  },
  {
    number: "4",
    title: "Await Review",
    description: "Your paper will undergo rigorous peer review by the international Technical Program Committee. You will be notified of the decision by the stated deadline.",
    icon: Search,
  },
];

const CallForSubmissionsPage = () => {
  return (
    <ConferenceLayout>
      {/* Page header */}
      <div className="border-b bg-card">
        <div className="section-container">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <FileText className="h-4 w-4" />
            Now Accepting Submissions
          </span>
          <h1 className="text-foreground">Call for Submissions</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            We invite original research contributions addressing the design, implementation, and assurance of cyber-secure critical infrastructure systems.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="section-container prose-academic">
        <section className="mb-12">
          <h2 className="mb-6">Invitation to Contribute</h2>

          <p>
            The Design of Cyber-Secure Critical Infrastructure (DCS-CI) 26 conference invites researchers, practitioners, and thought leaders to submit original work that advances our collective understanding of how to design, deploy, and maintain secure critical infrastructure systems.
          </p>

          <p>
            We welcome submissions from diverse disciplinary perspectives, including computer science, control systems engineering, security studies, public policy, and operations management. Interdisciplinary contributions that bridge theoretical innovation with practical application are particularly encouraged.
          </p>

          <p>
            The conference seeks work that is rigorous, relevant, and actionable—research that not only advances academic knowledge but also informs the practices of infrastructure operators, system integrators, and regulatory bodies.
          </p>

          <p>
            <strong>There will also be a Best Paper Award to recognize outstanding research contributions.</strong>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6">Submission Process</h2>

          <div className="space-y-6 mb-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex gap-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="conference-card">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <ExternalLink className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-semibold">EasyChair Submission System</h3>
                <p className="mb-4 text-muted-foreground">
                  All submissions must be made through the EasyChair conference management system.
                  Authors will need to create an EasyChair account if they do not already have one.
                </p>
                <Button variant="cta" asChild>
                  <a href="https://easychair.org/conferences/?conf=dcsci2026" target="_blank" rel="noopener noreferrer">
                    Submit via EasyChair
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6">Paper Types and Requirements</h2>

          <div className="conference-card mb-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Full Paper</h3>
                <p className="mb-2 text-muted-foreground">
                  {/* 20–30 pages in Springer CCIS format */}
                </p>
                <p className="text-sm text-muted-foreground">
                  Full research papers presenting substantial original contributions, including theoretical frameworks,
                  empirical studies, system designs, or comprehensive case studies. Papers should include thorough
                  literature review, clear methodology, and rigorous evaluation.
                </p>
              </div>
            </div>
          </div>

          <h3 className="mb-4 text-lg font-semibold">Formatting Requirements</h3>

          <div className="conference-card mb-6">
            <h3 className="mb-4 text-lg font-semibold">Springer CCIS Format</h3>
            <p className="mb-4 text-muted-foreground">
              All submissions must be formatted according to the Springer CCIS (Communications in Computer
              and Information Science) guidelines. LaTeX and Microsoft Word templates are available from the
              Springer website.
            </p>
            <Button variant="outline" asChild>
              <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" target="_blank" rel="noopener noreferrer">
                Download Templates
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-3 font-semibold text-foreground">Paper Length</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                  <span>20 pages for main body of the paper </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                  <span>Max 30 page in total, including appendices</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-3 font-semibold text-foreground">File Format</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                  <span>Submit as PDF only</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                  <span>All fonts must be embedded</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-3 font-semibold text-foreground">Abstract</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                  <span>Self-contained summary of contribution</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-3 font-semibold text-foreground">Keywords</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                  <span>3–5 keywords</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                  <span>Relevant to paper topics</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6">Ethical Considerations</h2>
          <div className="rounded-lg border bg-muted/30 p-6">
            <p className="mb-4 text-muted-foreground">
              Authors are expected to consider the ethical implications and potential societal impact of their work.
              Papers that raise ethical concerns, such as those involving human subjects, user data, or real-world
              vulnerability analysis, must include a dedicated "Ethical Considerations" section.
            </p>
            <p className="mb-4 text-muted-foreground">
              This section should discuss the balance of risks vs. benefits and the steps taken to minimize potential
              harm (e.g., responsible disclosure, data anonymization). Note that institutional (IRB/ERB) approval
              is neither strictly necessary nor always sufficient to demonstrate ethical conduct; we expect authors
              to reason about the ethics of their work beyond ensuring institutional compliance.
            </p>
            <p className="text-muted-foreground">
              For detailed guidance on community standards, we follow the <a href="https://www.usenix.org/conference/usenixsecurity26/ethics-policy" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">USENIX Security '26 Ethics Policy</a>.
              This section does not count toward the page limit and should be placed after the 12-page main content.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6">Paper Submission Information</h2>

          <div className="rounded-lg border bg-destructive/5 border-destructive/20 p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 flex-shrink-0 text-destructive" />
              <div>
                <h3 className="mb-2 font-semibold text-foreground">Anonymization Required</h3>
                <p className="text-muted-foreground">
                  All submissions should be properly anonymized. Papers should avoid revealing authors' identity in the text.
                  When referring to their previous work, authors are required to cite their papers in the third person,
                  without identifying themselves. In the unusual case in which a third-person reference is infeasible,
                  authors can blind the reference itself. Papers not properly anonymized may be rejected without review.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6">Policy on the Use of Generative AI and LLMs</h2>
          <div className="rounded-lg border bg-muted/30 p-6">
            <p className="mb-4 text-muted-foreground">
              DCS-CI 26 follows the <a href="https://www.acm.org/publications/policies/new-acm-policy-on-authorship" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">ACM Policy on Authorship</a> regarding the use of generative AI tools. Authors and reviewers must adhere to the standard guidelines regarding accuracy, integrity, and mandatory disclosure of AI usage.
            </p>
            <p className="text-muted-foreground">
              Generative AI tools cannot be listed as authors. All instances of AI usage for content generation must be disclosed in the paper. For minor editing, an acknowledgement is sufficient; for substantive content generation, a detailed "Generative AI Usage" paragraph is required.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6">Review Process</h2>

          <p>
            All submissions undergo rigorous peer review by the international Technical Program Committee (TPC).
            Each paper is reviewed by at least three experts in the relevant domain. The review criteria include:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Originality and novelty",
              "Technical soundness",
              "Relevance to conference themes",
              "Clarity of presentation",
              "Significance of contribution",
              "Quality of evaluation",
            ].map((criterion) => (
              <div key={criterion} className="flex items-center gap-3 rounded-md border bg-card p-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">{criterion}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-muted-foreground">
            The program chairs make final acceptance decisions based on reviewer recommendations, taking into
            account the overall program balance and quality threshold. Authors will receive detailed feedback
            from reviewers to support revision of accepted papers.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6">Publication Venue</h2>

          <div className="topic-card">
            <h3 className="mb-3 text-lg font-semibold">
              Communications in Computer and Information Science (CCIS)
            </h3>
            <p className="mb-4 text-muted-foreground">
              Accepted papers will be published in the Springer Nature CCIS series, a well-established
              publication venue for computer science research. CCIS volumes are indexed in major databases
              including DBLP, Google Scholar, and Scopus.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Publisher:</strong> Springer Nature
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6">Encouraging Interdisciplinary and Practice-Informed Submissions</h2>

          <p>
            DCS-CI 26 particularly welcomes submissions that:
          </p>

          <ul>
            <li>
              Bridge academic research with operational practice in critical infrastructure settings
            </li>
            <li>
              Present case studies from real-world deployments, including lessons learned from security incidents or exercises
            </li>
            <li>
              Integrate perspectives from multiple disciplines (e.g., computer science, engineering, policy, organizational behavior)
            </li>
            <li>
              Address emerging challenges such as AI/ML in infrastructure, supply chain security, or regulatory compliance
            </li>
            <li>
              Propose novel methodologies for security assessment, testing, or assurance
            </li>
          </ul>

          <p>
            The program committee recognizes that some of the most impactful contributions emerge from
            practitioners reflecting on operational experience. We encourage submissions from industry
            professionals, even if the work does not conform to traditional academic paper structures,
            provided it offers rigorous and generalizable insights.
          </p>
        </section>

        {/* Questions */}
        <div className="mt-12 rounded-lg border bg-muted/50 p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted">
              <Info className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-foreground">Questions About Submission?</h3>
              <p className="text-muted-foreground">
                If you have questions about the submission process, paper formatting, or topic suitability,
                please contact the program chairs via the contact page. We are happy to assist prospective authors.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 rounded-lg border-l-4 border-l-accent bg-accent/5 p-6">
          <h3 className="mb-2">Ready to Submit?</h3>
          <p className="mb-4 text-muted-foreground">
            Review our topics of interest and submission guidelines before preparing your paper.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="cta" asChild>
              <Link to="/topics">
                View Topics of Interest
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/dates">
                Important Dates
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </ConferenceLayout>
  );
};

export default CallForSubmissionsPage;
