import React from "react";
import ExperienceCard from "../../atoms/Card/ExperienceCardComponent";

type Props = {
  data: any;
};

const yearStyle =
  "mb-5 md:mb-0 bg-gray-700 rounded-2xl flex justify-center items-center p-1 w-[50%]";

export default function ExperienceTree({ data }: Props) {
  return (
    <>
      <div className="flex items-center justify-center flex-col  w-full mx-auto h-auto relative">
        <div className="h-[100%] w-[5px] rounded-lg bg-slate-500 absolute left-[0%] md:left-[50%]"></div>

        {data.map((d: any, index: any) => {
          const { year, title, institute, details, logo, link, linkTitle } = d;
          return (
            <React.Fragment key={index}>
              <div className="hidden md:flex justify-center items-center my-4  w-full md:w-[80%] h-auto relative  ">
                <div className="order-1 w-[90%]  md:w-[40%] h-auto rounded-md mx-2 flex justify-end">
                  <div className={yearStyle}>{year}</div>
                </div>

                <div className="order-2 w-[10%]">
                  <div className="absolute h-[30px] w-[30px] border-[5px] border-slate-500 rounded-full circle bg-slate-900"></div>
                  <div className="h-[5px] bg-slate-500 rounded-lg"></div>
                </div>

                <div className="order-3 w-[40%] h-auto rounded-md  mx-2">
                  <ExperienceCard
                    title={title}
                    institute={institute}
                    details={details}
                    logo={logo}
                    link={link}
                    linkTitle={linkTitle}
                  />
                </div>
              </div>

              {/* Mobile view  */}

              <div className="flex md:hidden justify-start items-start my-4 h-auto relative  ">
                <div className="order-1 w-[20%]">
                  <div className="absolute h-[30px] w-[30px] border-[5px] border-slate-500 rounded-full circle bg-slate-900"></div>
                  <div className="h-[5px] bg-slate-500 rounded-lg"></div>
                </div>

                <div className="order-2 w-full h-auto rounded-md  mx-5 mt-[-10px]">
                  <div className=" w-full  h-auto rounded-md  flex justify-start">
                    <div className={yearStyle}>{year}</div>
                  </div>
                  <ExperienceCard
                    title={title}
                    institute={institute}
                    details={details}
                    logo={logo}
                    link={link}
                    linkTitle={linkTitle}
                  />
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
