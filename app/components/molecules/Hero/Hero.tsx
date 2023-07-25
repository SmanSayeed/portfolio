"use client";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";
import Social from "../Social/Social";
type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <div className="w-full py-[10%]  px-[10%] flex justify-center items-center ">
        {/* <div className="text-lg text-violet-950 font-extrabold w-full text-center my-5 bg-yellow-500 py-5">
          <p className="text-lg text-violet-950 font-extrabold w-full text-center my-5">
            Wait ! Saadman Sayeed is working on this site.
          </p>
          <p className="text-4xl text-violet-800">Under Construction</p>
        </div> */}
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center ">
          <div className="w-full rounded-lg md:w-[50%] flex flex-col justify-start md:justify-center items-center md:items-center  text-white  ">
            <div className=" p-0 md:p-3 my-2 md:my-0 rounded-lg flex justify-center items-center flex-col md:justify-start md:items-start">
              <p className="text-[35px] md:text-[35px] font-extrabold text-white">
                Saadman <span className="text-green-300">Sayeed</span>
              </p>
              <p className="text-[20px]">Software Engineer</p>

              <ul className="flex justify-start items-start flex-col gap-2 text-[20px] md:text-[50px] font-extrabold my-10">
                <li className="flex justify-center items-center gap-2">
                  <FaLaptopCode className="fill-green-300" />
                  Full-stack Web Developer
                </li>
                <li className="flex justify-center items-center gap-2">
                  <FaChalkboardTeacher className="fill-green-300" />
                  Mentor
                </li>
              </ul>
              <p className="text-[15px] md:text-[20px]">
                Write clean code, animations, and innovate interactive websites.
                Have expertise in mentoring and project management
              </p>

              <div className="flex gap-3 mt-5">
                {/* <Button className="bg-green-300">RESUME</Button> */}

                <Social />
              </div>
            </div>
          </div>
          <div className=" w-full md:w-[50%] mt-[50px] md:mt-0 flex justify-center items-center ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                borderRadius: ["10%", "10%", "10%", "10%", "10%"],
                x: "0rem",
              }}
              whileHover={
                {
                  // backgroundColor:""
                }
              }
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative ml-0 md:ml-[10%] h-[300px] md:h-[500px] w-[300px] md:w-[500px] border-[3px] border-gray-100 dark:border-white rounded-lg  bg-image1 "
            >
              <div className="absolute  bg-white rounded-2xl top-[60%] left-[-10%] md:top-[60%] md:left-[-10%] ">
                <p className="font-extrabold text-[20px] py-1 px-1">
                  4+ Yr Exp
                </p>
              </div>
              {/* <Image
                src="/images/hero/saadman2.png"
                height={1000}
                width={1000}
                alt="hero"
                className="w-[110%] h-[110%]"
              /> */}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
