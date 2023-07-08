import Image from "next/image";
import Button from "../../Atoms/Button/Button";
import Social from "../Social/Social";

type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <div className="bg-gray-200 w-full h-auto md:h-[60vh] px-[10%] overflow-hidden ">
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
