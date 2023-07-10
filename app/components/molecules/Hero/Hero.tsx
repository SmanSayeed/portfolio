import Image from "next/image";
import Button from "../../atoms/Button/Button";

type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <div className="bg-gray-200 w-full h-auto  px-[10%] overflow-hidden ">

      <div className="text-lg text-violet-950 font-extrabold w-full text-center my-5 bg-yellow-500 py-5">
        <p className="text-lg text-violet-950 font-extrabold w-full text-center my-5">Wait ! Saadman Sayeed is working on this site.</p>
        <p className="text-4xl text-violet-800">Under Construction</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center">
       
        <div className="w-full md:w-[50%] flex flex-col justify-center md:justify-start items-center md:items-start my-[10%]">
          <p className="text-[30px] text-black font-extrabold ">Saadman Sayeed</p>
          <p className="text-[20px] text-black text-center md:text-left w-full ">Fullstack web developer</p>
        
         
          <div className="flex gap-3 mt-5">
          <Button>
            Download CV
          </Button>
       
          </div>
        
        </div>
        <div className="w-full md:w-[50%] flex justify-center items-center my-[3%]">
          <div className="h-[200px] md:h-[300px] w-[180px] md:w-[250px] border-[3px] border-gray-300 rounded-lg overflow-hidden rounded-sm">
          <Image
            src="/images/hero/saad-hd.png"
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
