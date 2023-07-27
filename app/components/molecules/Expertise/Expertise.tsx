"use client";
import { useState } from "react";
import {
  SiBootstrap,
  SiDocker,
  SiGithub,
  SiGraphql,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRedmine,
  SiSass,
  SiTailwindcss,
  SiTrello,
  SiUbuntu,
} from "react-icons/si";
import Title from "../../atoms/Title/Title";
type Props = {};

const cardStyle = `min-h-[420px] w-full md:w-[31%] flex flex-col  justify-between items-between border border-gray-700 bg-gray-800 px-10 py-5 rounded-lg shadhow-lg `;
const listStyle = `list-disc list-outside flex flex-col gap-2`;
const titleStyle = `text-[20px] text-white font-[900] mb-5`;
const descStyle = `text-[15px] text-white text-justify justify`;
const iconContainer = "flex gap-5 fill-green-300 flex-wrap";
const iconStyle = `fill-green-300 h-[30px] w-[30px] gap-5 mt-5`;

export default function Expertise({}: Props) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="px-[10%] ">
      <Title text="Expertise" />
      <div className="my-5 flex flex-col md:flex-row px-2 justify-between items-start gap-5 ">
        <div className={cardStyle}>
          <div className={titleStyle}>Backend</div>
          <div className={descStyle}>
            <ul className={listStyle}>
              <li>
                Wrote clean and scalable code with Node.js, Nest js, PHP,
                Laravel
              </li>
              <li>
                Integrated Docker and CI/CD with Jenkins and github actions
              </li>
              <li>Deployed in Ubuntu instance of AWS EC2 </li>
              <li>Used SQL and NO-SQL Databases in different projects </li>
            </ul>
          </div>
          <div className={iconContainer}>
            <SiNodedotjs className={iconStyle} />
            <SiLaravel className={iconStyle} />
            <SiMongodb className={iconStyle} />
            <SiMysql className={iconStyle} />
            <SiDocker className={iconStyle} />
            <SiGraphql className={iconStyle} />
            <SiUbuntu className={iconStyle} />
          </div>
        </div>

        <div className={cardStyle}>
          <div className={titleStyle}>Frontend</div>
          <div className={descStyle}>
            <ul className={listStyle}>
              <li>
                Designed pixel perfect Single Page Application with Next.js,
                React.js, Typescript
              </li>
              <li>
                Have sound skills with Tailwind css, SCSS, Bootstrap, Material
                UI, Headless UI
              </li>
              <li>
                Experienced with Redux, Redux toolkit, Web Socket, GraphQL
              </li>
              <li>Can add animations with Framer-motion and more tools</li>
            </ul>
          </div>
          <div className={iconContainer}>
            <SiReact className={iconStyle} />
            <SiNextdotjs className={iconStyle} />
            <SiTailwindcss className={iconStyle} />
            <SiBootstrap className={iconStyle} />
            <SiSass className={iconStyle} />
          </div>
        </div>

        <div className={cardStyle}>
          <div className={titleStyle}>Project Management and Mentoring</div>
          <div className={descStyle}>
            <ul className={listStyle}>
              <li>Job experience with agile-scrum process, Git, Redmine etc</li>
              <li>
                Guided junior developers and interns to develop complex web
                application
              </li>
              <li>
                Skilled with writing Software Requirement Specification (SRS)
              </li>
              <li>
                Collaborated with clients and developers of various nations
              </li>
              <li>
                Trained more than 300 individuals web development and published
                several paid and free courses in Instructory and youtube
              </li>
            </ul>
          </div>
          <div className={iconContainer}>
            <SiGithub className={iconStyle} />
            <SiTrello className={iconStyle} />
            <SiRedmine className={iconStyle} />
            <SiPostman className={iconStyle} />
          </div>
        </div>
      </div>
    </div>
  );
}
