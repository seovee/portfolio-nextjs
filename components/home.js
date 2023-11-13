import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Home() {
  // useScroll을 이용한 title부분 애니메이션 구현
  const { scrollYProgress, scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 3]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.175],
    ["rgb(253 224 71)", "rgb(125 211 252)"]
  );

  return (
    <section id="home">
      <motion.div
        className="h-screen flex flex-col gap-[5px] justify-center items-center"
        style={{ scrollYProgress, backgroundColor }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { type: "spring" } }}
          className="text-8xl hover:font-bold cursor-pointer mb-5 font-giants"
          style={{ scrollY, scale }}
          drag
          dragSnapToOrigin
          dragMomentum
        >
          {`Hello, Every One`}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
          className="text-5xl font-light"
          style={{ scrollY, opacity }}
        >
          프론트엔드 개발자
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
          className="text-4xl font-semibold"
          style={{ scrollY, opacity }}
        >
          김진섭 입니다.
        </motion.h3>
      </motion.div>
    </section>
  );
}
