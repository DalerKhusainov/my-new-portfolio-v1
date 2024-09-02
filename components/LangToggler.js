import { useState, useCallback, useContext } from "react";
import Image from "next/image";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { LangContext } from "../context/LangContext";

export default function LangToggler() {
  const [isOpen, setIsOpen] = useState(false);

  const langContext = useContext(LangContext);
  if (!langContext) return;
  const { langValue, setLangValue } = langContext;

  function onEnglishLangHandler() {
    setIsOpen(false);
    setLangValue("eng");
  }

  function onRussianLangHandler() {
    setIsOpen(false);
    setLangValue("rus");
  }

  return (
    <div className="relative">
      <div
        className="cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {langValue === "eng" ? (
          <div className="flex items-center gap-2">
            <Image
              src="/great-britain-flag.png"
              width={20}
              height={20}
              alt="Great Britain flag"
            />{" "}
            {isOpen ? <SlArrowDown /> : <SlArrowUp />}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Image
              src="/russian-flag.png"
              width={20}
              height={20}
              alt="Russian flag"
            />{" "}
            {isOpen ? <SlArrowDown /> : <SlArrowUp />}
          </div>
        )}{" "}
      </div>
      <div
        className={`${
          !isOpen ? "hidden" : "flex"
        } absolute left-0 bg-primary/75 -bottom-[88px] flex-col items-center justify-center h-[80px] w-[130px] rounded`}
      >
        <div
          className="flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-accent"
          onClick={onEnglishLangHandler}
        >
          <span>English</span>{" "}
          <Image
            src="/great-britain-flag.png"
            width={20}
            height={20}
            alt="Great Britain flag"
          />
        </div>
        <div
          className="flex items-center justify-between gap-2 transition-all duration-300 cursor-pointer hover:text-accent"
          onClick={onRussianLangHandler}
        >
          <span>Russian</span>{" "}
          <Image
            src="/russian-flag.png"
            width={20}
            height={20}
            alt="Russian flag"
          />
        </div>
      </div>
    </div>
  );
}
