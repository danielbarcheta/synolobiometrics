import { Link } from "react-router-dom";

export function CTASection({ cta }) {
  const currentYear = new Date().getFullYear();

  return (
    <section
      className="relative text-white px-10 py-20 text-center"
      style={{ backgroundColor: "#33cfabd5" }}
    >
      <h2 className="text-4xl font-bold mb-4">{cta.title}</h2>
      <p className="mb-8 text-lg">{cta.description}</p>
      <Link
        to="/contact"
        className="bg-white px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition inline-block"
        style={{ color: "#2c3e50" }}
      >
        {cta.buttonText}
      </Link>

      <div
        className="absolute left-0 right-0 bottom-4 text-white text-sm"
        style={{ userSelect: "none" }}
      >
        © {currentYear} Synolo Biometrics, Inc.
      </div>
    </section>
  );
}
