"use client";
import { useState } from "react";

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

  const [leftTextColor, setLeftTextColor] = useState("text-gray-300");
  const [rightTextColor, setRightTextColor] = useState("text-gray-300");

  const leftActive = `bg-slate-600  border-r-2 `;

  const rightActive = `bg-slate-600  border-l-2 `;

  const leftClass = `flex text-sm text-bolder ${leftTextColor} font-[800] justify-center items-center px-5 py-2  cursor-pointer w-[50%] uppercase rounded-md ${
    selected.left && leftActive
  }`;
  const rightClass = `flex text-sm text-bolder  ${rightTextColor}  font-[800] justify-center items-center px-5 py-2 cursor-pointer w-[50%] uppercase rounded-md ${
    selected.right && rightActive
  }`;

  const changeTab = (nextTab: string) => {
    if (nextTab == "right") {
      setSelected({
        left: false,
        right: true,
      });
      setRightTextColor("text-green-300");
      setLeftTextColor("text-gray-300");
    }
    if (nextTab == "left") {
      setSelected({
        left: true,
        right: false,
      });
      setRightTextColor("text-gray-300");
      setLeftTextColor("text-green-300");
    }
    handleTab(nextTab);
  };
  return (
    <>
      <div className=" w-[300px] flex justify-center items-center border-[2px] border-slate-200 rounded-md bg-white">
        <div className={`${leftClass}`} onClick={() => changeTab("left")}>
          {leftText}
        </div>
        <div className={`${rightClass}`} onClick={() => changeTab("right")}>
          {rightText}
        </div>
      </div>
    </>
  );
}
