import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import MobileIntelligence from "./pages/MobileIntelligence.jsx";
import SocialMediaIntelligence from "./pages/SocialMediaIntelligence.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/mobile-intelligence" element={<MobileIntelligence />} />
        <Route path="/social-media-intelligence" element={<SocialMediaIntelligence />} />
      </Routes>
    </Router>
  );
}

export default App;
