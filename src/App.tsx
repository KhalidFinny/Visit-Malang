import { Routes, Route } from "react-router-dom";
import Experience from "./components/Experience";
import HistoryDetail from "./components/sections/history/HistoryDetail";
import ActivityDetail from "./components/sections/activity/ActivityDetail";
import ActivityList from "./components/sections/activity/ActivityList";
import HistoryList from "./components/sections/history/HistoryList";
import TechDetail from "./components/sections/modern/TechDetail";
import PlaceDetail from "./components/sections/activity/PlaceDetail";
import SmoothScroll from "./components/utils/SmoothScroll";
import ScrollToTop from "./components/utils/ScrollToTop";
import "./App.css";

function App() {
  return (
    <main>
      <SmoothScroll>
        <ScrollToTop />
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Experience />} />
          <Route path="/history" element={<HistoryList />} />
          <Route path="/history/:slug" element={<HistoryDetail />} />
          <Route path="/activity" element={<ActivityList />} />
          <Route path="/activity/:name" element={<ActivityDetail />} />
          <Route path="/place/:slug" element={<PlaceDetail />} />
          <Route path="/modern-malang" element={<TechDetail />} />

          {/* DETAIL */}

          
        </Routes>
      </SmoothScroll>
    </main>
  );
}

export default App;