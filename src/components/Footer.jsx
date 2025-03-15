import { TiLocationArrow } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-ragnarok-dark py-10 text-ragnarok-light">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div>
            <h1 className="text-2xl font-bold">
              Record of <span className="text-ragnarok-primary">Ragnarok</span>
            </h1>
            <p className="mt-2 max-w-md text-sm opacity-70">
              The epic battle between humanity and the gods. Witness the clash between 
              Nikola Tesla and Beelzebub in Round 8 of the tournament to decide mankind's fate.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <TiLocationArrow className="text-ragnarok-accent" />
              <p className="text-sm">Follow the Tournament</p>
            </div>
            <div className="flex gap-5">
              <a href="#" className="text-sm hover:text-ragnarok-accent">
                Characters
              </a>
              <a href="#" className="text-sm hover:text-ragnarok-accent">
                Rounds
              </a>
              <a href="#" className="text-sm hover:text-ragnarok-accent">
                Gallery
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-center text-xs opacity-50">
          <p>© 2024 Ivo Bělohlav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
