import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndicator, setActiveIndicator] = useState(0);
  const navRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle smooth scrolling
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }
    
    const section = document.getElementById(sectionId);
    
    if (section) {
      // Get the navbar height to offset the scroll position
      const navbarHeight = document.querySelector('header').offsetHeight;
      
      // Calculate the target position with offset
      const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      // Smooth scroll to the target position
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without causing a jump
      window.history.pushState(null, null, `#${sectionId}`);
    } else {
      console.warn(`Section with ID "${sectionId}" not found`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(navRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  const handleIndicatorHover = (index) => {
    setActiveIndicator(index);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-ragnarok-dark/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-5 py-5">
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, 'hero')}
          className="text-2xl font-bold text-ragnarok-light"
        >
          Record of <span className="text-ragnarok-primary">Ragnarok</span>
        </a>

        <div className="hidden items-center gap-5 md:flex">
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')}
            className="nav-hover-btn"
          >
            About
          </a>
          <a 
            href="#story" 
            onClick={(e) => scrollToSection(e, 'story')}
            className="nav-hover-btn"
          >
            Battle
          </a>
          <a 
            href="#features" 
            onClick={(e) => scrollToSection(e, 'features')}
            className="nav-hover-btn"
          >
            Characters
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="nav-hover-btn"
          >
            Rounds
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`indicator-line ${activeIndicator === i ? "active" : ""}`}
                style={{ "--animation-order": i }}
                onMouseEnter={() => handleIndicatorHover(i)}
                onMouseLeave={() => handleIndicatorHover(0)}
              ></div>
            ))}
          </div>

          <button
            onClick={handleToggle}
            className="flex flex-col gap-1.5 md:hidden"
          >
            <div
              className={`h-0.5 w-6 bg-ragnarok-light transition-all duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            ></div>
            <div
              className={`h-0.5 w-6 bg-ragnarok-light transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`h-0.5 w-6 bg-ragnarok-light transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            ></div>
          </button>
        </div>
      </div>

      <div
        ref={navRef}
        className={`floating-nav absolute left-5 right-5 top-20 border-hsla -translate-y-20 rounded-lg bg-ragnarok-dark/90 p-5 opacity-0 backdrop-blur-md md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-5">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="font-general text-sm uppercase text-ragnarok-light"
          >
            About
          </a>
          <a
            href="#story"
            onClick={(e) => scrollToSection(e, 'story')}
            className="font-general text-sm uppercase text-ragnarok-light"
          >
            Battle
          </a>
          <a
            href="#features"
            onClick={(e) => scrollToSection(e, 'features')}
            className="font-general text-sm uppercase text-ragnarok-light"
          >
            Characters
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="font-general text-sm uppercase text-ragnarok-light"
          >
            Rounds
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
