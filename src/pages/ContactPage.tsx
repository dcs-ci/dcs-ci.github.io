import { ConferenceLayout } from "@/components/layout/ConferenceLayout";
import { Mail, AlertCircle, Shield } from "lucide-react";

const ContactPage = () => {
  return (
    <ConferenceLayout>
      {/* Page header */}
      <div className="border-b bg-card">
        <div className="section-container">
          <h1 className="text-foreground">Contact</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Get in touch with the DCS-CI 26 organizing committee for inquiries about the conference.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="section-container">
        {/* Contact info */}
        <section className="mb-12">
          <div className="conference-card max-w-2xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                <Mail className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">General Inquiries</h2>
                <p className="text-muted-foreground">For all conference-related questions</p>
              </div>
            </div>

            <div className="rounded-md bg-muted/50 p-4">
              <p className="text-sm text-muted-foreground mb-2">Email:</p>
              <a
                href="mailto:itrust@sutd.edu.sg"
                className="text-lg font-medium text-accent hover:underline"
              >
                itrust@sutd.edu.sg
              </a>
              <p className="mt-4 text-sm text-muted-foreground">

              </p>
            </div>

            <div className="mt-6">
              <h3 className="mb-3 font-semibold text-foreground">Common Inquiry Topics</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Paper submission questions</li>
                <li>• Registration and attendance</li>
                <li>• Visa invitation letters</li>
                <li>• Sponsorship opportunities</li>
                <li>• Program and schedule inquiries</li>
                <li>• General conference information</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hosting disclaimer */}
        {/* <section className="mb-12">
          <div className="rounded-lg border-l-4 border-l-primary bg-primary/5 p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="mb-2 font-semibold text-foreground">Hosting Disclaimer</h3>
                <p className="text-muted-foreground">
                  This website is hosted independently and is <strong>not hosted on SUTD infrastructure</strong>.
                  While the DCS-CI conference series has historical connections to the iTrust research centre
                  at the Singapore University of Technology and Design, this particular website and its
                  hosting are managed independently.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Copyright */}
        <section>
          <div className="rounded-lg border bg-muted/50 p-6">
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 flex-shrink-0 text-muted-foreground" />
              <div>
                <h3 className="mb-2 font-semibold text-foreground">Copyright Notice</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  © 2026 Design of Cyber-Secure Critical Infrastructure (DCS-CI) 26 Conference.
                  All rights reserved.
                </p>
                <p className="text-sm text-muted-foreground">
                  The content of this website is provided for informational purposes. Conference organizers
                  reserve the right to update information as planning progresses. For the most current
                  information, please check back regularly or contact the organizing committee.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ConferenceLayout>
  );
};

export default ContactPage;
