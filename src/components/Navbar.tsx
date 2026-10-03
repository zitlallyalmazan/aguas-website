function Navbar() {
  return (
    <nav className="w-full p-4 bg-amber-100">
      <ul className="flex w-full justify-between text-xl">
        <li>
          <ul className="flex gap-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/menu">Prices</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
