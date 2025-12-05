import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import PrePrimaryPage from "./pages/PrePrimaryPage";
import PrimaryPage from "./pages/PrimaryPage";
import MiddleSchoolPage from "./pages/MiddleSchoolPage";
import SecondaryPage from "./pages/SecondaryPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs/pre-primary" element={<PrePrimaryPage />} />
          <Route path="/programs/primary" element={<PrimaryPage />} />
          <Route path="/programs/middle-school" element={<MiddleSchoolPage />} />
          <Route path="/programs/secondary" element={<SecondaryPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
