import { projectData } from "@/app/helpers/constants/projectData";
import React from "react";
import ProjectCard from "../../atoms/ProjectCard/ProjectCardComponent";
import Title from "../../atoms/Title/Title";
type Props = {};

export default function Projects({}: Props) {
  const style = `p-5 md:p-0 w-full md:w-[23%] my-0 md:my-2`;
  return (
    <div className="px-0 md:px-[10%] mb-0 md:mb-[200px]">
      <div className="">
        <Title text={"Projects"} />
      </div>

      <div className="flex flex-col md:flex-row justify-start items-start flex-wrap gap-2 md:gap-10">
        {projectData.map((data: any, index: any) => {
          return (
            <React.Fragment key={index}>
              <div className={`${style}`}>
                <ProjectCard
                  title={data.title}
                  year={data.year}
                  about={data.about}
                  details={data.details}
                  image={data.image}
                  video={data.video}
                  tech={data.tech}
                  github={data.github}
                  link={data.link}
                  linkTitle={data.linkTitle}
                />
              </div>
            </React.Fragment>
          );
        })}

        {/* <div className={`${style}`}>
          <ProjectCard
            title="Fitlab"
            year={"2020-2021"}
            companyName={"Essential Infotech ltd"}
          />
        </div>

        <div className={`${style}`}>
          <ProjectCard
            title="Robotics"
            year={"2019-2020"}
            companyName={"Mensa Digiworld"}
          />
        </div>

        <div className={`${style}`}>
          <ProjectCard
            title="AMR"
            year={"2018-2019"}
            companyName={"IPIT Ltd"}
          />
        </div> */}
      </div>
    </div>
  );
}
