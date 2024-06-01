import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import MobileIntelligence from "./pages/MobileIntelligence.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/mobile-intelligence" element={<MobileIntelligence />} />
      </Routes>
    </Router>
  );
}

export default App;
