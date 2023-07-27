"use client";
import React, { useState } from "react";

type Props = {
  leftText: String;
  rightText: String;
  className?: String;
  handleTab: Function;
  currentTab?: String;
};

export default function TabButton({
  leftText,
  rightText,
  className,
  handleTab,
  currentTab,
}: Props) {
  const [selected, setSelected] = useState({
    left: true,
    right: false,
  });

  
  const leftActive = `bg-green-300  border-r-2 `;
  
  const rightActive = `bg-green-300  border-l-2 `;

  const leftClass = `flex text-sm text-bolder text-green-900 font-[800] justify-center items-center px-5 py-2  cursor-pointer w-[50%] uppercase ${selected.left && leftActive}`;
  const rightClass = `flex text-sm text-bolder text-green-900 font-[800] justify-center items-center px-5 py-2 cursor-pointer w-[50%] uppercase  ${selected.right && rightActive}`;

  const changeTab = (nextTab: string) => {
    if (nextTab == "right") {
      setSelected({
        left: false,
        right: true,
      });
    }
    if (nextTab == "left") {
      setSelected({
        left: true,
        right: false,
      });
    }
    handleTab(nextTab);
  };
  return (
    <>
      <div className=" w-[300px] flex justify-center items-center border-[2px] border-green-300 rounded-md bg-white">
        <div
          className={`${leftClass} `}
          onClick={() => changeTab("left")}
        >
          {leftText}
        </div>
        <div
          className={`${rightClass}`}
          onClick={() => changeTab("right")}
        >
          {rightText}
        </div>
      </div>
    </>
  );
}
