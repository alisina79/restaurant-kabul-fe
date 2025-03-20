
import Seasonal from "./Seasonal";

import Carousel from "./Carousel";
import PrivateDining from "../pages/PrivateDining";
import Chef from "../component/Chef";
// import ChefSpecial from "../pages/ChefSpecial"; // Commented out ChefSpecial component
import OurStory from "./OurStory";
import HeroSection from "./HeroSection";

function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
     
      <HeroSection />
      <Chef />
   
      <Seasonal />
      <PrivateDining />
      {/* <ChefSpecial /> */}
      
      <Carousel />
      <OurStory />
      
      <div></div>
    </div>
  );
}

export default Home;
