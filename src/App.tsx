import HeroSection from './components/HeroSection';
import TechStack from './components/TechStack';
import ResearchAndAI from './components/ResearchAndAI';
import CustomCursor from './components/CustomCursor';
import FeaturedProjects from './components/FeaturedProjects';
import Qualifications from './components/Qualifications';
import Experiences from './components/Experiences';
import StrategicMethodology from './components/StrategicMethodology';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      <CustomCursor />
      <HeroSection />
      <TechStack />
      <FeaturedProjects />
      <ResearchAndAI />
      <Qualifications />
      <Experiences />
      <StrategicMethodology />
      <Footer />
    </div>
  );
}

export default App;
