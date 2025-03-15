import gsap from "gsap";
import { useRef, useEffect } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const Story = () => {
  const frameRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  // Initialize animations on component mount
  useEffect(() => {
    if (containerRef.current && textRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
      );
      
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: "power2.out" }
      );
    }
  }, []);

  const handleMouseMove = (e) => {
    // Only apply the effect on non-mobile devices
    if (window.innerWidth < 768) return;
    
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="story" className="min-h-dvh w-screen bg-ragnarok-dark text-ragnarok-light overflow-hidden">
      <div className="flex size-full flex-col items-center py-10 pb-24 relative">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-ragnarok-accent/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-ragnarok-primary/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <p className="font-general text-sm uppercase text-ragnarok-accent md:text-base relative z-10 px-4 text-center">
          The Battle of Science vs Demonic Power
        </p>

        <div className="relative w-full">
          <AnimatedTitle
            title="The Cl<b>a</b>sh of <br /> Gen<b>i</b>us and Dem<b>o</b>n"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container" ref={containerRef}>
            {/* Mobile-specific image container - visible only on small screens */}
            <div className="md:hidden relative h-[40vh] w-full my-8 overflow-hidden rounded-xl">
              <img
                src="/img/teslareal.jpg"
                alt="Tesla"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ragnarok-dark via-ragnarok-dark/50 to-transparent"></div>
            </div>
            
            {/* Desktop image with mask - hidden on mobile */}
            <div className="hidden md:block story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img/teslareal.jpg"
                  alt="Tesla vs Beelzebub"
                  className="object-contain"
                />
                
                {/* Overlay image for Beelzebub */}
                <img 
                  src="/img/Beelzebub.jpg" 
                  alt="Beelzebub" 
                  className="absolute -bottom-20 right-0 md:right-20 w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-ragnarok-primary shadow-lg shadow-ragnarok-primary/30 z-20 transform rotate-6"
                />
              </div>
            </div>

            {/* for the rounded corner */}
            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        {/* Mobile-specific Beelzebub image - visible only on small screens */}
        <div className="md:hidden relative w-32 h-32 -mt-16 mb-8">
          <img 
            src="/img/Beelzebub.jpg" 
            alt="Beelzebub" 
            className="w-full h-full object-cover rounded-full border-4 border-ragnarok-primary shadow-lg shadow-ragnarok-primary/30 transform rotate-6"
          />
        </div>

        <div className="w-full px-4 md:px-0 md:-mt-64 md:me-44 md:justify-end flex justify-center">
          <div ref={textRef} className="flex h-full w-full md:w-fit flex-col items-center md:items-start backdrop-blur-sm bg-ragnarok-dark/30 p-6 rounded-xl border border-white/10 max-w-md">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-6 bg-ragnarok-primary"></div>
              <h3 className="font-zentry text-xl uppercase text-ragnarok-accent">Round 8</h3>
            </div>
            
            <p className="mt-3 text-center font-circular-web text-ragnarok-light md:text-start">
              In the eighth round of Ragnarok, humanity's greatest inventor <span className="text-blue-lightning font-bold">Nikola Tesla</span> 
              faces off against <span className="text-ragnarok-primary font-bold">Beelzebub</span>, the Lord of Flies. Tesla, armed with his 
              revolutionary electrical inventions, must overcome the demonic experiments 
              and twisted science of one of Hell's most brilliant minds.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                id="realm-btn"
                title="witness the battle"
                containerClass="w-full sm:w-auto bg-ragnarok-primary hover:bg-ragnarok-primary/90 transition-colors"
              />
              
              <button className="w-full sm:w-auto px-6 py-3 border border-white/20 rounded-full text-white text-sm uppercase tracking-wider hover:bg-white/10 transition-colors">
                Previous Battles
              </button>
            </div>
            
            {/* Battle stats */}
            <div className="mt-6 grid grid-cols-3 gap-4 w-full">
              <div className="text-center">
                <p className="text-xs text-white/60 uppercase">Volund</p>
                <p className="text-lg font-bold">Tesla Coil</p>
              </div>
              <div className="text-center border-x border-white/10">
                <p className="text-xs text-white/60 uppercase">Arena</p>
                <p className="text-lg font-bold">Valhalla</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-white/60 uppercase">Status</p>
                <p className="text-lg font-bold text-ragnarok-accent">Ongoing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
