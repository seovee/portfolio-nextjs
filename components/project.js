import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button/button";

export default function Project() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.7, 0.8],
    ["rgb(253 186 116)", "rgb(190 242 100)"]
  );
  return (
    <section
      id="project"
      className="relative flex flex-col justify-center items-center"
    >
      <motion.div
        className="bg-orange-300 h-[100vh] w-full flex justify-center items-center"
        style={{ scrollYProgress, backgroundColor }}
      >
        <h2 className="absolute top-10 font-thin">- P R O J E C T -</h2>
      </motion.div>
      <Button></Button>
    </section>
  );
}
