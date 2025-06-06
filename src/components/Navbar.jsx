import { useState, useEffect, useRef } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);
  const hasHiddenOnce = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setScrolled(true);

        if (!hasHiddenOnce.current) {
          hasHiddenOnce.current = true;
          setVisible(false);
          setTimeout(() => {
            setVisible(true);
          }, 400);
        }
      }

      if (currentScrollY <= 50) {
        setScrolled(false);
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex px-4 pr-16 justify-between items-center fixed top-0 left-0 right-0 z-[99] transition-all duration-500 ease-in-out
        ${scrolled ? "bg-white/95 shadow-sm py-2" : "bg-transparent py-4"}
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      <img
        src={logo}
        alt="logo"
        className="w-[200px] h-[25px] ml-8"
      />

      {/* Desktop Menu */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-60">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[18px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-8"
            }`}
          >
            <a
              href={`#${nav.id}`}
              className={`${
                active === nav.title
                  ? "text-[#33cfb0]"
                  : scrolled
                  ? "text-gray-900"
                  : "text-white hover:text-gray-200"
              } transition-colors duration-200 ${
                scrolled
                  ? "hover:underline hover:underline-black"
                  : "hover:underline hover:underline-white"
              }`}
              onClick={() => setActive(nav.title)}
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className={`w-[28px] h-[28px] object-contain ${
            scrolled ? "invert-0" : "invert"
          }`}
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-white/95 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl shadow-lg`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[18px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
              >
                <a
                  href={`#${nav.id}`}
                  className={`${
                    active === nav.title
                      ? "text-[#33cfb0]"
                      : "text-gray-800 hover:text-gray-600"
                  }`}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;