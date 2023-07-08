"use client";
import React, { useState } from "react";
import Typography from "../../Atoms/Typography/Typography";
import TabButton from "../../Atoms/TabButton/TabButton";
import ExperienceCard from "../../Atoms/Card/ExperienceCard";
import Experience from "../SkillsAndExperience/Experience";
import Education from "../SkillsAndExperience/Education";
import Projects from "./Projects";
import Services from "./Services";


type Props = {};

export default function ProjectsAndServices({}: Props) {
  const [tab, setTab] = useState({
    left: true,
    right: false,
  });

  const handleTab = (nextTab: String) => {
    if (nextTab == "left") {
      setTab({
        left: true,
        right: false,
      });
    }
    if (nextTab == "right") {
      setTab({
        left: false,
        right: true,
      });
    }
  };

  return (
    <>
      <div className="px-[5%] pt-[20px] min-h-[60vh] bg-gray-200">
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:justify-between md:items-center">
          <div className="w-full">
            <Typography
              text="Projects And Services"
              type="title"             
            />
          </div>

          <div className="">
            <TabButton
              leftText={"Projects"}
              rightText={"Services"}
              handleTab={handleTab}
              currentTab={tab.left ? "Projects" : "Services"}
            />
          </div>
        </div>

        <div className="mt-5  w-full ">
          {tab.left ? (
            <>
           <Projects/>
        
            
            </>
          ) : (
            <>
                 <Services/>
            </>
          )}
        </div>
      </div>
    </>
  );
}
