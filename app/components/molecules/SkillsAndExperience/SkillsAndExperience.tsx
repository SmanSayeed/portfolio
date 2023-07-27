"use client";
import { useState } from "react";
import TabButton from "../../atoms/TabButton/TabButtonComponent";
import Education from "./Education";
import Experience from "./Experience";

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
      <div className="px-[5%] pt-[20px] min-h-[70vh] my-[70px]">
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:justify-between md:items-center">
          <div className="w-full">
            <p className={`section-title`}>Education And Experience</p>
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
              <Experience />
            </>
          ) : (
            <>
              <Education />
            </>
          )}
        </div>
      </div>
    </>
  );
}
