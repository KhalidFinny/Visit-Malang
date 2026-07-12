import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Experience from "./components/Experience";
import SmoothScroll from "./components/utils/SmoothScroll";
import ScrollToTop from "./components/utils/ScrollToTop";
import "./App.css";

// ── Lazy-loaded detail pages ─────────────────────────────────────
// These are only loaded when navigating to their respective routes.
const HistoryList = lazy(() => import("./components/sections/history/HistoryList"));
const HistoryDetail = lazy(() => import("./components/sections/history/HistoryDetail"));
const ActivityList = lazy(() => import("./components/sections/activity/ActivityList"));
const ActivityDetail = lazy(() => import("./components/sections/activity/ActivityDetail"));
const PlaceDetail = lazy(() => import("./components/sections/activity/PlaceDetail"));
const TechDetail = lazy(() => import("./components/sections/modern/TechDetail"));
const CultureList = lazy(() => import("./components/sections/culture/CultureList"));
const CultureDetail = lazy(() => import("./components/sections/culture/CultureDetail"));

function PageFallback() {
  return (
    <div className="w-full h-screen bg-[#f5f4f0] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#1a1a1a]/10 border-t-[#1a1a1a]/40 rounded-full animate-spin" />
    </div>
  );
}

function App() {
  const { pathname } = useLocation();
  const isPlaceDetailRoute = pathname.startsWith("/place/");

  const routedContent = (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Experience />} />
          <Route path="/history" element={<HistoryList />} />
          <Route path="/history/:slug" element={<HistoryDetail />} />
          <Route path="/activity" element={<ActivityList />} />
          <Route path="/activity/:name" element={<ActivityDetail />} />
          <Route path="/place/:slug" element={<PlaceDetail />} />
          <Route path="/culture" element={<CultureList />} />
          <Route path="/culture/:slug" element={<CultureDetail />} />
          <Route path="/modern-malang" element={<TechDetail />} />
        </Routes>
      </Suspense>
    </>
  );

  return (
    <main>
      {isPlaceDetailRoute ? routedContent : <SmoothScroll>{routedContent}</SmoothScroll>}
    </main>
  );
}

export default App;
