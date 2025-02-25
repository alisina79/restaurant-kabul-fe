import Hero from "../component/Hero";
import About from "./About";
import FeaturedDishes from "./FeaturedDishes";
import Carousel from "./Carousel";
import Menudetails from "./Menudetails";
import Testimonials from "./Testimonials";
import ChefSpecial from "./ChefSpecial";
function Home() {
  return (
    <div>
      <Hero />
      <About />

      <Carousel />
      <div>
        <FeaturedDishes />
      </div>

      <Menudetails />
      <div>
        <ChefSpecial />
      </div>
      <Testimonials />
    </div>
  );
}

export default Home;
