import { motion, useScroll, useTransform } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

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
    <section id="home" className="relative">
      <motion.div
        className="h-[150vh] flex flex-col gap-[5px] pt-[45vh] justify-start items-center overflow-hidden	"
        style={{ scrollYProgress, backgroundColor }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { type: "spring" } }}
          className="text-8xl hover:font-bold cursor-pointer mb-5 font-giants"
          style={{ scrollY, scale }}
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
        <motion.div
          className="absolute bottom-[50vh] font-light text-3xl"
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 1,
              repeat: Infinity,
            },
          }}
        >
          <FiChevronDown />
        </motion.div>
      </motion.div>
    </section>
  );
}
