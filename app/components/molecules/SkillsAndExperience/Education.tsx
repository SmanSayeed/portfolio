import Title from "../../atoms/Title/Title";
import ExperienceTree from "../ExperienceTree/ExperienceTree";

type Props = {};

import { educationData } from "@/app/helpers/constants/educationData";

export default function Education({}: Props) {
  const style = `w-[48%] md:w-[20%] my-2`;
  return (
    <>
      <div className="my-10">
        <Title text={"Education"} />
      </div>

      <ExperienceTree data={educationData} />

      {/* </div> */}

      {/* <div className="flex justify-between items-start flex-wrap">
        <div className={`${style}`}>
          <ExperienceCard
            title="Software Engineer"
            year={"2021-Present"}
            companyName={"BJIT ltd"}
          />
        </div>

        <div className={`${style}`}>
          <ExperienceCard
            title="Web Developer"
            year={"2020-2021"}
            companyName={"Essential Infotech ltd"}
          />
        </div>

        <div className={`${style}`}>
          <ExperienceCard
            title="Web Developer"
            year={"2019-2020"}
            companyName={"Mensa Digiworld"}
          />
        </div>

        <div className={`${style}`}>
          <ExperienceCard
            title="Web Developer"
            year={"2018-2019"}
            companyName={"IPIT Ltd"}
          />
        </div>
      </div> */}
    </>
  );
}
