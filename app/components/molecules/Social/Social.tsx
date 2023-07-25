import Link from 'next/link'
import React from 'react'
import { FiGithub,FiFacebook,FiLinkedin,FiTwitter } from "react-icons/fi";
import { ThemeSwitcher } from '../../ThemeSwitcher/ThemeSwitcher';
type Props = {}

export default function Social({}: Props) {
  return (
    <>
    <div className="social">
         
    <Link className="social-icons" href="https://github.com/smansayeed" target="_blank">
      <FiGithub fill="gray"/>
    </Link>

    <Link className="social-icons" href="https://www.linkedin.com/in/saadmansayeed/" target="_blank">
      <FiLinkedin fill="skyblue"/>
    </Link>

    <Link className="social-icons" href="https://twitter.com/Sman_sayeed" target="_blank">
      <FiTwitter fill="orange" />
    </Link>

    <Link className="social-icons" href="https://facebook.com/saadman2" target="_blank">
      <FiFacebook fill="blue"/>
    </Link>
 
  </div>

    
    </>
  )
}