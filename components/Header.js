import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";
import LangToggler from "./LangToggler";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between py-8 lg:flex-row gap-y-6">
          <Link href="/">
            <Image src="/logo.svg" width={280} height={68} alt="" priority />
          </Link>
          <div className="flex items-center gap-8">
            <LangToggler />
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
