import { Routes, Route } from "react-router-dom";
import Experience from "./components/Experience";
import HistoryDetail from "./components/sections/history/HistoryDetail";
import ActivityDetail from "./components/sections/activity/ActivityDetail";
import ActivityList from "./components/sections/activity/ActivityList";
import HistoryList from "./components/sections/history/HistoryList";
import PlaceDetail from "./components/sections/activity/PlaceDetail";
import "./App.css";

function App() {
  return (
    <main>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Experience />} />
        <Route path="/history" element={<HistoryList />} />
        <Route path="/history/:slug" element={<HistoryDetail />} />
        <Route path="/activity" element={<ActivityList />} />
        <Route path="/activity/:name" element={<ActivityDetail />} />
        <Route path="/place/:slug" element={<PlaceDetail />} />

        {/* DETAIL */}

        
      </Routes>
    </main>
  );
}

export default App;