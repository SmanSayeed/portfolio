import TextUnderline from "../TextUnderline/TextUnderline";

type Props = {
  text: String;
  textStyle?: "string";
};

export default function Title({ text, textStyle }: Props) {
  let style = ``;

  return (
    <>
      <div className="h-[20vh] w-full flex flex-col justify-center items-center text-[50px] font-extrabold text-white uppercase">
        <div className="">{text}</div>
        <TextUnderline width={"200px"} />
      </div>
    </>
  );
}
