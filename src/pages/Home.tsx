import Hero from "../component/Hero";
import About from "../pages/About";
import FeaturedDishes from "../component/FeaturedDishes";
import Carousel from "./Carousel";
import Menudetails from "./Menudetails";
import ChefSpecial from "./ChefSpecial";
import CustomerPolls from "./CustomerPolls";
import Chef from "../component/Chef";

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedDishes />
      <About />
      <Chef />
      <Carousel />
      <Menudetails />
      <div>
        <ChefSpecial />
      </div>
      <CustomerPolls />
    </div>
  );
}

export default Home;
