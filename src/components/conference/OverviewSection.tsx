import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export function OverviewSection() {
  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <BookOpen className="h-4 w-4" />
            Conference Overview
          </span>

          <h2 className="mb-6 text-foreground">
            Advancing Secure-by-Design Principles for Critical Infrastructure
          </h2>

          <div className="prose-academic text-left">
            <p className="text-lg text-muted-foreground">
              Critical infrastructures underpin the functioning of modern societies. They enable the
              continuous provision of essential services, support economic activity, safeguard public
              safety, and contribute to national and societal resilience.
            </p>

            <p className="text-lg text-muted-foreground">
              DCS-CI is a <span className="font-bold">Joint Academic-Industrial Forum</span> bringing together researchers, practitioners, regulators, and industry leaders
              to explore system-level, secure-by-design approaches that address the unique challenges
              of protecting water systems, energy grids, transportation networks, and other critical
              infrastructure sectors.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg" asChild>
              <Link to="/about">
                Learn More About the Conference
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
