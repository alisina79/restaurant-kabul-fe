import Seasonal from "./Seasonal";

import PrivateDining from "../pages/PrivateDining";
import Chef from "../component/Chef";
// import ChefSpecial from "../pages/ChefSpecial"; // Commented out ChefSpecial component

import HeroSection from "./HeroSection";
import Celebration from "./Celebration";
import Celebrations from "./Celebrations";
import PrivateDiningCarousel from "./PrivateDiningCarousel";
import WhatsOn from "./WhatsOn";
import FooterAlt from "./FooterAlt";
import OurStory from "./OurStory";

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
    
        <Chef />
    
        <WhatsOn />
        <Seasonal />
     
      
     
      
      <PrivateDiningCarousel />
      <Celebrations />
      <OurStory />
      <FooterAlt />
    </div>
  );
}

export default Home;
