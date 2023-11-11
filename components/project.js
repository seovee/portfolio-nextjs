import { motion, useScroll, useTransform } from "framer-motion";

export default function Project() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.7, 0.8],
    ["rgb(190 242 100)", "rgb(125 211 252)"]
  );
  return (
    <section id="project">
      <motion.div
        className="bg-orange-300 h-[100vh] flex justify-center items-center"
        style={{ scrollYProgress, backgroundColor }}
      >
        <h1 className="text-8xl hover:font-bold cursor-pointer">
          {" "}
          <motion.p
            initial={{ display: "none", opacity: 0 }}
            animate={{ display: "inline", opacity: 1 }}
            className="text-5xl font-bold md:text-9xl"
          >
            {`project 페이지 입니다 🥹`}
          </motion.p>
        </h1>
      </motion.div>
    </section>
  );
}
