import styles from "../style";
import { logowhite } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section 
    className={`${styles.flexCenter} pb-2 flex-col px-6 md:px-12 lg:px-24 border-t-[3px] border-white/9`}
    style={{
      background: "linear-gradient(135deg, #5ecfbc 20.89%, #5bcab8 30.23%, #4fc3b0 50.04%, #3ebba6 55.12%, #2dae99 71.54%, #1c9a87 100%)"
    }}
  >
    <div className={`flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-6 py-6`}>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        {footerLinks.slice(0, 3).map((footerlink) => (
          <div key={footerlink.title} className="flex flex-col">
            <h4 className="font-poppins font-semibold text-[18px] leading-[27px] text-[#1a365d] mb-3">
              {footerlink.title}
            </h4>
            <ul className="list-none pl-0">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-medium text-[15px] leading-[24px] text-white/90 hover:text-white cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-2" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

<div className="flex-1 flex flex-col items-end md:pl-8 lg:pl-12">
  <div className="max-w-[380px] mt-30 flex flex-col justify-center h-full">
    <img
      src={logowhite}
      alt="synolo"
      className="w-[380px] object-contain ml-auto"
    />
  </div>
</div>


    </div>

    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-1 border-t border-white/30">
      <div className="order-2 md:order-1">
        <p className="font-poppins font-medium text-[15px] leading-[24px] text-[#1a365d]">
          © 2025 Synolo Biometrics, Inc.
        </p>
      </div>

      <div className="flex flex-row order-1 md:order-2 mb-1 md:mb-0">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[16px] h-[16px] object-contain cursor-pointer invert brightness-0 ${
              index !== socialMedia.length - 1 ? "mr-4" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
