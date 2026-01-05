
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TourDetails from "./pages/TourDetails";
import TourTents from "./pages/TourTents";
import TourAltai from "./pages/TourAltai";
import TourKamchatka from "./pages/TourKamchatka";
import TourKolyma from "./pages/TourKolyma";
import TourDagestan from "./pages/TourDagestan";
import AdminReviews from "./pages/AdminReviews";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tour/baikal-skating" element={<TourDetails />} />
          <Route path="/tour/baikal-tents" element={<TourTents />} />
          <Route path="/tour/altai-belukha" element={<TourAltai />} />
          <Route path="/tour/kamchatka" element={<TourKamchatka />} />
          <Route path="/tour/kolyma" element={<TourKolyma />} />
          <Route path="/tour/dagestan" element={<TourDagestan />} />
          <Route path="/admin/reviews" element={<AdminReviews />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;