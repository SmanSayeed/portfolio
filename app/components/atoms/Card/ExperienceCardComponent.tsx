import Image from "next/image";
import Link from "next/link";

type Props = {
  title: String;
  institute: String;
  details: any;
  logo: "";
  link: "";
  linkTitle: "";
};

export default function ExperienceCard({
  title,
  institute,
  details,
  logo,
  link,
  linkTitle,
}: Props) {
  return (
    <div>
      <div className="text-green-300 text-[20px]">{title}</div>
      <div className="text-white text-[18px]">{institute}</div>
      <Link
        target="_blank"
        href={link}
        className="flex gap-2 justify-start items-center text-white"
      >
        {logo && (
          <div className="w-[40px] h-[40px] my-2">
            
            <Image
              className="grayscale"
              src={logo}
              height={100}
              width={100}
              alt="logo"
            />
            
          </div>
        )}
        <div className="mb-[10px]">{linkTitle}</div>
      </Link>
      <ul className="text-gray-200 text-[15px] pt-[10px] list-disc list-outside ml-5">
        {details.length > 0 &&
          details.map((d: any, i: any) => {
            console.log("first", d);
            return (
              <li key={i} className="my-2">
                {d}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
