import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRouter } from "next/router";
import { FiChevronDown } from "react-icons/fi";
import Typewriter from "typewriter-effect";

export default function Home() {
  const router = useRouter();
  // useScroll을 이용한 title부분 애니메이션 구현
  const { scrollYProgress, scrollY } = useScroll();
  // Y 비율 확인 함수
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 3]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["rgb(253 224 71)", "rgb(125 211 252)"]
  );
  const titleClick = () => {
    router.push("#about");
  };

  return (
    <section id="home" className="relative overflow-hidden select-none">
      <motion.div
        className="h-[150vh] flex flex-col pt-[40vh] justify-start items-center "
        style={{ scrollYProgress, backgroundColor }}
      >
        <motion.h1
          initial={{ scale: 3 }}
          animate={{
            scale: 1,
            transition: {
              type: "spring",
              bounce: 5,
              damping: 10,
              duration: 1,
            },
          }}
          className="text-6xl mb-5 font-samlip lg:text-9xl"
          style={{ scrollY, scale }}
        >
          {`Hello, Every One`}
        </motion.h1>
        <motion.div
          className="flex flex-col items-center mt-2 lg:mt-10"
          style={{ scrollY, opacity }}
        >
          <span className="text-3xl text-center font-light tracking-wide lg:text-5xl">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)
                  .typeString("공무원?")
                  .pauseFor(500)
                  .deleteAll()
                  .pauseFor(1500)
                  .typeString(
                    `프론트엔드 개발자 <br><span style="font-weight:600;"}>김진섭</span> 입니다.`
                  )
                  .start();
              }}
              options={{
                delay: 100,
                deleteSpeed: 200,
                autoStart: true,
              }}
            />
          </span>
        </motion.div>
        <motion.div
          className="absolute flex gap-2 justify-center items-center bottom-[50vh] my-0 font-thin text-xl cursor-pointer w-screen h-16 hover:bg-white/30 lg:text-3xl lg:h-20"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 1,
              repeat: Infinity,
              delay: 8,
            },
          }}
          onClick={titleClick}
        >
          <div className="flex">
            <FiChevronDown />
            <span className="text-sm lg:text-lg">Next</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
