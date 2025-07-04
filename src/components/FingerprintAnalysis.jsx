import fingerA from "../assets/fingerA.png";
import fingerB from "../assets/fingerB.png";
import fingerC from "../assets/fingerC.png";

export function FingerprintAnalysis() {
  return (
    <div className="w-full px-12 py-8 bg-white text-gray-800">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">Age Normalization of Fingerprints</h2>
        <p className="text-gray-600 text-base leading-relaxed max-w-xl mx-auto tracking-wide">
          The biometric device and example imagery used in this study.{" "}
          <strong>(A)</strong> the device in use,{" "}
          <strong>(B)</strong> time-course images of a single subject’s finger,{" "}
          <strong>(C)</strong> binarized prints finger images.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-32 px-4">
        
        <div className="flex flex-col space-y-10 w-full max-w-sm">
          <div className="flex items-center gap-4">
            <div className="text-xl font-bold min-w-[2rem]">A-</div>
            <img src={fingerA} alt="Finger A" className="rounded-lg shadow-md w-full object-cover" />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-xl font-bold min-w-[2rem]">B-</div>
            <img src={fingerB} alt="Finger B" className="rounded-lg shadow-md w-full object-cover" />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-xl font-bold min-w-[2rem]">C-</div>
            <img src={fingerC} alt="Finger C" className="rounded-lg shadow-md w-full object-cover" />
          </div>
        </div>

        <div className="w-full max-w-lg flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            True Accept Rate (TAR) @ FMR = 0.1%
          </h3>
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-gray-700">
              <thead>
                <tr>
                  <th className="pb-3 text-sm font-semibold">Fused Fingers</th>
                  <th className="pb-3 text-sm font-semibold">Age at Enrollment</th>
                  <th className="pb-3 text-sm font-semibold">TAR (%)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { fingers: 1, age: "0–3 days", tar: "77%" },
                  { fingers: 1, age: "≥ 4 days", tar: "96%" },
                  { fingers: 2, age: "0–3 days", tar: "87%" },
                  { fingers: 2, age: "≥ 4 days", tar: "98%" },
                  { fingers: 4, age: "0–3 days", tar: "92%" },
                  { fingers: 4, age: "≥ 4 days", tar: "99%" },
                  { fingers: 10, age: "0–3 days", tar: "97%" },
                  { fingers: 10, age: "≥ 4 days", tar: "100%" },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                    <td className="py-2 text-sm font-medium">{row.fingers}</td>
                    <td className="py-2 text-sm">{row.age}</td>
                    <td className="py-2 text-sm font-semibold">{row.tar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
