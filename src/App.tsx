import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SectionLoading from "./components/SectionLoading";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Inspections = lazy(() => import("./pages/Inspections"));
const Servicos = lazy(() => import("./pages/Servicos"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Sobre = lazy(() => import("./pages/Sobre"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Videos = lazy(() => import("./pages/Videos"));
const Auth = lazy(() => import("./pages/Auth"));
const AdminVideos = lazy(() => import("./pages/AdminVideos"));

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <BrowserRouter>
        <Suspense fallback={<SectionLoading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/inspecoes" element={<Inspections />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/servicos/:slug" element={<ServiceDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin/videos" element={<AdminVideos />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toaster />
  </ThemeProvider>
);

export default App;
