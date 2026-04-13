import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import CallForSubmissionsPage from "./pages/CallForSubmissionsPage";
import TopicsPage from "./pages/TopicsPage";
import DatesPage from "./pages/DatesPage";

import VenuePage from "./pages/VenuePage";
import OrganizationPage from "./pages/OrganizationPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/call-for-submissions" element={<CallForSubmissionsPage />} />
          <Route path="/topics" element={<TopicsPage />} />
          <Route path="/dates" element={<DatesPage />} />

          <Route path="/venue" element={<VenuePage />} />
          <Route path="/organization" element={<OrganizationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
