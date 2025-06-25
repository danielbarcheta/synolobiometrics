import { useNavigate, useLocation } from "react-router-dom";
import { MdEmail } from "react-icons/md";

const ContactFloatingButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Oculta o botão na página de contato
  if (location.pathname === "/contact") return null;

  return (
    <button
      onClick={() => navigate("/contact")}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-white text-[#5ce6b1db] shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-colors duration-300 hover:bg-[#5ce6b1db] hover:text-white"
      aria-label="Contato"
    >
      <MdEmail size={28} />
    </button>
  );
};

export default ContactFloatingButton;
