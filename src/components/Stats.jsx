import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[90px] text-[90px] xs:leading-[90px] leading-[90px] text-gray-900">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[40px] text-[40px] xs:leading-[40px] leading-[40px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;