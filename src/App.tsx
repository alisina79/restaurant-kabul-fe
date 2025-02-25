import { Routes, Route } from "react-router";
import Navbar from "./component/Navbar";

import Footer from "./component/Footer";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Testimonials from "./pages/Testimonials";
import Reservations from "./pages/Reservations";
import Gallery from "./pages/Gallery";
import About from "./pages/AboutUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import OurStory from "./pages/OurStory";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <Navbar /> {/* Navbar is always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer /> {/* Footer is always visible */}
    </>
  );
}

export default App;
