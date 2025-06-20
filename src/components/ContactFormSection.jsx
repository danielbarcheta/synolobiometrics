import React, { useState } from "react";

export default function ContactFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim()) e.email = "Please enter your email";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Email invalid";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message cannot be empty";
    return e;
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setSent(true);
  };

  return (
    <section
      className="min-h-screen flex relative overflow-hidden px-6 md:px-20"
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#1e2a3a",
        backgroundImage: `
          radial-gradient(
            circle at top left,
            rgba(92, 182, 142, 0.15),
            transparent 70%
          ),
          radial-gradient(
            circle at bottom right,
            rgba(20, 33, 61, 0.15),
            transparent 80%
          )
        `,
        backgroundBlendMode: "normal",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: 0,
          right: 0,
          height: "1px",
          backgroundColor: "#fff",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "40%",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#fff",
          zIndex: 5,
        }}
      />

      <div
        className="flex-1 flex justify-end items-end"
        style={{ zIndex: 10, paddingBottom: "40px" }}
      >
        <div
          className="bg-white rounded-3xl shadow-lg p-12 md:p-16"
          style={{
            boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
            width: "500px",
            marginRight: "8%",
            position: "sticky",
            bottom: "40px",
          }}
        >
          <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-gray-900 tracking-wide">
            Contact Us
          </h1>

          {!sent ? (
            <form
              onSubmit={handleSubmit}
              noValidate
              autoComplete="off"
              className="space-y-8"
            >
              {[
                {
                  label: "Name",
                  name: "name",
                  type: "text",
                  placeholder: "John Doe",
                },
                {
                  label: "Email",
                  name: "email",
                  type: "email",
                  placeholder: "john@example.com",
                },
                {
                  label: "Subject",
                  name: "subject",
                  type: "text",
                  placeholder: "Subject",
                },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name}>
                  <label
                    htmlFor={name}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {label}
                  </label>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={form[name]}
                    onChange={handleChange}
                    className={`w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition focus:outline-none focus:ring-2 focus:ring-[#5ce6b1d5] focus:border-[#5ce6b1d5] ${
                      errors[name] ? "border-red-400" : ""
                    }`}
                  />
                  {errors[name] && (
                    <p className="text-red-500 text-xs mt-1 italic">
                      {errors[name]}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 resize-none transition focus:outline-none focus:ring-2 focus:ring-[#5ce6b1d5] focus:border-[#5ce6b1d5] ${
                    errors.message ? "border-red-400" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 italic">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#5ce6b1d5] to-[#33cfabcc] text-[#0a1a2a] font-semibold rounded-xl shadow-md hover:brightness-105 transition"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-center text-gray-900 space-y-6 py-14">
              <h2 className="text-3xl font-semibold text-[#5ce6b1d5]">Thank you!</h2>
              <p className="text-gray-700 text-lg">
                Your message has been sent successfully. We will contact you
                shortly.
              </p>
              <button
                onClick={() => {
                  setForm({ name: "", email: "", subject: "", message: "" });
                  setSent(false);
                  setErrors({});
                }}
                className="px-6 py-3 bg-[#5ce6b1d5] rounded-lg font-semibold text-[#0a1a2a] hover:bg-[#33cfabcc] transition"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
