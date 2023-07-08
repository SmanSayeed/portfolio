"use client";
import React, { useState } from "react";
import Typography from "../../atoms/Typography/TypographyComponent";
import TabButton from "../../atoms/TabButton/TabButtonComponent";
import Experience from "./Experience";
import Education from "./Education";

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
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:justify-between md:items-center">
          <div className="w-full">
            <Typography
              text="Education And Experience"
              type="title"             
            />
          </div>

          <div className="">
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
           <Experience/>
        
            
            </>
          ) : (
            <>
                 <Education/>
            </>
          )}
        </div>
      </div>
    </>
  );
}
