"use client";
import { navItems } from "@/app/helpers/constants/navItems";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Social from "../Social/Social";
import { ThemeSwitcher } from "../../ThemeSwitcher/ThemeSwitcher";
type Props = {};

export default function Header({}: Props) {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const openMenu = () => {};
  const openModal = () => {};
  return (
    <>
      <div className="h-[80px] flex justify-center  items-center fixed w-full shadow-lg bg-white dark:bg-gray-600 ">
    <div className=" left-20 top-20 z-40" >
    <ThemeSwitcher />
    </div>
        <div className="flex justify-center items-center gap-10 font-sm text-black dark:text-white">
      
          {navItems.map((item: any, index: any) => (
            <React.Fragment key={index}>
              <Link className="uppercase hover:font-extrabold" href={item.link}>
                {item.name}
              </Link>
            </React.Fragment>
          ))}
        
        </div>
        <Social />
      </div>

      <div className="header-mobile">
        <Social />
        <button onClick={() => setShow(!show)}>
          {/* <BiMenu style={{ color: "white" }} className="menu-icon" 
          /> */}
          <FiMenu className="menu-icon" />
        </button>
        {/* <button onClick={()=>openModal()}>Details</button> */}
      </div>

      {/* {show && */}
      {/* ( */}
      <motion.div
        className="navbar-mobile"
        initial={{ opacity: 0, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        animate={show ? "open" : "closed"}
        variants={{
          open: { opacity: 1, scale: 1, x: 0 },
          closed: { opacity: 0, scale: 1, x: "-100%" },
        }}
      >
        <div className="nav-header">
          <div className=""></div>
          <div className="close" onClick={() => setShow(!show)}>
            x
          </div>
        </div>
        <div className="navlink-container">
          <Link className="link-mobile" href="/">
            Home
          </Link>

          <Link className="link-mobile" href="/">
            Portfolio
          </Link>

          <Link className="link-mobile" href="/">
            Personal Details
          </Link>

          <Link className="link-mobile" href="/">
            Contact
          </Link>
        </div>
      </motion.div>
      {/* ) */}
      {/* } */}
    </>
  );
}