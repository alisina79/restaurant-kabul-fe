import Hero from "../component/Hero";
import Seasonal from "./Seasonal";
import FeaturedDishes from "../component/FeaturedDishes";
import Carousel from "./Carousel";
import PrivateDining from "../pages/PrivateDining";
import Chef from "../component/Chef";
// import ChefSpecial from "../pages/ChefSpecial"; // Commented out ChefSpecial component
import OurStory from "./OurStory";

function Home() {
  return (
    <div>
      <Hero />
      <Chef />
      <FeaturedDishes />
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
