import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import holdingHands from "../assets/holding-hands.jpg";
import synoloLogo from "../assets/Synolo_Complete-BGv2.webp";

export default function Contact() {
  const { t } = useTranslation();

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
    if (!form.firstName.trim()) newErrors.firstName = t("errors.firstNameRequired");
    if (!form.lastName.trim()) newErrors.lastName = t("errors.lastNameRequired");
    if (!form.email.trim()) newErrors.email = t("errors.emailRequired");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = t("errors.emailInvalid");
    if (!form.phone.trim()) newErrors.phone = t("errors.phoneRequired");
    if (!form.subject.trim()) newErrors.subject = t("errors.subjectRequired");
    if (!form.message.trim()) newErrors.message = t("errors.messageRequired");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(form);
      toast.success(t("toast.messageSent"), {
        position: "top-center",
        autoClose: 3000,
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
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-[40%] px-20 py-28 flex flex-col justify-center bg-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl font-bold text-slate-800 mb-2"
        >
          {t("contact.title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-500 text-sm mb-10"
        >
          {t("contact.description")}
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-7"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.div className="flex gap-3" variants={fadeSlide}>
            <div className="w-1/2">
              <input
                type="text"
                name="firstName"
                placeholder={t("form.firstName")}
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
                placeholder={t("form.lastName")}
                value={form.lastName}
                onChange={handleChange}
                className="w-full border-b border-gray-300 bg-transparent py-2 placeholder-gray-600 focus:outline-none focus:border-black"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
          </motion.div>

          <motion.div variants={fadeSlide}>
            <input
              type="email"
              name="email"
              placeholder={t("form.email")}
              value={form.email}
              onChange={handleChange}
              className="w-full border-b border-gray-300 bg-transparent py-2 placeholder-gray-600 focus:outline-none focus:border-black"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </motion.div>

          <motion.div variants={fadeSlide}>
            <input
              type="tel"
              name="phone"
              placeholder={t("form.phone")}
              value={form.phone}
              onChange={handleChange}
              className="w-full border-b border-gray-300 bg-transparent py-2 placeholder-gray-600 focus:outline-none focus:border-black"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </motion.div>

          <motion.div variants={fadeSlide}>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-600 focus:outline-none focus:border-black"
            >
              <option value="">{t("form.selectSubject")}</option>
              <option value="Partnership">{t("form.subjects.partnership")}</option>
              <option value="Doubts">{t("form.subjects.doubts")}</option>
              <option value="Get the solution">{t("form.subjects.getSolution")}</option>
              <option value="Other">{t("form.subjects.other")}</option>
            </select>
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject}</p>
            )}
          </motion.div>

          <motion.div variants={fadeSlide}>
            <textarea
              name="message"
              placeholder={t("form.message")}
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-600 focus:outline-none focus:border-black resize-none"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </motion.div>

          <motion.button
            type="submit"
            className="w-full mt-3 border border-gray-500 text-gray-900 bg-transparent py-3 px-6 rounded-md font-medium transition-colors duration-300 hover:border-[#7debd0]"
            variants={fadeSlide}
          >
            {t("form.sendMessage")}
          </motion.button>
        </motion.form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:flex w-[60%] bg-transparent"
      >
        <div className="relative w-full h-screen overflow-hidden">
          <img
            src={holdingHands}
            alt={t("contact.imageAlt")}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute bottom-64 left-8 right-8 text-left px-6 z-20 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] leading-snug"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "2.0rem" }}
          >
            {`"${t("contact.quote")}"`}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute bottom-44 left-8 right-8 px-6 z-20 text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300, fontSize: "1.25rem", lineHeight: 1.1 }}
          >
            <p>{t("contact.quoteAuthor")}</p>
            <p>{t("contact.quoteRole")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-0 right-4 z-20"
            style={{ maxWidth: "60%" }}
          >
            <img
              src={synoloLogo}
              alt="Synolo Logo"
              className="h-80 object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-2 left-4 z-20 text-white text-s"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            © 2025 Synolo Biometrics, Inc.
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

const fadeSlide = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
