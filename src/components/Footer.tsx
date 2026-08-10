const Footer = () => {
  return (
    <footer className="border-t border-(--border) bg-(--background) text-(--foreground)">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold tracking-tight">
              F <span className="text-(--primary)">R</span>
            </h2>

            <p className="mt-2 max-w-sm text-sm text-(--muted)">
              Crafting modern and responsive web experiences with clean code, thoughtful design, and a focus on usability.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-sm text-(--muted) transition-colors hover:text-(--primary)"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm text-(--muted) transition-colors hover:text-(--primary)"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-sm text-(--muted) transition-colors hover:text-(--primary)"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-sm text-(--muted) transition-colors hover:text-(--primary)"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-(--border) pt-6 text-sm text-(--muted) md:flex-row">
          <p>
            © 2016 - {new Date().getFullYear()}. All rights reserved.
          </p>

          <p>
            Made with <span className="text-(--primary)">♥</span> and code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;