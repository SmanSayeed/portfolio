"use client";
import { navItems } from "@/app/helpers/constants/navItems";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function Header({}: Props) {
  const [show, setShow] = useState(false);
  const openMenu = () => {};
  return (
    <>
      <div className="header">
        <div className="navbar">
          {navItems.map((item: any, index: any) => 
         
            <React.Fragment key={index}>
              <Link className="link" href={item.link}>
                {item.name}
              </Link>
            </React.Fragment>
          )}
          {/* <Link className="link" href="/">
            Home
          </Link>

          <Link className="link" href="/">
            Portfolio
          </Link>

          <Link className="link" href="/">
            Personal Details
          </Link>

          <Link className="link" href="/">
            Contact
          </Link> */}
        </div>
      </div>

      <div className="header-mobile">
        <button onClick={()=>setShow(!show)}>Menu</button>
        <button>Details</button>
      </div>

  {show && <div className="navbar-mobile">
        <div className="nav-header">
          <div className="">
           
          </div>
          <div className="font-bold" onClick={()=>setShow(!show)}>
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
       
      </div>}
    </>
  );
}
