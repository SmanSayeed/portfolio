"use client";
import React, { useState } from "react";
import TabButton from "../../ATOM/TabButton/TabButtonComponent";
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
          
               <p className="section-title">
               Projects And Services
                    </p>
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
