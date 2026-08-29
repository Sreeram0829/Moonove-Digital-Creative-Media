import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AtmosphericBackground from "./components/sections/AtmosphericBackground";
import LoadingScreen from "./components/ui/LoadingScreen";

import Home from "./pages/Home";
import OurBrands from "./pages/OurBrands";
import MoonlitVisual from "./pages/MoonlitVisual";
import CKDramaWorld from "./pages/CKDramaWorld";
import LearnoveAcademy from "./pages/LearnoveAcademy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";

function Shell() {
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  const path = location.pathname;

  /*
   * Background theme is determined only by the current route.
   *
   * Moonove:
   * deep navy / violet / purple / blue / subtle pink / warm gold
   *
   * Moonlit Visual:
   * cosmic navy / violet / blue
   *
   * C.K. Drama World:
   * deep purple / violet / restrained pink
   *
   * Learnove Academy:
   * deep navy / cyan / blue / turquoise
   */
  const theme = path.includes("moonlit")
    ? "moonlit"
    : path.includes("ck-drama")
      ? "ck"
      : path.includes("learnove")
        ? "learnove"
        : "moonove";

  // Initial loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 420);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [path]);

  return (
    <>
      {loading && <LoadingScreen />}

      {/* Global ambient background.
          Existing page layout and content remain untouched. */}
      <AtmosphericBackground theme={theme} />

      <Navbar />

      <main>
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />

          <Route
            path="/our-brands"
            element={<OurBrands />}
          />

          {/* Brand pages */}
          <Route
            path="/brands/moonlit-visual"
            element={<MoonlitVisual />}
          />

          <Route
            path="/brands/ck-drama-world"
            element={<CKDramaWorld />}
          />

          <Route
            path="/brands/learnove-academy"
            element={<LearnoveAcademy />}
          />

          {/* Information */}
          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* Legal pages */}
          <Route
            path="/privacy"
            element={<LegalPage type="privacy" />}
          />

          <Route
            path="/terms"
            element={<LegalPage type="terms" />}
          />

          <Route
            path="/copyright"
            element={<LegalPage type="copyright" />}
          />

          <Route
            path="/content-disclaimer"
            element={<LegalPage type="disclaimer" />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return <Shell />;
}