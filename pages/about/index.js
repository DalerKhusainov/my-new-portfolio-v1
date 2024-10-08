/* eslint-disable react/jsx-key */
import { useState, useContext } from "react";
// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiTypescript,
  SiTailwindcss,
  SiWebflow,
  SiSass,
} from "react-icons/si";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { getLangData } from "../../utils/helpers";
import CountUp from "react-countup";
import { LangContext } from "../../context/LangContext";

//  data in english
const aboutDataEng = [
  {
    title: "Skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <SiWebflow />,
          <SiTypescript />,
          <SiTailwindcss />,
          <SiSass />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "Certificates",
    info: [
      {
        title: "TailwindCSS Advanced Course - Udemy Certificate of Completion",
        stage: "2024",
      },
      {
        title:
          "Figma UI/UX Design Essential and Advanced Courses - Udemy Certificate of Completion",
        stage: "2024",
      },
      {
        title:
          "The Ultimate ReactJS, Redux and NextJS Course - Udemy Certificate of Completion",
        stage: "2024",
      },
      {
        title:
          "ReactJS, React Router & TypeScript - ProSkills Ilmhona Bootcamp",
        stage: "2023",
      },
      {
        title:
          "The Complete JavaScript Course - Udemy Certificate of Completion",
        stage: "2021",
      },
      {
        title: "Advanced CSS and Sass - Udemy Certificate of Completion",
        stage: "2021",
      },
    ],
  },
];

//  data in russian
const aboutDataRus = [
  {
    title: "Навыки",
    info: [
      {
        title: "Веб Разработка",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <SiWebflow />,
          <SiTypescript />,
          <SiTailwindcss />,
          <SiSass />,
        ],
      },
      {
        title: "UI/UX Дезайнер",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "Сертификаты",
    info: [
      {
        title: "TailwindCSS Advanced Course - Udemy Certificate of Completion",
        stage: "2024",
      },
      {
        title:
          "Figma UI/UX Design Essential and Advanced Courses - Udemy Certificate of Completion",
        stage: "2024",
      },
      {
        title:
          "The Ultimate ReactJS, Redux and NextJS Course - Udemy Certificate of Completion",
        stage: "2024",
      },
      {
        title:
          "ReactJS, React Router & TypeScript - ProSkills Ilmhona Bootcamp",
        stage: "2023",
      },
      {
        title:
          "The Complete JavaScript Course - Udemy Certificate of Completion",
        stage: "2021",
      },
      {
        title: "Advanced CSS and Sass - Udemy Certificate of Completion",
        stage: "2021",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const now = new Date().getFullYear();
  const startCarrier = 2021;
  const yearsOfExperience = now - startCarrier;

  const langContext = useContext(LangContext);
  if (!langContext) return;
  const { langValue } = langContext;

  const aboutData = getLangData(langValue, aboutDataEng, aboutDataRus);

  return (
    <div className="h-full py-32 text-center bg-primary/30 xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container flex flex-col items-center h-full mx-auto xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex flex-col justify-center flex-1">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-10 h2 xl:mt-0"
          >
            {langValue === "eng" ? "Captivating" : "Захватывающие"}{" "}
            <span className="text-accent">
              {langValue === "eng" ? "stories" : "истории"}
            </span>{" "}
            {langValue === "eng"
              ? "birth magnificent designs"
              : "рождают великолепные дизайны."}
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[520px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-pretty"
          >
            {langValue === "eng" ? "In" : "В"} {startCarrier}{" "}
            {langValue === "eng"
              ? ", I started working as a web developer. Since then, I have lived at the intersection of creativity and technology, driven by passion and innovation."
              : "я начал работать в качестве веб-разработчика. С тех пор я жил на стыке творчества и технологий, движимый страстью и инновациями."}
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden mx-auto mb-8 md:flex md:max-w-xl xl:max-w-none xl:mx-0"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl text-accent">
                  <CountUp start={0} end={yearsOfExperience} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {langValue === "eng" ? "Years of experience" : "Опыт Работы"}
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl text-accent">
                  <CountUp start={0} end={15} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {langValue === "eng"
                    ? "Satisfied clients"
                    : "Довольные Клиенты"}
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl text-accent">
                  <CountUp start={0} end={28} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {langValue === "eng"
                    ? "Finished projects"
                    : "Завершенные Проекты"}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex mx-auto mb-4 gap-x-4 xl:gap-x-8 xl:mx-0">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize xl:text-lg relative after:h-[2px] after:absolute after:-bottom-1 after:left-0 ${
                  index === itemIndex
                    ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    : "after:w-8 after:bg-white"
                }`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center py-2 xl:py-6 gap-y-2 xl:gap-y-4 xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex flex-col items-center flex-1 md:flex-row max-w-max gap-x-2 text-white/60"
              >
                {/* title */}
                <div className="mb-2 font-light md:mb-0">{item.title}</div>
                <div className="hidden text-white md:flex">-</div>
                <div className="text-white">{item.stage}</div>
                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((icon) => (
                    <div className="text-2xl text-white">{icon}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
