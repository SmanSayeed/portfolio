import ExperienceCard from "../../atoms/Card/ExperienceCardComponent";
import Title from "../../atoms/Title/Title";

type Props = {};

export default function Experience({}: Props) {
  const style = `w-[48%] md:w-[20%] my-2`;
  return (
    <>
      <div className="my-10">
        <Title text={"Job Experience"} />
      </div>

      <div className="flex items-center justify-center flex-col my-4 w-full mx-auto h-auto relative">
        <div className="h-[100%] w-[2px] bg-white absolute left-[50%]"></div>
        <div className="flex items-center my-4  w-full md:w-[500px]  mx-auto h-auto relative">
          <div className="absolute h-[30px] w-[30px] border-2 border-white rounded-full left-[46%] md:left-[47.5%] bg-slate-900"></div>
          <div className="w-10 h-10 rounded-md bg-red-500 mx-2"></div>
          <div className="flex-1 h-px bg-white"></div>
          <div className="w-20 h-20 rounded-md bg-blue-500 mx-2"></div>
        </div>

        
      </div>

      <div className="flex justify-between items-start flex-wrap">
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
      </div>
    </>
  );
}
