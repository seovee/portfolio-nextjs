import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { aboutData } from "../../data/index";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../Button/button";
import Image from "next/image";
import Profile from "../../public/assets/profile/profile.jpeg";
import Overlay from "../overlay";

export default function About() {
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.35, 0.43],
    ["rgb(125 211 252)", "rgb(253 224 71)"]
  );
  const [view, setView] = useState(false);
  // overlay 실행 함수
  const toggleView = () => {
    setView((prev) => !prev);
    router.push("#about");
  };

  return (
    <motion.section
      id="about"
      className="h-[150vh] w-full relative flex flex-col items-center"
      style={{ scrollYProgress, backgroundColor }}
    >
      <h2 className="absolute hidden sm:block top-0 text-center w-full font-thin">
        - A B O U T -
      </h2>
      <AnimatePresence>
        <motion.div
          className="h-screen flex flex-col items-center justify-center lg:justify-evenly lg:flex-row"
          key="aboutContainer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 1 },
          }}
        >
          <motion.div className="h-[10rem] w-[10rem] sm:h-[20rem] sm:w-[20rem] lg:h-[35rem] lg:w-[35rem]">
            <Image
              src={Profile}
              alt="김진섭 메인프로필 사진"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="rounded-full shadow-2xl"
            />
          </motion.div>
          <motion.div className="relative w-[80%] lg:w-1/2">
            <ul className="relative cursor-default">
              {aboutData.map((data, index) => (
                <li key={index}>
                  <motion.p
                    className="font-gmarket text-sm lg:text-2xl mt-5 sm:mt-10 mb-1 font-medium hover:underline hover:underline-offset-8"
                    whileHover={{
                      scale: 1.1,
                      x: 10,
                      fontWeight: 800,
                      color: "rgb(0, 128, 255)",
                      transition: {
                        type: "tween",
                      },
                    }}
                  >
                    {data.title}
                  </motion.p>
                  <p className="font-thin text-sm lg:text-xl">
                    {data.contetnt}
                  </p>
                </li>
              ))}
            </ul>
            <Button onClick={toggleView}>더 알아보기 🤔</Button>
          </motion.div>
        </motion.div>
        {view ? <Overlay toggleView={toggleView} /> : null}
      </AnimatePresence>
    </motion.section>
  );
}
