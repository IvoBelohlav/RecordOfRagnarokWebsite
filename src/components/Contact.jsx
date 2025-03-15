import { FaPlay, FaFilm } from "react-icons/fa";
import Button from "./Button";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="Record of Ragnarok" className="w-full h-full object-cover" />
  </div>
);

const Contact = () => {
  const contentRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    // Add animations for mobile and desktop
    if (contentRef.current && badgeRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          }
        }
      );
      
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.9 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.6,
          delay: 0.3,
          scrollTrigger: {
            trigger: badgeRef.current,
            start: "top 90%",
          }
        }
      );
    }
  }, []);

  return (
    <div id="contact" className="my-10 md:my-20 min-h-96 w-screen px-4 md:px-10">
      <div className="relative rounded-2xl bg-ragnarok-dark py-16 md:py-24 text-ragnarok-light overflow-hidden">
        {/* Streaming logo overlay */}
        <div className="absolute top-4 right-4 md:top-10 md:right-10 z-10">
          <div className="bg-ragnarok-primary px-2 py-1 md:px-3 md:py-2 rounded-md flex items-center">
            <FaFilm className="text-white text-lg md:text-3xl mr-1 md:mr-2" />
            <span className="font-bold text-white text-sm md:text-base">STREAM</span>
          </div>
        </div>
        
        {/* Background images - hidden on mobile, visible on tablet and up */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/teslareal.jpg"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/Beelzebub.jpg"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 hidden sm:block md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/Volume_17.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        {/* Mobile background image - only visible on small screens */}
        <div className="absolute inset-0 sm:hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ragnarok-dark/80 to-ragnarok-dark"></div>
          <img 
            src="/img/teslareal.jpg" 
            alt="Tesla" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Content */}
        <div ref={contentRef} className="flex flex-col items-center text-center relative z-10">
          <p className="mb-3 md:mb-5 font-general text-xs md:text-sm uppercase tracking-wider md:tracking-widest text-ragnarok-accent">
            Now Streaming
          </p>

          <h1 className="font-zentry text-3xl sm:text-4xl md:text-7xl font-black uppercase leading-tight mb-4 md:mb-6 px-2">
            Watch the Epic Battle <br className="hidden sm:block" /> 
            <span className="text-ragnarok-primary">on Streaming</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-base md:text-lg mb-6 md:mb-10 text-ragnarok-light/80 px-4">
            Experience the ultimate showdown between humanity's greatest inventor and the Lord of Flies. 
            Stream all episodes of Record of Ragnarok Season 3 exclusively online.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center w-full px-4 sm:w-auto">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-ragnarok-primary hover:bg-ragnarok-primary/90 transition-colors px-6 md:px-8 py-3 md:py-4 rounded-full text-white font-bold w-full sm:w-auto"
            >
              <FaPlay />
              Watch Now
            </a>
            
            <a 
              href="#" 
              className="flex items-center justify-center gap-2 bg-transparent border border-white/20 hover:bg-white/10 transition-colors px-6 md:px-8 py-3 md:py-4 rounded-full text-white font-bold w-full sm:w-auto"
            >
              View More Battles
            </a>
          </div>
          
          {/* Streaming badge */}
          <div ref={badgeRef} className="mt-8 md:mt-12 bg-black/30 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-lg inline-flex flex-wrap justify-center md:flex-nowrap items-center gap-2 md:gap-3">
            <span className="text-xs uppercase tracking-wider text-white/70">Original Series</span>
            <span className="w-1 h-1 rounded-full bg-white/50 hidden md:block"></span>
            <span className="text-xs uppercase tracking-wider text-white/70">Season 3</span>
            <span className="w-1 h-1 rounded-full bg-white/50 hidden md:block"></span>
            <span className="text-xs uppercase tracking-wider text-white/70">New Episodes</span>
          </div>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ragnarok-dark via-ragnarok-dark/80 to-transparent opacity-70"></div>
      </div>
    </div>
  );
};

export default Contact;
