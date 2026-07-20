import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Experience from "./components/Experience";

import SmoothScroll from "./components/utils/SmoothScroll";
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
const TechModern = lazy(() => import("./components/sections/tech/TechModern"));
const NewsList = lazy(() => import("./components/sections/news/NewsList"));
const NewsDetail = lazy(() => import("./components/sections/news/NewsDetail"));

function PageFallback() {
  return (
    <div className="w-full h-screen bg-[#f5f4f0] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#1a1a1a]/10 border-t-[#1a1a1a]/40 rounded-full animate-spin" />
    </div>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, zIndex: 0 }}
      animate={{ opacity: 1, zIndex: 0 }}
      exit={{ opacity: 0, zIndex: 1 }}
      transition={{ duration: 0.32, ease: "easeInOut" }}
      className="w-full relative bg-[#f5f4f0]"
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  const routedContent = (
    <Suspense fallback={<PageFallback />}>
      <AnimatePresence initial={false} mode="popLayout">
        <Routes location={location} key={location.pathname}>
          {/* HOME */}
          <Route path="/" element={<PageTransition><Experience /></PageTransition>} />
          <Route path="/history" element={<PageTransition><HistoryList /></PageTransition>} />
          <Route path="/history/:slug" element={<PageTransition><HistoryDetail /></PageTransition>} />
          <Route path="/activity" element={<PageTransition><ActivityList /></PageTransition>} />
          <Route path="/activity/:name" element={<PageTransition><ActivityDetail /></PageTransition>} />
          <Route path="/place/:slug" element={<PageTransition><PlaceDetail /></PageTransition>} />
          <Route path="/culture" element={<PageTransition><CultureList /></PageTransition>} />
          <Route path="/culture/:slug" element={<PageTransition><CultureDetail /></PageTransition>} />
          <Route path="/modern-malang" element={<PageTransition><TechDetail /></PageTransition>} />
          <Route path="/tech" element={<PageTransition><TechModern /></PageTransition>} />
          <Route path="/news" element={<PageTransition><NewsList /></PageTransition>} />
          <Route path="/news/:id" element={<PageTransition><NewsDetail /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );

  return (
    <main>
      <SmoothScroll>{routedContent}</SmoothScroll>
    </main>
  );
}

export default App;
