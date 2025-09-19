import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ExperienceCenter from "./pages/ExperienceCenter";
import ProductCatalogue from "./pages/ProductCatalogue";
import NotFound from "./pages/NotFound";
import ChatAssistant from "@/components/ChatAssistant";
import { FrostCursor } from "@/components/FrostCursor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/experience-center" element={<ExperienceCenter />} />
          <Route path="/product-catalogue" element={<ProductCatalogue />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ChatAssistant />
      <FrostCursor />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
