"use client";
import { motion } from "framer-motion";
import Social from "../Social/Social";

type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <div className="w-full h-[90vh]  px-[10%] flex justify-center items-center ">
        {/* <div className="text-lg text-violet-950 font-extrabold w-full text-center my-5 bg-yellow-500 py-5">
          <p className="text-lg text-violet-950 font-extrabold w-full text-center my-5">
            Wait ! Saadman Sayeed is working on this site.
          </p>
          <p className="text-4xl text-violet-800">Under Construction</p>
        </div> */}
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center ">
          <div className="w-full rounded-lg md:w-[50%] flex flex-col justify-center items-center  md:justify-center md:items-center  text-white  ">
            <div className=" p-0 md:p-3 my-2 md:my-0 rounded-lg flex justify-center items-center flex-col md:justify-start md:items-start">
              <p className="text-[15px] md:text-[25px] font-extrabold text-white">
                Meet{" "}
                <span className=" font-extrabold text-yellow-100 ">
                  Saadman Sayeed
                </span>
              </p>

              <p className="text-[25px] md:text-[45px] font-extrabold">
                Full-Stack <span className="text-green-300">Web Developer</span>
              </p>
              <p className="text-[15px] md:text-[20px]">
                Full-stack web dev with clean code, animations, and innovation
                for interactive websites.
              </p>

              <div className="flex gap-3 mt-5">
                {/* <Button className="bg-green-300">RESUME</Button> */}

                <Social />
              </div>
            </div>
          </div>
          <div className=" w-full md:w-[50%] flex justify-center items-center ">
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
