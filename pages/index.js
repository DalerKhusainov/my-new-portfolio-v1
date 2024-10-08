import { useContext } from "react";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { LangContext } from "../context/LangContext";

const Home = () => {
  const langContext = useContext(LangContext);
  if (!langContext) return;
  const { langValue } = langContext;

  return (
    <div className="h-full bg-primary/60">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-t from-primary/10 via-black/30 to-black/10">
        <div className="container flex flex-col justify-center h-full mx-auto text-center xl:pt-40 xl:text-left">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            {langValue === "eng" ? "Transforming Ideas" : "Воплощение Идей"}{" "}
            <br />
            {langValue === "eng" ? "into" : "в"}{" "}
            <span className="text-accent">
              {langValue === "eng" ? "Digital Reality" : "Цифровую Реальность"}
            </span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm mx-auto mb-10 xl:max-w-xl xl:mx-0 xl:mb-16"
          >
            {langValue === "eng"
              ? "Development of modern web solutions tailored to your needs."
              : "Разработка современных веб-решений с учетом ваших потребностей."}
          </motion.p>
          {/* btn */}
          <div className="relative flex justify-center xl:hidden">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="absolute w-full h-full bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
