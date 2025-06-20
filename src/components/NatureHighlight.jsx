import React from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import natureLogo from "../assets/nature-logo.png"; // seu logo

// Dados percentuais para gráficos de pizza
const pieData = [
  {
    id: "TAR Newborns",
    data: [
      { name: "TAR Newborns", value: 87 },
      { name: "Other", value: 13 },
    ],
    label: "TAR Newborns (%)",
  },
  {
    id: "TAR 4+ days",
    data: [
      { name: "TAR 4+ days", value: 98 },
      { name: "Other", value: 2 },
    ],
    label: "TAR 4+ days (%)",
  },
];

// Cor principal
const COLORS = ["#5ce6b1db", "#d3f0e9"];

const NatureHighlight = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <img
          src={natureLogo}
          alt="Nature Logo"
          className="h-12 md:h-16 mx-auto mb-4"
        />
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
          Destaque na{" "}
          <span style={{ color: "#5ce6b1db" }}>Nature Scientific Reports</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
          Nossa tecnologia Synolo® Neo foi destaque em uma publicação na revista
          científica <strong>Nature</strong>, reforçando sua eficácia na
          identificação biométrica de recém-nascidos durante vacinação e cuidados
          hospitalares.
        </p>
        <a
          href="https://www.nature.com/articles/s41598-022-25986-6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#5ce6b1db] text-white px-6 py-3 rounded-md font-medium hover:brightness-90 transition duration-300"
        >
          Ver publicação
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center"
      >
        {/* Exibindo números simples para Total Subjects e Newborns Enrolled */}
<div className="text-center">
  <h3 className="mb-3 font-semibold text-gray-800">Total Subjects</h3>
  <p className="text-7xl font-bold" style={{ color: "#5ce6b1db" }}>
    494
  </p>
</div>
<div className="text-center">
  <h3 className="mb-3 font-semibold text-gray-800">Newborns Enrolled</h3>
  <p className="text-7xl font-bold" style={{ color: "#5ce6b1db" }}>
    297
  </p>
</div>

        {/* Gráficos de pizza para os percentuais */}
        {pieData.map(({ id, data, label }) => (
          <div key={id} className="text-center">
            <h3 className="mb-3 font-semibold text-gray-800">{label}</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  innerRadius={40}
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={3}
                  label={({ percent }) =>
                    percent > 0
                      ? `${(percent * 100).toFixed(0)}%`
                      : null
                  }
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) =>
                    name === "Other" ? null : [value, name]
                  }
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default NatureHighlight;
