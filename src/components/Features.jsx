import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon, bgColor = "" }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className={`relative size-full ${bgColor}`}>
      {src.startsWith("http") || src.startsWith("videos") ? (
        src.startsWith("videos") ? (
          <video
            src={src}
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
        ) : (
          <img 
            src={src} 
            alt={title} 
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
        )
      ) : (
        <img 
          src={src} 
          alt={title} 
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      )}
      
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-ragnarok-light">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">learn more</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section id="features" className="bg-ragnarok-dark pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-20">
        <p className="font-circular-web text-lg text-ragnarok-light">
          Round 8: Humanity vs Gods
        </p>
        <p className="max-w-md font-circular-web text-lg text-ragnarok-light opacity-50">
          The battle between humanity's greatest inventor and the Lord of Flies. 
          A clash of science against demonic powers that will determine the fate of mankind.
        </p>
      </div>

      {/* Main grid layout with asymmetrical design */}
      <div className="grid grid-cols-12 gap-4 md:gap-6 mb-20">
        {/* Tesla - Large feature card spanning 8 columns */}
        <div className="col-span-12 md:col-span-8 h-[50vh] md:h-[65vh]">
          <BentoTilt className="border-hsla h-full w-full overflow-hidden rounded-2xl">
            <BentoCard
              src="/img/teslareal.jpg"
              title={
                <>
                  Nikol<b>a</b> Tesla
                </>
              }
              description="Humanity's representative in Round 8. The genius inventor who harnessed electricity and revolutionized the modern world."
              isComingSoon
              bgColor="bg-blue-electric"
            />
          </BentoTilt>
        </div>

        {/* Beelzebub - Tall card spanning 4 columns and full height */}
        <div className="col-span-12 md:col-span-4 h-[50vh] md:h-[65vh]">
          <BentoTilt className="border-hsla h-full w-full overflow-hidden rounded-2xl">
            <BentoCard
              src="/img/Beelzebub.jpg"
              title={
                <>
                  Beelze<b>b</b>ub
                </>
              }
              description="The Lord of Flies and one of the Seven Princes of Hell. A scientific genius among the gods with a fascination for experimentation."
              isComingSoon
              bgColor="bg-violet-demon"
            />
          </BentoTilt>
        </div>

        {/* Hellheim - Medium card spanning 6 columns */}
        <div className="col-span-12 md:col-span-6 h-[40vh]">
          <BentoTilt className="border-hsla h-full w-full overflow-hidden rounded-2xl">
            <BentoCard
              src="/img/helheim.png"
              title={
                <>
                  Hel<b>l</b>heim
                </>
              }
              description="Beelzebub's realm of flies and demonic experiments, where he conducts his twisted research on living beings."
              isComingSoon
              bgColor="bg-violet-evil"
            />
          </BentoTilt>
        </div>

        {/* Round 7 - Medium card with special styling */}
        <div className="col-span-12 md:col-span-6 h-[40vh]">
          <BentoTilt className="border-hsla h-full w-full overflow-hidden rounded-2xl">
            <div className="relative size-full overflow-hidden">
              <img
                src="/img/next.webp"
                alt="Previous Battle"
                className="absolute left-0 top-0 size-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
              <div className="relative z-10 flex size-full flex-col justify-between p-5">
                <div className="flex flex-col items-start">
                  <h2 className="text-xl font-bold text-ragnarok-accent mb-2">See More</h2>
                  <h1 className="bento-title special-font text-ragnarok-light">
                    Round <b>7</b>
                  </h1>
                  <div className="mt-4 flex items-center gap-2 text-ragnarok-light">
                    <span>Previous battle</span>
                    <FaArrowRight />
                  </div>
                </div>
                
                <div className="self-end">
                  <div className="flex items-center gap-2 bg-ragnarok-primary/80 px-4 py-2 rounded-full text-white text-sm">
                    <TiLocationArrow />
                    <span>View battle</span>
                  </div>
                </div>
              </div>
            </div>
          </BentoTilt>
        </div>

        {/* Additional feature card - Battle statistics */}
        <div className="col-span-12 md:col-span-4 h-[30vh]">
          <BentoTilt className="border-hsla h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-tesla to-blue-electric p-6">
            <div className="flex flex-col h-full justify-between">
              <h3 className="text-xl font-bold text-white">Battle Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white/70 text-sm">Power Level</p>
                  <p className="text-white text-2xl font-bold">9.8/10</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Intensity</p>
                  <p className="text-white text-2xl font-bold">Extreme</p>
                </div>
              </div>
            </div>
          </BentoTilt>
        </div>

        {/* Additional feature card - Battle location */}
        <div className="col-span-12 md:col-span-8 h-[30vh]">
          <BentoTilt className="border-hsla h-full w-full overflow-hidden rounded-2xl">
            <div className="relative size-full">
              <img
                src="/img/arena.webp"
                alt="Battle Arena"
                className="absolute left-0 top-0  object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
              <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-lg font-bold text-ragnarok-accent">Battle Location</h3>
                  <h2 className="text-3xl font-bold text-white">Valhalla Arena</h2>
                </div>
                <p className="text-white/80 max-w-md">The sacred battleground where gods and humans clash to determine the fate of mankind.</p>
              </div>
            </div>
          </BentoTilt>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
