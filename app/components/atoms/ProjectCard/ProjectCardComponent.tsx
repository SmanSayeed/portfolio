"use client";
import Link from "next/link";
import { useState } from "react";
import { FiGithub, FiGlobe } from "react-icons/fi";
import Modal from "../Modal/Modal";
import ScrollingImage from "../ScrollingImage/ScrollingImage";

type Props = {
  title: String;
  year: String;
  about: String;
  link: "";
  linkTitle: String;
  github: "";
  details: any;
  tech: any;
  image: any;
  video: any;
  className?: String;
  images: any;
};

export default function ProjectCard({
  title,
  year,
  className,
  about,
  link,
  linkTitle,
  github,
  details,
  tech,
  image,
  images,
  video,
}: Props) {
  const [modalImage, setModalImage] = useState(image);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const setImage = (img: string) => {
    setModalImage(img);
  };

  return (
    <>
      <div
        className={`flex flex-col justify-start items-center bg-none border-[5px] border-slate-700 px-3 py-3 rounded-md ${className} shadow-lg min-h-[450px]`}
        onClick={openModal}
      >
        <div className="h-[200px] w-full">
          <ScrollingImage image={image} />
        </div>

        <div className="w-full flex justify-center items-start text-center mt-2 border-b border-gray-400 py-2">
          <p className={`text-[14] md:text-[20px] font-[700]`}>{title}</p>
        </div>

        <div className="w-full mt-2 flex flex-col p-1">
          <div className="flex flex-row  justify-between items-end">
            <p className="text-white font-extrabold">{year}</p>
            <div className="flex gap-2 justify-between">
              {github && (
                <Link
                  target="_blank"
                  href={github}
                  className="flex gap-1 justify-center items-center"
                >
                  <FiGithub />
                  <p>Github</p>
                </Link>
              )}
              {link && (
                <Link
                  target="_blank"
                  href={link}
                  className="flex gap-1 justify-center items-center"
                >
                  <FiGlobe /> <p>Live</p>
                </Link>
              )}
            </div>
          </div>

          <div className="flex gap-1 my-2">
            {tech &&
              tech.length > 0 &&
              tech.map((t: any, i: any) => (
                <div
                  key={i}
                  className="flex justify-center items-center p-1 text-[10px] bg-slate-900 text-green-500 rounded-lg border-[1px] border-green-500 font-extrabold"
                >
                  {t}
                </div>
              ))}
          </div>

          <div className="text-slate-900 w-full flex justify-center items-center uppercase font-extrabold mt-3 bg-green-300 rounded-md ">
            Details
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <div className="">
            <div className="h-[200px] md:h-[300px] w-full">
              <ScrollingImage image={modalImage} />
            </div>
            <div className="flex gap-2 my-3 ">
              <div
                onClick={() => setImage(image)}
                className="h-[100px] w-[100px] shadow border border-white rounded-lg"
              >
                <ScrollingImage image={image} scroll={false} />
              </div>

              {images &&
                images.length > 0 &&
                images.map((img: any, index: any) => (
                  <div
                    onClick={() => setImage(img)}
                    key={index}
                    className="h-[100px] w-[100px] shadow border border-white rounded-lg"
                  >
                    <ScrollingImage image={img} scroll={false} />
                  </div>
                ))}
            </div>

            <div className="w-full mt-2 flex flex-col p-1">
              <div className="flex flex-row  justify-between items-end">
                <p className="text-white font-extrabold">{year}</p>
                <div className="flex gap-2 justify-between">
                  {github && (
                    <Link
                      target="_blank"
                      href={github}
                      className="flex gap-1 justify-center items-center"
                    >
                      <FiGithub />
                      <p>Github</p>
                    </Link>
                  )}
                  {link && (
                    <Link
                      target="_blank"
                      href={link}
                      className="flex gap-1 justify-center items-center"
                    >
                      <FiGlobe /> <p>Live</p>
                    </Link>
                  )}
                </div>
              </div>

              <div className="flex gap-1 my-2">
                {tech &&
                  tech.length > 0 &&
                  tech.map((t: any, i: any) => (
                    <div
                      key={i}
                      className="flex justify-center items-center p-1 text-[10px] bg-slate-900 text-green-500 rounded-lg border-[1px] border-green-500 font-extrabold"
                    >
                      {t}
                    </div>
                  ))}
              </div>
            </div>

            <div className="overflow-y-auto h-[30vh]">
              <div className="my-2 text-[15px] font-light">{details}</div>
              <ul className="list-disc list-outside ml-[15px]">
                {details &&
                  details.length > 0 &&
                  details.map((d: any, i: any) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          </div>
          {/* You can add any other components or content here */}
        </Modal>
      )}
    </>
  );
}
