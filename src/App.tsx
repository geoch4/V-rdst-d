import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import CareCardSection from "./components/CareCardSection";
import ToolSection from "./components/ToolSection";
import Footer from "./components/footer";
import HlrPage from "./components/hlr/HlrPage";
import HlrChild from "./components/hlr/HlrChild";
import RecoveryPositionPage from "./components/hlr/RecoveryPositionPage";
function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <CareCardSection />
      <ToolSection />
      <Footer />
    </>
  );
}

function HlrScreen() {
  return (
    <>
      <Navbar />
      <HlrPage />
      <HlrChild />
      <RecoveryPositionPage />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hlr" element={<HlrScreen />} />
      <Route path="/hlr-child" element={<HlrChild />} />
    </Routes>
  );
}

export default App;