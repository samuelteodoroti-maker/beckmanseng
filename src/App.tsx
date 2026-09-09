import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SectionLoading from "./components/SectionLoading";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Inspections = lazy(() => import("./pages/Inspections"));
const Servicos = lazy(() => import("./pages/Servicos"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Sobre = lazy(() => import("./pages/Sobre"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<SectionLoading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/inspecoes" element={<Inspections />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/sobre" element={<Sobre />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
