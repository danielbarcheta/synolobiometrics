import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import holdingHands from "../assets/holding-hands.jpg";
import synoloLogo from "../assets/Synolo_Complete-BGv2.webp";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email format";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(form);
      toast.success("Message sent successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="h-screen flex bg-white pt-16 md:pt-0">
      <ToastContainer />
      <div className="w-full md:w-[40%] px-20 py-28 flex flex-col justify-center bg-white">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Chat to our team</h1>
        <p className="text-gray-500 text-sm mb-10">
          Want to learn more about the only clinically proven system to accurately capture and verify newborn and adult fingerprints? Then complete this form and we'll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-7">
          <div className="flex gap-3">
            <div className="w-1/2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                className="w-full border-b border-gray-300 bg-transparent py-2 placeholder-gray-600 focus:outline-none focus:border-black"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="w-full border-b border-gray-300 bg-transparent py-2 placeholder-gray-600 focus:outline-none focus:border-black"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border-b border-gray-300 bg-transparent py-2 placeholder-gray-600 focus:outline-none focus:border-black"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border-b border-gray-300 bg-transparent py-2 placeholder-gray-600 focus:outline-none focus:border-black"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-600 focus:outline-none focus:border-black"
            >
              <option value="">Select subject</option>
              <option value="Partnership">Partnership</option>
              <option value="Doubts">Doubts</option>
              <option value="Get the solution">Get the solution</option>
              <option value="Other">Other</option>
            </select>
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your message..."
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-600 focus:outline-none focus:border-black resize-none"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-3 border border-gray-500 text-gray-900 bg-transparent py-3 px-6 rounded-md font-medium transition-colors duration-300 hover:border-[#7debd0]"
          >
            Send message
          </button>
        </form>
      </div>

      <div className="hidden md:flex w-[60%] bg-transparent">
        <div className="relative w-full h-screen overflow-hidden">
          <img
            src={holdingHands}
            alt="Team Chat"
            className="object-cover w-full h-full"
          />

          <div className="absolute inset-0 bg-black/40 z-10"></div>

          <div
            className="absolute bottom-64 left-8 right-8 text-left px-6 z-20 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] leading-snug"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "2.0rem" }}
          >
            "We can't redesign infants, so we have to design new technology. From day one, we knew we had to rethink this problem from the ground up."
          </div>

          <div
            className="absolute bottom-44 left-8 right-8 px-6 z-20 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0)]"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300, fontSize: "1.25rem", lineHeight: 1.1 }}
          >
            <p>Dr. Eliah Aronoff-Spencer</p>
            <p>Inventor of the Synolo® Neo</p>
          </div>

          <div
            className="absolute bottom-0 right-4 z-20"
            style={{ maxWidth: "60%" }}
          >
            <img
              src={synoloLogo}
              alt="Synolo Logo"
              className="h-80 object-contain"
            />
          </div>

          <div
            className="absolute bottom-2 left-4 z-20 text-white text-s"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            © 2025 Synolo Biometrics, Inc.
          </div>
        </div>
      </div>
    </div>
  );
}
