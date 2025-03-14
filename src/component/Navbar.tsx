import { useState, useEffect, useRef } from "react";
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
  X as CloseIcon,
} from "lucide-react";

import calendarIcon from "../assets/calendar-icon.svg"
// Import your food images for the sidebar
import homeImage from "../chef/one.jpg";
import menuImage from "../chef/two.jpg";
import reservationsImage from "../chef/three.jpg";
import galleryImage from "../chef/four.jpg";
import contactImage from "../chef/five.jpg";
import aboutImage from "../chef/six.jpg";
import { CalendarIcon, HamburgerMenu, Logo } from "./SVGS";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isBookDropdownOpen, setIsBookDropdownOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(homeImage);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  
  // Ref for the book button and dropdown
  const bookButtonRef = useRef<HTMLDivElement>(null);
  const bookDropdownRef = useRef<HTMLDivElement>(null);

  // Image mapping for sidebar routes
  const routeImages = {
    home: homeImage,
    menu: menuImage,
    reservations: reservationsImage,
    gallery: galleryImage,
    contact: contactImage,
    about: aboutImage
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Check if the device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add a click outside listener to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        bookButtonRef.current && 
        !bookButtonRef.current.contains(event.target as Node) &&
        bookDropdownRef.current && 
        !bookDropdownRef.current.contains(event.target as Node)
      ) {
        setIsBookDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  // Handle dropdown toggle
  const toggleBookDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookDropdownOpen(!isBookDropdownOpen);
  };

  // SVG for the "K" logo for mobile view
  const KLogoSVG = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="35" 
      height="35" 
      viewBox="0 0 100 100" 
      className={styles.kLogoSvg}
      onMouseEnter={() => setIsLogoHovered(true)}
      onMouseLeave={() => setIsLogoHovered(false)}
      onTouchStart={() => setIsLogoHovered(true)}
      onTouchEnd={() => setIsLogoHovered(false)}
    >
      <text x="50" y="55" style={{
        fontFamily: 'Cinzel, serif',
        fontSize: '68px',
        fill: 'none',
        stroke: isLogoHovered ? '#ffffff' : '#ac8d5b',
        strokeWidth: '1.1',
        textAnchor: 'middle',
        dominantBaseline: 'middle',
        transition: 'stroke 0.3s ease'
      }}>K</text>
    </svg>
  );

  return (
    <>
      <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
        {/* Top Black Header */}
        <div className={styles.topHeader}>
          {/* Left Side - Hamburger Menu */}
          <div className={styles.hamburgerWrapper} onClick={() => setIsSidebarOpen(true)}>
            <HamburgerMenu color="#ac8d5b"/>
          </div>

          {/* Center - Brand Logo */}
          <div className={styles.logoWrapper}>
            <Link to="/" className={styles.logo}>
              <div className={styles.desktopLogo}>
                <Logo />
              </div>
              <div 
                className={styles.mobileLogo}
              >
                <KLogoSVG />
              </div>
            </Link>
          </div>

          {/* Right Side - Contact info and Book button */}
          <div className={styles.contactArea}>
            <span className={styles.phoneNumber}>020 7299 0404</span>
            
            <div 
              ref={bookButtonRef}
              className={styles.bookButton}
              onClick={toggleBookDropdown}
              onMouseEnter={toggleBookDropdown}
             >
              <div className={styles.calendarIconMobile} >
                <CalendarIcon color="#ac8d5b"  />
              </div>
              {/* <img src={calendarIcon} alt="Calendar Icon" className={styles.calendarIconMobile} style={{ width: '16px', height: '16px', color: 'white' }} /> */}
              BOOK NOW
            </div>
            <div 
              ref={bookDropdownRef}
              className={`${styles.bookDropdown} ${isBookDropdownOpen ? styles.active : ''}`}
            >
              <Link 
                to="/reservations" 
                className={styles.bookDropdownItem}
                onClick={() => {
                  setIsBookDropdownOpen(false);
                }}
              >
                <Calendar size={16} style={{ color: '#ac8d5b' }} /> Book a Table
              </Link>
              <Link 
                to="/private-dining" 
                className={styles.bookDropdownItem}
                onClick={() => {
                  setIsBookDropdownOpen(false);
                }}
              >
                <Users size={16} style={{ color: '#ac8d5b' }} /> Private Dining
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom White Header */}
        <div className={styles.bottomHeader}>
          <div className={styles.restaurantName}>
            Kaboul Gourmet
          </div>
          <nav className={styles.navLinks}>
            <Link to="/menu" className={styles.navLink}>MENUS</Link>
            <Link to="/whats-on" className={styles.navLink}>WHAT'S ON</Link>
            <Link to="/about" className={styles.navLink}>ABOUT</Link>
            <Link to="/contact" className={styles.navLink}>CONTACT</Link>
            <Link to="/newsletter" className={styles.navLink}>NEWSLETTER SIGNUP</Link>
          </nav>
        </div>
      </header>

      {/* Sidebar Menu for Mobile/Tablet */}
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}>
        <div className={styles.sidebarContent}>
          <button className={styles.sidebarClose} onClick={() => setIsSidebarOpen(false)}>
            <CloseIcon size={24} />
          </button>
          <div className={styles.sidebarLinks}>
            <Link to="/" 
              className={styles.sidebarLink} 
              onClick={() => setIsSidebarOpen(false)}
              onMouseEnter={() => setActiveImage(routeImages.home)}
            >
              <Home size={20} /> HOME
            </Link>
            <Link to="/menu" 
              className={styles.sidebarLink} 
              onClick={() => setIsSidebarOpen(false)}
              onMouseEnter={() => setActiveImage(routeImages.menu)}
            >
              <Book size={20} /> MENU
            </Link>
            <Link to="/reservations" 
              className={styles.sidebarLink} 
              onClick={() => setIsSidebarOpen(false)}
              onMouseEnter={() => setActiveImage(routeImages.reservations)}
            >
              <Calendar size={20} /> RESERVATIONS
            </Link>
            <Link to="/gallery" 
              className={styles.sidebarLink} 
              onClick={() => setIsSidebarOpen(false)}
              onMouseEnter={() => setActiveImage(routeImages.gallery)}
            >
              <Image size={20} /> GALLERY
            </Link>
            <Link to="/contact" 
              className={styles.sidebarLink} 
              onClick={() => setIsSidebarOpen(false)}
              onMouseEnter={() => setActiveImage(routeImages.contact)}
            >
              <Phone size={20} /> CONTACT US
            </Link>
            <Link to="/about" 
              className={styles.sidebarLink} 
              onClick={() => setIsSidebarOpen(false)}
              onMouseEnter={() => setActiveImage(routeImages.about)}
            >
              <Users size={20} /> ABOUT US
            </Link>
          </div>
        </div>
        <div 
          className={styles.sidebarImage} 
          style={{ backgroundImage: `url(${activeImage})` }}
        ></div>
      </div>
    </>
  );
}

export default Navbar;
