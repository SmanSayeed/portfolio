type Props = {
  width: any;
};

const TextUnderline = ({ width }: Props) => {
  const ballAnimationDuration = 3; // Adjust animation duration (in seconds)

  return (
    <div
      className={`relative h-[10px] w-[200px] bg-transparentGreen overflow-hidden rounded-lg flex justify-center items-center`}
    >
      {/* The neon color blurred ball */}
      <div
        className={`ball absolute h-[5px] w-[5px] rounded-full bg-neonBall animate-ballAnimation`}
        style={{ animationDuration: `${ballAnimationDuration}s` }}
      />
    </div>
  );
};

export default TextUnderline;
