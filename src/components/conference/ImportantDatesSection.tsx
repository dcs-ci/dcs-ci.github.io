import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const dates = [
  {
    date: "13 February 2026",
    event: "Call for Submissions Opens",
    status: "open",
  },
  {
    date: "27 April 2026",
    event: "Submission Deadline",
    status: "Extended",
  },
  {
    date: "15 June 2026",
    event: "Acceptance Notification",
    status: "upcoming",
  },
  {
    date: "1 July 2026",
    event: "Camera-Ready Deadline",
    status: "upcoming",
  },
];

export function ImportantDatesSection() {
  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div>
            <h2 className="mb-4 text-foreground">Important Dates</h2>
            <p className="mb-8 text-muted-foreground">
              Mark your calendar for these key milestones. All deadlines are at 23:59 AOE.
            </p>

            <div className="space-y-4">
              {dates.map((item, index) => (
                <div
                  key={item.event}
                  className="flex items-start gap-4 rounded-lg border bg-card p-4 transition-colors hover:border-accent/30 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-accent/10">
                    <Calendar className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{item.event}</p>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
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
              ))}
            </div>

            <div className="mt-8">
              <Button variant="cta" asChild>
                <Link to="/dates">
                  View All Dates
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 p-8">
              <div className="h-full rounded-xl border border-accent/20 bg-card/50 backdrop-blur grid-pattern flex items-center justify-center">
                <div className="text-center">
                  <img
                    src="/dcs-logo.png"
                    alt="DCS Logo"
                    className="mx-auto h-auto max-w-[240px] drop-shadow-md transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
