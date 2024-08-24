import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

const Work = () => {
  return (
    <div className="flex items-center h-full bg-primary/30 py-36">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-8">
          {/* text */}
          <div>
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-center h2 xl:mt-12 md:text-start"
            >
              Мои работы<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto md:text-start text-center lg:mx-0"
            >
              Мои дизайнерские услуги создают ориентированные на пользователя,
              функциональные и визуально привлекательные решения для сайтов,
              приложений и маркетинговых кампаний.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
