import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, FileText, Send, CalendarClock } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero-section relative">
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:py-32">
        <div className="flex flex-col-reverse gap-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Text Content */}
          <div className="w-full text-center lg:text-left">
            {/* Conference badge */}
            <div className="mb-6 animate-fade-in flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-infrastructure-foreground/20 bg-infrastructure-foreground/10 px-4 py-1.5 text-sm font-medium text-infrastructure-foreground">
                <Calendar className="h-4 w-4" />
                DCS-CI 2026
              </span>
            </div>

            {/* Main title */}
            <h1 className="mb-4 text-infrastructure-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Design of Cyber-Secure
              <br />
              Critical Infrastructure
            </h1>

            {/* Subtitle */}
            <p className="mb-8 text-lg text-infrastructure-foreground/80 md:text-xl animate-fade-in mx-auto lg:mx-0" style={{ animationDelay: "0.2s" }}>
              An International Conference on Secure-by-Design for Critical Infrastructure
            </p>

            {/* Event details */}
            <div className="mb-10 flex flex-wrap justify-center lg:justify-start gap-6 text-infrastructure-foreground/90 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-infrastructure-foreground/70" />
                <span className="font-medium">2–3 September 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-infrastructure-foreground/70" />
                <span className="font-medium">The Water Tower, Buford, Georgia, USA</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/call-for-submissions">
                  <FileText className="h-5 w-5" />
                  Call for Submissions
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="https://easychair.org/conferences/?conf=dcsci2026" target="_blank" rel="noopener noreferrer">
                  <Send className="h-5 w-5" />
                  Submit via EasyChair
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/dates">
                  <CalendarClock className="h-5 w-5" />
                  Important Dates
                </Link>
              </Button>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <img
              src="/dcs-ci_logo.png"
              alt="DCS-CI Logo"
              className="w-full max-w-md drop-shadow-2xl object-contain lg:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
