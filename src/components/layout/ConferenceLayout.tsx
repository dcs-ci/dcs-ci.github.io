import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Home,
  Info,
  FileText,
  List,
  Calendar,
  MapPin,
  Users,
  Mail,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";

interface ConferenceLayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Call for Submissions", href: "/call-for-submissions", icon: FileText },
  { name: "Topics of Interest", href: "/topics", icon: List },
  { name: "Important Dates", href: "/dates", icon: Calendar },

  { name: "Venue & Travel", href: "/venue", icon: MapPin },
  { name: "Organization", href: "/organization", icon: Users },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function ConferenceLayout({ children }: ConferenceLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile header */}
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-card px-4 lg:hidden">
        <Link to="/" className="flex items-center justify-center">
          <img src="/dcs-logo.png" alt="DCS-CI Logo" className="h-12 w-auto object-contain" />
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle navigation"
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </header>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 transform bg-sidebar transition-transform duration-300 ease-in-out lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Sidebar header */}
        <div className="flex w-full items-center justify-center border-b border-sidebar-border px-6 py-6">
          <Link
            to="/"
            className="flex h-20 w-full items-center justify-center rounded-md bg-white p-2 shadow-sm transition-opacity hover:opacity-80"
            onClick={() => setSidebarOpen(false)}
          >
            <img src="/dcs-logo.png" alt="DCS-CI Logo" className="h-full w-auto object-contain" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "nav-link",
                  isActive && "active"
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Sidebar footer with CTA */}
        <div className="border-t border-sidebar-border p-4">
          <a
            href="https://easychair.org/my2/conference?conf=dcsci2026"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-sidebar-primary px-4 py-2.5 text-sm font-medium text-sidebar-primary-foreground transition-colors hover:bg-sidebar-primary/90"
          >
            Submit Paper
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Sidebar logos */}
        <div className="border-t border-sidebar-border px-6 py-6">
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://www.theh2otower.org/"
              target="_blank"
              rel="noopener noreferrer"
              title="TWT Website"
              className="flex h-20 w-full items-center justify-center rounded-md bg-white p-2 shadow-sm transition-opacity hover:opacity-80"
            >
              <img src="/TWT_logo.jpg" alt="TWT Logo" className="h-full w-auto object-contain" />
            </a>
            <a
              href="https://itrust.sutd.edu.sg/"
              target="_blank"
              rel="noopener noreferrer"
              title="iTrust Website"
              className="flex h-20 w-full items-center justify-center rounded-md bg-white p-2 shadow-sm transition-opacity hover:opacity-80"
            >
              <img src="/itrust_logo.png" alt="iTrust Logo" className="h-full w-auto object-contain" />
            </a>
            <div
              className="flex h-20 w-full items-center justify-center rounded-md bg-white p-2 shadow-sm"
              title="Springer"
            >
              <img src="/springer_logo.png" alt="Springer Logo" className="h-full w-auto object-contain" />
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="lg:pl-72">
        <div className="min-h-screen">{children}</div>

        {/* Footer */}
        <footer className="border-t bg-card">
          <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-center gap-6">
                <img src="/dcs-logo.png" alt="DCS-CI Logo" className="h-14 w-auto object-contain" />
              </div>
              <div className="text-center md:text-right">
                <p className="text-xs text-muted-foreground">
                  © 2026 DCS-CI 26 Conference. All rights reserved.
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  2–3 September 2026 · Buford, Georgia, USA
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
