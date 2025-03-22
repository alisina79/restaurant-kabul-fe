import Seasonal from "./Seasonal";

import PrivateDining from "../pages/PrivateDining";
import Chef from "../component/Chef";
// import ChefSpecial from "../pages/ChefSpecial"; // Commented out ChefSpecial component
import OurStory from "./OurStory";
import HeroSection from "./HeroSection";
import Celebration from "./Celebration";

// Style for consistent component spacing
const sectionStyle = {
  // marginBottom: "80px" // Increased margin for better separation
};

// Style for the last component (no bottom margin needed)
const lastSectionStyle = {
  marginBottom: "0"
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
      
      <div style={lastSectionStyle}>
        <OurStory />
      </div>
    </div>
  );
}

export default Home;
