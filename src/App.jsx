import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import WhoWeAre from "./pages/about/whoWeAre";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/who-we-are" element={<WhoWeAre />} />
      </Routes>
    </Router>
  );
}

export default App;
