function Navbar({
  scrollToSection,
}: {
  scrollToSection: (sectionId: string) => void;
}) {
  return (
    <nav className="w-full px-4 py-12 bg-amber-100">
      <ul className="flex w-full justify-between text-xl">
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
