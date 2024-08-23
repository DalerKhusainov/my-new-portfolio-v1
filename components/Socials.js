import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center text-lg gap-x-5">
      <Link href={""} className="transition-all duration-300 hover:text-accent">
        <RiYoutubeLine />
      </Link>
      <Link href={""} className="transition-all duration-300 hover:text-accent">
        <RiInstagramLine />
      </Link>
      <Link href={""} className="transition-all duration-300 hover:text-accent">
        <RiFacebookLine />
      </Link>
      <Link href={""} className="transition-all duration-300 hover:text-accent">
        <RiDribbbleLine />
      </Link>
      <Link href={""} className="transition-all duration-300 hover:text-accent">
        <RiBehanceLine />
      </Link>
      <Link href={""} className="transition-all duration-300 hover:text-accent">
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;
