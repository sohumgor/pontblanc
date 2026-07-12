import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./pages/ScrollToTop";
import Services from './pages/Services'; // adjust the path if necessary
import Blog from '@/pages/Blog';
import BlogArticles from '@/pages/BlogArticles';
import CaseStudies from '@/pages/CaseStudies';
import Industries from '@/pages/Industries';
import CalendlyScript from "./components/CalendlyScript";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CalendlyScript />
      <BrowserRouter>
        <ScrollToTop />  {/* Add here */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogArticles />} />
            <Route path="/casestudies" element={<CaseStudies />} />
            <Route path="/industries" element={<Industries />} />
            {/* Industries routes will be added next */}
            {/* Other routes will be added next */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;