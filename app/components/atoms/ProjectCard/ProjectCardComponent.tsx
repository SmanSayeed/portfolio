"use client";
import Link from "next/link";
import { useState } from "react";
import { FiGithub, FiGlobe } from "react-icons/fi";
import Modal from "../Modal/Modal";

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
  video,
}: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        className={`flex flex-col justify-start items-center bg-none border-[5px] border-slate-700 px-3 py-3 rounded-md ${className} shadow-lg min-h-[400px]`}
        onClick={handleOpenModal}
      >
        <div className="h-[200px] w-full bg-gray-400 rounded-md"></div>

        <div className="w-full flex justify-center items-start text-center mt-2 border-b border-gray-400 py-2">
          <p className={`text-[14] md:text-[20px] font-[700]`}>{title}</p>
        </div>

        <div className="w-full mt-2 flex flex-col p-1">
          <div className="flex flex-row  justify-between items-end">
            <p className="text-white font-extrabold">{year}</p>
            <div className="flex gap-2 justify-between">
              {link && (
                <Link
                  target="_blank"
                  href={link}
                  className="flex gap-1 justify-center items-center"
                >
                  <FiGithub />
                  <p>Github</p>
                </Link>
              )}
              {github && (
                <Link
                  target="_blank"
                  href={github}
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
      </div>

      <div>
        <Modal isOpen={modalOpen} onClose={handleCloseModal}>
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <div className="">
            <div className="h-[200px] w-full bg-gray-400 rounded-md"></div>

            <div className="w-full mt-2 flex flex-col p-1">
              <div className="flex flex-row  justify-between items-end">
                <p className="text-white font-extrabold">{year}</p>
                <div className="flex gap-2 justify-between">
                  {link && (
                    <Link
                      target="_blank"
                      href={link}
                      className="flex gap-1 justify-center items-center"
                    >
                      <FiGithub />
                      <p>Github</p>
                    </Link>
                  )}
                  {github && (
                    <Link
                      target="_blank"
                      href={github}
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
      </div>
    </>
  );
}
