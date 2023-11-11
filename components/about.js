import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

export default function About() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.425, 0.48],
    ["rgb(253 186 116)", "rgb(190 242 100)"]
  );

  return (
    <section id="about">
      <motion.div
        className="h-[100vh] flex justify-center items-center"
        style={{ scrollYProgress, backgroundColor }}
      >
        <h1 className="text-8xl hover:font-bold cursor-pointer">
          {" "}
          <motion.p
            initial={{ display: "none", opacity: 0 }}
            animate={{ display: "inline", opacity: 1 }}
            className="text-5xl font-bold md:text-9xl"
          >
            {`소개 페이지 입니다 🥹`}
          </motion.p>
        </h1>
      </motion.div>
    </section>
  );
}
