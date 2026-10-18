function Navbar({
  scrollToSection,
}: {
  scrollToSection: (sectionId: string) => void;
}) {
  return (
    <nav className="w-full px-4 py-12 bg-amber-100 justify-between flex items-center gap-4">
      <img alt='aguas-website-logo' src='./src/assets/aguas-website-logo.svg' className="size-12"/>
      <ul className="hidden md:flex md:w-full md:justify-between md:text-xl">
        <li>
          <ul className="flex gap-4">
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("prices");
                }}
              >
                Prices
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
