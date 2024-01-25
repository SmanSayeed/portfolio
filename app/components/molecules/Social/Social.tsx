import Link from "next/link";
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
type Props = {};

const iconStyle = `h-[30px] w-[30px] stroke-0`;

export default function Social({}: Props) {
  return (
    <>
      <div className="social">
        <Link
          className="social-icons"
          href="https://github.com/smansayeed"
          target="_blank"
        >
          <FiGithub fill="gray" className={iconStyle} />
        </Link>

        <Link
          className="social-icons"
          href="https://www.linkedin.com/in/saadman-sayeed/"
          target="_blank"
        >
          <FiLinkedin fill="skyblue" className={iconStyle} />
        </Link>

        <Link
          className="social-icons"
          href="https://twitter.com/Sman_sayeed"
          target="_blank"
        >
          <FiTwitter fill="orange" className={iconStyle} />
        </Link>

        <Link
          className="social-icons"
          href="https://facebook.com/saadman2"
          target="_blank"
        >
          <FiFacebook fill="blue" className={iconStyle} />
        </Link>
      </div>
    </>
  );
}
