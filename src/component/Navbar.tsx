import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
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
} from "lucide-react";

function Navbar() {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleMenuClick = (category: string) => {
    const formattedCategory =
      category.charAt(0).toUpperCase() + category.slice(1);
    navigate("/menu", { state: { section: formattedCategory } });
  };

  // Scroll progress for the indicator
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

  // Navbar color change on scroll with lowered threshold for testing
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Temporarily lower threshold to 10px for testing
      if (scrollTop > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
              onClick={() => setIsOpen(false)}
            ></button>

            <Link to="/" onClick={() => setIsOpen(false)}>
              <Home size={24} className={styles.icon} /> Home
            </Link>

            {/* Menu Dropdown */}
            <div className={styles.dropdownItem}>
              <button
                className={styles.dropdownToggle}
                onClick={() =>
                  setSubmenuOpen(submenuOpen === "menu" ? null : "menu")
                }
              >
                <Book size={24} className={styles.icon} /> Menu
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
                <button
                  onClick={() => {
                    handleMenuClick("Foods");
                    setIsOpen(false);
                  }}
                >
                  Foods
                </button>
                <button
                  onClick={() => {
                    handleMenuClick("Beverages");
                    setIsOpen(false);
                  }}
                >
                  Beverages
                </button>
                <button
                  onClick={() => {
                    handleMenuClick("Starters");
                    setIsOpen(false);
                  }}
                >
                  Starters
                </button>
              </div>
            </div>

            <Link to="/reservations" onClick={() => setIsOpen(false)}>
              <Calendar size={24} className={styles.icon} /> Reservations
            </Link>
            <Link to="/gallery" onClick={() => setIsOpen(false)}>
              <Image size={24} className={styles.icon} /> Gallery
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Phone size={24} className={styles.icon} /> Contact Us
            </Link>

            {/* About Us Dropdown */}
            <div className={styles.dropdownItem}>
              <button
                className={styles.dropdownToggle}
                onClick={() =>
                  setSubmenuOpen(submenuOpen === "about" ? null : "about")
                }
              >
                <Users size={24} className={styles.icon} /> About Us
                {submenuOpen === "about" ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>
              <div
                className={`${styles.submenu} ${
                  submenuOpen === "about" ? styles.active : ""
                }`}
              >
                <Link to="/aboutus/ourteam" onClick={() => setIsOpen(false)}>
                  Our Team
                </Link>
                <Link to="/about/vision" onClick={() => setIsOpen(false)}>
                  Our Vision
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
