import { useState, type MouseEvent } from "react";
import Drawer from "@mui/material/Drawer";

const sectionLinks = [
  { label: "Home", href: "/", sectionId: "home" },
  { label: "About Us", href: "/about", sectionId: "about" },
  { label: "Prices", href: "/menu", sectionId: "prices" },
] as const;

const contactLink = { label: "Contact Us", href: "/contact", sectionId: "contact" } as const;

function Navbar({
  scrollToSection,
}: {
  scrollToSection: (sectionId: string) => void;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
    closeDrawer = false,
  ) => {
    event.preventDefault();
    scrollToSection(sectionId);
    if (closeDrawer) {
      setDrawerOpen(false);
    }
  };

  return (
    <nav className="relative flex w-full items-center gap-4 bg-amber-100 px-4 py-12">
      <img
        alt="aguas-website-logo"
        src="./src/assets/aguas-website-logo.svg"
        className="size-12"
      />
      <button
        type="button"
        className="ml-auto rounded md:hidden cursor-pointer"
        aria-label="Open navigation menu"
        aria-expanded={drawerOpen}
        onClick={() => setDrawerOpen(true)}
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <ul className="hidden md:flex md:w-full md:justify-between md:text-xl">
        <li>
          <ul className="flex gap-4">
            {sectionLinks.map(({ label, href, sectionId }) => (
              <li key={sectionId}>
                <a href={href} onClick={(event) => handleNavigation(event, sectionId)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <a
            href={contactLink.href}
            onClick={(event) => handleNavigation(event, contactLink.sectionId)}
          >
            {contactLink.label}
          </a>
        </li>
      </ul>
      <Drawer
        anchor="right"
        variant="persistent"
        open={drawerOpen}
        className="md:hidden"
        sx={{ "& .MuiDrawer-paper": { width: '100%', boxSizing: "border-box", backgroundColor: "orange" } }}
      >
        <div className="flex items-center justify-end p-4">
          <button
            type="button"
            className="rounded px-3 py-2 cursor-pointer"
            aria-label="Close navigation menu"
            onClick={() => setDrawerOpen(false)}
          >
            Close
          </button>
        </div>
        <ul className="flex flex-col gap-4 px-6 py-2 text-lg text-center">
          {[...sectionLinks, contactLink].map(({ label, href, sectionId }) => (
            <li key={sectionId}>
              <a
                href={href}
                onClick={(event) => handleNavigation(event, sectionId, true)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Drawer>
    </nav>
  );
}

export default Navbar;
