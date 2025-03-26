import { Routes, Route } from "react-router";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import Gallery from "./pages/Gallery";
import About from "./pages/AboutUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import WhatsOn from "./pages/WhatsOn";
import Newsletter from "./pages/Newsletter";
import Ourjourny from "./pages/Ourjourny";
import Private from "./pages/Private";
import Celebration from "./pages/Celebration";
import PrivateDiningArch from "./pages/PrivateDiningArch";
import MothersDay from "./pages/MothersDay";
import ValentineDay from "./pages/Valentine'sDay";
import Anniversary from "./pages/Anniversary";
import SundayLunch from "./pages/SundayLunch";


import { useLocation } from "react-router";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation(); 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar /> {/* Navbar is always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/whatson" element={<WhatsOn />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/ourjourny" element={<Ourjourny />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/private-dining" element={<Private />} />
        <Route path="/celebrations" element={<Celebration />} />
        <Route path="/private-dining-arch" element={<PrivateDiningArch />} />
        <Route path="/mothers-day" element={<MothersDay />} />
        <Route path="/anniversary" element={<Anniversary />} />
        <Route path="/valentineday" element={<ValentineDay />} />
        <Route path="/sudanday" element={<SundayLunch />} />
        
      
      </Routes>
      <Footer /> {/* Footer is always visible */}
    </>
  );
}

export default App;
