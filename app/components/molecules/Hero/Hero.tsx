import Image from "next/image";
import Button from "../../atoms/Button/Button";

type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <div className="bg-slate-400 w-full h-auto  px-[10%] overflow-hidden background dark:bg-gray-600">
        {/* <div className="text-lg text-violet-950 font-extrabold w-full text-center my-5 bg-yellow-500 py-5">
          <p className="text-lg text-violet-950 font-extrabold w-full text-center my-5">
            Wait ! Saadman Sayeed is working on this site.
          </p>
          <p className="text-4xl text-violet-800">Under Construction</p>
        </div> */}
        <div className="flex flex-col md:flex-row justify-center md:justify-center items-center py-[5%]">
          <div className="w-full rounded-lg md:w-[50%] flex flex-col justify-center items-center  md:justify-start md:items-end  text-white ">
            <div className="w-full md:w-[400px] p-0 md:p-3 my-2 md:my-0 rounded-lg flex justify-center items-center flex-col md:justify-start md:items-start">
              <p className="text-[15px] md:text-[20px] font-extrabold text-yellow-100">
                Meet
              </p>
              <span className="text-[20px] md:text-[25px] font-extrabold text-white ">
                Saadman Sayeed
              </span>

              <p className="text-[40px] font-extrabold md:text-[50px] text-white ">
                Fullstack
              </p>
              <p className="text-[40px] font-extrabold md:text-[50px] text-white ">
                Web Developer
              </p>

              <div className="flex gap-3 mt-5">
                <Button>RESUME</Button>
              </div>
            </div>
          </div>
          <div className="relative w-full md:w-[50%] flex justify-start items-center ">
            <div className="absolute  bg-white rounded-2xl top-[60%] left-[-10%] md:top-[60%] md:left-[-1%]">
              <p className="font-extrabold text-[20px] py-1 px-1">4+ Yr Exp</p>
            </div>
            <div className="ml-0 md:ml-[5%] h-[300px] md:h-[300px] w-[300px] md:w-[300px] border-[3px] border-gray-100 dark:border-white rounded-lg overflow-hidden ">
              <Image
                src="/images/hero/saadman2.png"
                height={1000}
                width={1000}
                alt="hero"
                className="w-[110%] h-[110%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
