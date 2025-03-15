import Hero from "../component/Hero";
import About from "../pages/About";
import FeaturedDishes from "../component/FeaturedDishes";
import Carousel from "./Carousel";
import PrivateDining from "../pages/PrivateDining";
import Chef from "../component/Chef";
import ChefSpecial from "../pages/ChefSpecial";
import OurStory from "./OurStory";

function Home() {
  return (
    <div>
      <Hero />
      <Chef />
      <FeaturedDishes />
      <About />
      <PrivateDining />
      <ChefSpecial />
      
      <Carousel />
      <OurStory />
      
      <div></div>
    </div>
  );
}

export default Home;
