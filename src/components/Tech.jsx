import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";


const Tech = () => {
  return (
    <div>
      <h2 className="text-center  text-white text-[24px] font-bold">Learning these technologies</h2>

      <div className="flex flex-row flex-wrap justify-center mt-10 gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");