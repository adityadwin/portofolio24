import Navbar from "./components/header_web/Navbar";
import Herodua from "./components/pages_web/experience/ExperinecePage";
import Hero from "./components/pages_web/home/HeroSection";

function App() {
  return (
    <div className="bg-[#1E5775] h-full px-2 lg:px-3 py-3">
      <div className="bg-[#F6F6F6] h-auto px-2 lg:px-8">
        <Navbar />
        <Hero />
        <Herodua />
      </div>
    </div>
  );
}

export default App;
