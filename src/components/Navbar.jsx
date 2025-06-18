import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { close, logo, menu, iconsynolo } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);
  const hasHiddenOnce = useRef(false);

  const textShadowSoft = {
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.80)",
  };

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

  useEffect(() => {
    const path = location.pathname === "/" ? "Home" : navLinks.find(link => `/${link.id}` === location.pathname)?.title || "";
    setActive(path);
  }, [location]);

  return (
    <>
      <style>{`
        .fade-underline {
          position: relative;
        }

        .fade-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 2px;
          background-color: currentColor;
          opacity: 0;
          transform: scaleX(0);
          transition: opacity 0.3s ease, transform 0.3s ease;
          transform-origin: left;
        }

        .fade-underline:hover::after {
          opacity: 1;
          transform: scaleX(1);
        }
      `}</style>

      <Link to="/" className="fixed top-4 left-8 z-[100]">
        <img
          src={logo}
          alt="logo-big"
          className={`transition-all duration-500 ease-in-out pointer-events-auto
            ${scrolled ? "opacity-0 translate-y-[-20px]" : "opacity-100 translate-y-0"}
          `}
          style={{ width: "300px", height: "auto" }}
        />
      </Link>

      <nav
        className={`w-full flex px-4 justify-between items-center fixed top-0 left-0 right-0 z-[99] transition-all duration-500 ease-in-out
          ${scrolled ? "bg-white/95 shadow-sm py-2" : "bg-transparent py-4"}
          ${visible ? "opacity-100" : "opacity-0"}
        `}
      >
        {scrolled && (
          <Link to="/">
            <img src={iconsynolo} alt="logo" className="w-[30px] h-[30px] ml-8" />
          </Link>
        )}

        <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-60">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[18px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-8"
              }`}
            >
              <Link
                to={`/${nav.id}`}
                style={!scrolled ? textShadowSoft : {}}
                className={`fade-underline ${
                  active === nav.title
                    ? "text-[#33cfb0]"
                    : scrolled
                    ? "text-gray-900"
                    : "text-white"
                }`}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center pr-4">
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
            } p-6 bg-white/95 absolute top-20 right-4 my-2 min-w-[140px] rounded-xl shadow-lg`}
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
                  <Link
                    to={`/${nav.id}`}
                    className={`fade-underline ${
                      active === nav.title
                        ? "text-[#33cfb0]"
                        : "text-gray-800"
                    }`}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
