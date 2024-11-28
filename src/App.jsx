import Navbar from "./components/header_web/Navbar";
import Experience from "./components/pages_web/experience/ExperinecePage";
import Hero from "./components/pages_web/home/HeroSection";
import ProjectPage from "./components/pages_web/projects/ProjectPage";
import SkillsPage from "./components/pages_web/skills/SkillsPage";

function App() {
  return (
    <div className="bg-[#1E5775] h-full px-2 lg:px-3 py-3">
      <div className="bg-[#F6F6F6] h-auto ">
        <Navbar />
        <Hero />
        <SkillsPage />
        <Experience />
        <ProjectPage />
      </div>
    </div>
  );
}

export default App;
