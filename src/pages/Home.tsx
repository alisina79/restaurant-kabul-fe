import Seasonal from "./Seasonal";

import PrivateDining from "../pages/PrivateDining";
import Chef from "../component/Chef";
// import ChefSpecial from "../pages/ChefSpecial"; // Commented out ChefSpecial component
import OurStory from "./OurStory";
import HeroSection from "./HeroSection";
import Celebration from "./Celebration";

// Style for consistent component spacing
const sectionStyle = {
  marginBottom: "60px"
};

function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <div style={sectionStyle}>
        <HeroSection />
      </div>
      
      <div style={sectionStyle}>
        <Chef />
      </div>
      
      <div style={sectionStyle}>
        <Seasonal />
      </div>
      
      <div style={sectionStyle}>
        <Celebration />
      </div>
      
      <div style={sectionStyle}>
        <PrivateDining />
      </div>
      
      
      
      <div>
        <OurStory />
      </div>
    </div>
  );
}

export default Home;
