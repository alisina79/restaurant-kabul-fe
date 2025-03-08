import Hero from "../component/Hero";
import About from "../pages/About";
import FeaturedDishes from "../component/FeaturedDishes";
import Carousel from "./Carousel";
import Menudetails from "./Menudetails";
import Chef from "../component/Chef";
import ChefSpecial from "../pages/ChefSpecial";
import OurStory from "./OurStory";

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedDishes />
      <About />
      <ChefSpecial />
      <Chef />
      <Carousel />
      <OurStory />
      <Menudetails />
      <div></div>
    </div>
  );
}

export default Home;
