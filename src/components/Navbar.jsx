import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { logo, iconsynolo } from "../assets";
import { navLinks } from "../constants";

const brazilFlag = "https://flagcdn.com/w20/br.png";
const usaFlag = "https://flagcdn.com/w20/us.png";
const spainFlag = "https://flagcdn.com/w20/es.png";

const Navbar = ({ isContact = false }) => {
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
    if (isContact) {
      setScrolled(true);
      setVisible(true);
      return;
    }

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
  }, [isContact]);

  useEffect(() => {
    const path =
      location.pathname === "/"
        ? "Home"
        : navLinks.find((link) => `/${link.id}` === location.pathname)?.title ||
          "";
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

      {!isContact && (
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
      )}

      <nav
        className={`w-full flex px-4 justify-between items-center fixed top-0 left-0 right-0 z-[99] transition-all duration-500 ease-in-out
          ${
            scrolled
              ? isContact
                ? "bg-white/95 shadow-none py-2"
                : "bg-white/95 shadow-sm py-2"
              : "bg-transparent py-4"
          }
          ${visible ? "opacity-100" : "opacity-0"}
        `}
        style={{
          transform: !scrolled ? "translateY(20px)" : "translateY(0)",
        }}
      >
        {scrolled && !isContact && (
          <Link to="/">
            <img src={iconsynolo} alt="logo" className="w-[30px] h-[30px] ml-8" />
          </Link>
        )}

        {/* Navbar links container with relative positioning */}
        <div className="relative flex-1 mr-60 hidden sm:flex justify-end items-center">
          <ul className="list-none flex justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-light cursor-pointer text-[18px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-8"
                }`}
              >
                <Link
                  to={`/${nav.id}`}
                  style={isContact ? {} : !scrolled ? textShadowSoft : {}}
                  className={`fade-underline ${
                    active === nav.title
                      ? "text-[#33cfb0]"
                      : isContact
                      ? "text-[#001F3F]"
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

          {/* Flags container - absolute positioned to the right of the links */}
          {!scrolled && (
            <div className="absolute right-[-80px] flex space-x-3 top-1/2 -translate-y-1/2">
              <button>
                <img src={brazilFlag} alt="Brazil" className="w-5 h-3 object-cover rounded-sm" />
              </button>
              <button>
                <img src={usaFlag} alt="USA" className="w-5 h-3 object-cover rounded-sm" />
              </button>
              <button>
                <img src={spainFlag} alt="Spain" className="w-5 h-3 object-cover rounded-sm" />
              </button>
            </div>
          )}
        </div>

        {/* Mobile menu toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center pr-4">
          <button
            onClick={() => setToggle(!toggle)}
            aria-label={toggle ? "Fechar menu" : "Abrir menu"}
            className="text-gray-900 dark:text-white text-3xl focus:outline-none"
          >
            {toggle ? <HiX /> : <HiMenu />}
          </button>

          {/* Mobile menu dropdown */}
          {toggle && (
            <div className="p-6 bg-white/95 absolute top-20 right-4 my-2 min-w-[140px] rounded-xl shadow-lg z-50">
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-light cursor-pointer text-[18px] ${
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
                        active === nav.title ? "text-[#33cfb0]" : "text-gray-800"
                      }`}
                    >
                      {nav.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
