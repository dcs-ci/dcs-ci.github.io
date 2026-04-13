import { ConferenceLayout } from "@/components/layout/ConferenceLayout";
import { Button } from "@/components/ui/button";
import { MapPin, Plane, Building, CreditCard, ExternalLink, Info } from "lucide-react";

const VenuePage = () => {
  return (
    <ConferenceLayout>
      {/* Page header */}
      <div className="border-b bg-card">
        <div className="section-container">
          <h1 className="text-foreground">Venue & Travel</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Information about the conference venue, travel arrangements, accommodation, and visa requirements.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="section-container prose-academic">
        {/* Venue section */}
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-3">
            <MapPin className="h-6 w-6 text-accent" />
            Conference Venue
          </h2>

          <div className="conference-card mb-6">
            <h3 className="mb-2 text-2xl font-semibold text-foreground">The Water Tower</h3>
            <p className="mb-4 text-lg text-accent">2500 Clean Water Ct, Buford, GA 30519, United States</p>
            <p className="text-muted-foreground">
              DCS-CI 26 will be held at The Water Tower in Buford, Georgia. This unique venue provides
              an inspiring setting for discussions on critical infrastructure protection, symbolically
              connecting to the conference's origins in water infrastructure security.
            </p>
          </div>

          {/* Map placeholder */}
          <div className="overflow-hidden rounded-lg border bg-muted/50">
            <div className="aspect-video w-full">
              <iframe
                src="https://maps.google.com/maps?q=2500+Clean+Water+Ct,+Buford,+GA+30519&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Location Map"
              />
            </div>
          </div>
        </section>

        {/* Travel section */}
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-3">
            <Plane className="h-6 w-6 text-accent" />
            Travel Information
          </h2>

          <div className="conference-card">
            <h3 className="mb-4 text-lg font-semibold">Getting to Buford</h3>
            <p className="mb-4 text-muted-foreground">
              The nearest major airport is <strong>Hartsfield-Jackson Atlanta International Airport (ATL)</strong>,
              one of the world's busiest airports with extensive domestic and international connections.
            </p>

            <div className="space-y-4">
              <div className="rounded-md bg-muted/50 p-4">
                <h4 className="mb-2 font-semibold">From Atlanta Airport</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Distance: Approximately 45 miles (72 km) northeast</li>
                  <li>• Driving time: Approximately 50–70 minutes depending on traffic</li>
                  <li>• Transportation options: Rental car, rideshare services, or shuttle services</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-lg border bg-muted/30 p-4">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Detailed travel instructions, including recommended transportation options and directions,
                  will be provided closer to the conference dates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accommodation section */}
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-3">
            <Building className="h-6 w-6 text-accent" />
            Accommodation
          </h2>

          <div className="conference-card">
            <p className="mb-4 text-muted-foreground">
              A list of recommended hotels in the Buford area will be published closer to the conference.
              We are working to secure conference rates at select properties for attendees.
            </p>

            <div className="rounded-md bg-muted/50 p-4">
              <h4 className="mb-2 font-semibold">Accommodation Options</h4>
              <p className="text-sm text-muted-foreground">
                The Buford area, located near Lake Lanier and the Mall of Georgia, offers a variety of
                accommodation options ranging from budget-friendly hotels to full-service properties.
                Attendees may also consider staying in nearby Duluth or Suwanee.
              </p>
            </div>

            <div className="mt-6 rounded-lg border bg-muted/30 p-4">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Hotel recommendations with negotiated conference rates will be announced in early 2026.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visa section */}
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-3">
            <CreditCard className="h-6 w-6 text-accent" />
            Visa Information
          </h2>

          <div className="conference-card">
            <p className="mb-4 text-muted-foreground">
              International attendees may require a visa to enter the United States. We recommend checking
              visa requirements well in advance and applying early.
            </p>

            <div className="space-y-4">
              <div className="rounded-md bg-muted/50 p-4">
                <h4 className="mb-2 font-semibold">Visa Requirements</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Visa requirements vary by country of citizenship. Most visitors will need either:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>ESTA</strong> – for Visa Waiver Program countries</li>
                  <li>• <strong>B-1/B-2 Visitor Visa</strong> – for countries not in the VWP</li>
                </ul>
              </div>

              <Button variant="outline" asChild>
                <a href="https://travel.state.gov/content/travel/en/us-visas.html" target="_blank" rel="noopener noreferrer">
                  U.S. Visa Information
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="mt-6 rounded-lg border bg-muted/30 p-4">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  <strong>Invitation Letters:</strong> Upon request, the conference can provide official
                  invitation letters to support visa applications for registered attendees with accepted papers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for questions */}
        <div className="mt-12 rounded-lg border-l-4 border-l-accent bg-accent/5 p-6">
          <h3 className="mb-2">Questions About Travel or Venue?</h3>
          <p className="mb-4 text-muted-foreground">
            If you have questions about the venue, travel arrangements, or visa requirements,
            please contact the organizing committee.
          </p>
          <Button variant="cta" asChild>
            <a href="/contact">
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </ConferenceLayout>
  );
};

export default VenuePage;
