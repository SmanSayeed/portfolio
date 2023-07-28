import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
  image: string;
  scroll?: boolean;
  fullImage?: boolean;
};

export default function ScrollingImage({
  image,
  scroll = true,
  fullImage = false,
}: Props) {
  const imageRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const openFullImage = () => {
    setOpen(true);
  };
  const closeFullImage = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        className="h-[100%] w-full bg-none rounded-md relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={openFullImage}
      >
        <Image
          ref={imageRef}
          src={image}
          height={1000}
          width={1000}
          alt="image"
          className={`w-[100%] absolute top-0 ${scroll && "animate-scroll"} ${
            isHovered ? "animation-paused" : ""
          }`}
        />
      </div>
    </>
  );
}
