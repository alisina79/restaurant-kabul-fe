import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../css/navbar.module.css";
import {
  Menu as MenuIcon,
  Home,
  Book,
  Image,
  Phone,
  Users,
  Calendar,
  Car as CarIcon,
  Utensils as ForkKnife,
  ChevronRight,
  ChevronDown,
  X as CloseIcon,
} from "lucide-react";
import one from "../chef/one.jpg";
import two from "../chef/two.jpg";
import three from "../chef/three.jpg";
import four from "../chef/four.jpg";
import five from "../chef/five.jpg";
import six from "../chef/six.jpg";

const images: { [key: string]: string } = {
  home: one,
  menu: two,
  reservations: three,
  gallery: four,
  contact: five,
  about: six,
};

function Navbar() {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string>(images.home);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollWidth(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Navbar color changes after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={styles.scrollIndicator}
        style={{ width: `${scrollWidth}%` }}
      ></div>
      <nav
        className={`${styles.navbar} ${
          isScrolled ? styles.scrolledNavbar : ""
        }`}
      >
        <div className={styles.container}>
          <button
            className={styles.menuButton}
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon size={30} />
          </button>
          <div className={styles.logo}>
            <Link to="/" className={styles.logoText}>
              KABOUL Gourmet
            </Link>
          </div>
          <div
            className={styles.orderContainer}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className={styles.orderButton}>Order</button>
            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <Link to="/uber">
                  <CarIcon size={18} className={styles.icon} /> Uber
                </Link>
                <Link to="/zomato">
                  <ForkKnife size={18} className={styles.icon} /> Zomato
                </Link>
              </div>
            )}
          </div>
        </div>

        {isOpen && (
          <div
            className={`${styles.fullscreenMenu} ${isOpen ? styles.open : ""}`}
          >
            <button
              className={styles.closeButton}
              onClick={() => {
                console.log("Close button clicked!"); // Debugging
                setIsOpen(false);
              }}
            >
              <CloseIcon size={30} />
            </button>

            <div className={styles.menuContainer}>
              {/* Left Side - Navigation Links */}
              <div className={styles.linksSection}>
                <Link
                  to="/"
                  className={styles.navItem}
                  onMouseEnter={() => setActiveImage(images.home)}
                >
                  <Home size={24} /> Home
                </Link>
                <div className={styles.dropdownItem}>
                  <button
                    className={styles.dropdownToggle}
                    onMouseEnter={() => setActiveImage(images.menu)}
                    onClick={() =>
                      setSubmenuOpen(submenuOpen === "menu" ? null : "menu")
                    }
                  >
                    <Book size={24} /> Menu
                    {submenuOpen === "menu" ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </button>
                  <div
                    className={`${styles.submenu} ${
                      submenuOpen === "menu" ? styles.active : ""
                    }`}
                  >
                    <Link to="/menu/foods">Foods</Link>
                    <Link to="/menu/beverages">Beverages</Link>
                    <Link to="/menu/starters">Starters</Link>
                  </div>
                </div>
                <Link
                  to="/reservations"
                  className={styles.navItem}
                  onMouseEnter={() => setActiveImage(images.reservations)}
                >
                  <Calendar size={24} /> Reservations
                </Link>
                <Link
                  to="/gallery"
                  className={styles.navItem}
                  onMouseEnter={() => setActiveImage(images.gallery)}
                >
                  <Image size={24} /> Gallery
                </Link>
                <Link
                  to="/contact"
                  className={styles.navItem}
                  onMouseEnter={() => setActiveImage(images.contact)}
                >
                  <Phone size={24} /> Contact Us
                </Link>
                <Link
                  to="/about"
                  className={styles.navItem}
                  onMouseEnter={() => setActiveImage(images.about)}
                >
                  <Users size={24} /> About Us
                </Link>
              </div>

              {/* Right Side - Image Carousel */}
              <div className={styles.imageSection}>
                <img
                  src={activeImage}
                  alt="Section Image"
                  className={styles.carouselImage}
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
