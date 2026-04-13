import { ConferenceLayout } from "@/components/layout/ConferenceLayout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, ExternalLink, AlertCircle } from "lucide-react";

const dates = [
  {
    date: "13 February 2026",
    event: "Call for Submissions Opens",
    description: "The submission system opens for paper submissions via EasyChair.",
    status: "open",
  },
  {
    date: "27 April 2026",
    event: "Submission Deadline",
    description: "Final deadline for all paper submissions.",
    status: "Extended",
    important: true,
  },
  {
    date: "15 June 2026",
    event: "Acceptance Notification",
    description: "Authors will be notified of the paper acceptance decision.",
    status: "upcoming",
  },
  {
    date: "1 July 2026",
    event: "Camera-Ready Deadline",
    description: "Final camera-ready versions due for accepted papers.",
    status: "upcoming",
  },
  {
    date: "2–3 September 2026",
    event: "Conference Dates",
    description: "DCS-CI 26 conference at The Water Tower, Buford, Georgia, USA.",
    status: "upcoming",
    important: true,
  },
];

const DatesPage = () => {
  return (
    <ConferenceLayout>
      {/* Page header */}
      <div className="border-b bg-card">
        <div className="section-container">
          <h1 className="text-foreground">Important Dates</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Key dates and deadlines for DCS-CI 26. All submission deadlines are at 23:59 AOE.
          </p>
        </div>
      </div>

      {/* Timezone notice */}
      <div className="border-b bg-accent/5">
        <div className="section-container py-4">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-accent" />
            <p className="text-sm font-medium text-foreground">
              All deadlines are at <strong>23:59 </strong> AOE (anywhyere on earth) on the stated date.
            </p>
          </div>
        </div>
      </div>

      {/* Dates timeline */}
      <div className="section-container">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-border md:block" />

          <div className="space-y-6">
            {dates.map((item, index) => (
              <div
                key={item.event}
                className={`relative animate-fade-in ${item.important ? "md:ml-0" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className="relative hidden md:block">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full border-2 bg-card ${item.important
                        ? "border-accent bg-accent/10"
                        : "border-border"
                        }`}
                    >
                      <Calendar className={`h-5 w-5 ${item.important ? "text-accent" : "text-muted-foreground"}`} />
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`flex-1 rounded-lg border p-6 transition-colors hover:border-accent/30 ${item.important ? "border-accent/20 bg-accent/5" : "bg-card"
                      }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="mb-2 flex items-center gap-3">
                          <div className="md:hidden">
                            <Calendar className={`h-5 w-5 ${item.important ? "text-accent" : "text-muted-foreground"}`} />
                          </div>
                          <span className={`text-sm font-semibold ${item.important ? "text-accent" : "text-muted-foreground"}`}>
                            {item.date}
                          </span>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-foreground">
                          {item.event}
                        </h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                      <span
                        className={`rounded-md px-3 py-1 text-xs font-medium capitalize ${item.status === "open"
                          ? "bg-success/10 text-success"
                          : item.status === "closed"
                            ? "bg-destructive/10 text-destructive"
                            : "bg-accent/10 text-accent"
                          }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deadline policy */}
        <div className="mt-12 rounded-lg border bg-muted/50 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-destructive/10">
              <AlertCircle className="h-5 w-5 text-destructive" />
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-foreground">Deadline Policy</h3>
              <p className="text-muted-foreground">
                Submission deadlines are strictly enforced. The EasyChair system will close at the
                stated deadline time, and late submissions will not be accepted. Authors are strongly
                encouraged to submit well before the deadline to avoid last-minute technical issues.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 rounded-lg border-l-4 border-l-accent bg-accent/5 p-6">
          <h3 className="mb-2">Start Your Submission</h3>
          <p className="mb-4 text-muted-foreground">
            Review the submission guidelines and topics of interest before preparing your paper.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="cta" asChild>
              <a href="https://easychair.org/conferences/?conf=dcsci2026" target="_blank" rel="noopener noreferrer">
                Submit via EasyChair
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/call-for-submissions">
                Submission Guidelines
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </ConferenceLayout>
  );
};

export default DatesPage;
