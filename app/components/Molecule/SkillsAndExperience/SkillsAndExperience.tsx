"use client";
import React, { useState } from "react";
import Typography from "../../Atoms/Typography/Typography";
import TabButton from "../../Atoms/TabButton/TabButton";
import ExperienceCard from "../../Atoms/Card/ExperienceCard";

type Props = {};

export default function SkillsAndExperience({}: Props) {
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
      <div className="px-[5%] pt-[20px] min-h-[60vh]">
        <div className="w-full flex justify-between items-center">
          <div className="">
            <Typography
              text="Education And Experience"
              type="title"
              className="w-full flex justify-center items-center"
            />
          </div>

          <div className="]">
            <TabButton
              leftText={"Experience"}
              rightText={"Education"}
              handleTab={handleTab}
              currentTab={tab.left ? "experience" : "education"}
            />
          </div>
        </div>

        <div className="mt-5  w-full ">
          {tab.left ? (
            <>
           
                <div className="my-3" >
                    <Typography text="Experience" type="title"   className="w-full flex justify-center items-center text-[25px]" />
                </div>
                
              <div className="flex justify-between items-center flex-wrap">
                
                   <div className="w-[20%] my-1">
                   <ExperienceCard title="Software Engineer" year={"2021-Present"} companyName={"BJIT ltd"} />
                  </div>
               
                  <div className="w-[20%] my-1">
                  <ExperienceCard title="Web Developer" year={"2020-2021"} companyName={"Essential Infotech ltd"} />
                  </div>

                  <div className="w-[20%] my-1">
                    
                  <ExperienceCard title="Web Developer" year={"2019-2020"} companyName={"Mensa Digiworld"} />
                    
                    </div>

                    <div className="w-[20%] my-1">
                    <ExperienceCard title="Web Developer" year={"2018-2021"} companyName={"IPIT Ltd"} />
         
            
                    </div>

                
             
                 

                  

              </div>
        
            
            </>
          ) : (
            <>
              <div className="flex justify-center items-center text-blue-500">
                Education
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
