import Image from "next/image";

type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <div className="hero">
        <div className="left">
          <p className="name">Saadman Sayeed</p>
          <p className="designation">Fullstack web developer</p>
        </div>
        {/* <div className="right">
          <div className="image-slider">
            <Image
              className="image"
              src={"/images/slider/saadman.png"}
              alt="image"
              height={100}
              width={100}
            />
          </div>
        </div> */}
      </div>
    </>
  );
}
