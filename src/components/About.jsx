import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    // Add a check for mobile devices to adjust the animation
    const isMobile = window.innerWidth < 768;
    
    if (imageRef.current && isMobile) {
      // Simple fade-in for mobile instead of complex clip animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  useGSAP(() => {
    // Only run the complex animation on non-mobile devices
    if (window.innerWidth >= 768) {
      const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: "#clip",
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });

      clipAnimation.to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
      });
    }

    // Simple fade-in animation for title
    gsap.from(".title-line", {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".title-container",
        start: "top 80%",
      }
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen bg-ragnarok-dark overflow-hidden">
      <div className="relative mb-8 mt-24 flex flex-col items-center px-4">
        <p className="font-general text-base md:text-xl uppercase text-ragnarok-accent tracking-[0.2em] md:tracking-[0.3em] mb-8 md:mb-12 text-center">
          Record of Ragnarok
        </p>

        <div className="title-container relative w-full max-w-5xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="title-line font-zentry text-[2.5rem] sm:text-[4.5rem] md:text-[7rem] lg:text-[9rem] uppercase text-white leading-[0.9] tracking-wider mb-2 md:mb-4">
              HUMANITY'S
            </h1>
            
            <h1 className="title-line font-zentry text-[2.2rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] uppercase text-blue-lightning leading-[0.9] tracking-wider mb-2 md:mb-4">
              LAST
            </h1>
            
            <h1 className="title-line font-zentry text-[2rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7rem] uppercase text-ragnarok-accent leading-[0.9] tracking-wider mb-2 md:mb-4">
              STAND
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
              <h1 className="title-line font-zentry text-[1.5rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[5rem] uppercase text-white leading-[0.9] tracking-wider">
                AGAINST
              </h1>
              
              <h1 className="title-line font-zentry text-[1.5rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[5rem] uppercase text-violet-demon leading-[0.9] tracking-wider">
                THE
              </h1>
              
              <h1 className="title-line font-zentry text-[1.8rem] sm:text-[3rem] md:text-[5rem] lg:text-[6rem] uppercase text-ragnarok-primary leading-[0.9] tracking-wider">
                GODS
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 max-w-sm md:max-w-xl text-center px-4">
          <p className="text-lg md:text-2xl font-bold mb-3 text-ragnarok-light">The ultimate tournament to decide the fate of humanity</p>
          <p className="text-ragnarok-accent">
            13 champions of humanity battle against 13 gods in one-on-one duels to determine 
            whether mankind should be allowed to survive or face extinction
          </p>
        </div>
      </div>

      {/* Mobile-specific image - visible only on small screens */}
      <div className="md:hidden px-4 my-12">
        <div 
          ref={imageRef}
          className="w-full h-[40vh] rounded-xl overflow-hidden relative"
        >
          <img
            src="/img/battle.jpg"
            alt="Record of Ragnarok Arena"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ragnarok-dark/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-4">
            <p className="text-white font-bold text-xl">Valhalla Arena</p>
            <p className="text-white/70 text-sm">Where gods and humans battle for survival</p>
          </div>
        </div>
      </div>

      {/* Desktop clip animation - hidden on mobile */}
      <div className="hidden md:block h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="/img/battle.jpg"
            alt="Record of Ragnarok Arena"
            className="absolute left-0 top-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ragnarok-dark/70 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
