import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import aboutProfile from "../../public/assets/profile/profile1.jpeg";
import { aboutData } from "../../data/index";
import { useRouter } from "next/router";
import { useState } from "react";
import HeaderTitle from "../util/HeaderTitle";
import Button from "../Button/button";
import Overlay from "./AboutOverlay";
import Image from "next/image";

export default function About() {
  const [view, setView] = useState(false);
  const { scrollYProgress } = useScroll();
  const router = useRouter();

  // background 색상 애니메이션 훅
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.35, 0.43],
    ["rgb(125 211 252)", "rgb(253 224 71)"]
  );

  // overlay 실행 함수
  const toggleView = () => {
    setView((prev) => !prev);
    router.push("#about");
  };

  return (
    <motion.section
      id="about"
      className="h-[150vh] w-full relative flex flex-col items-center overflow-hidden"
      style={{ scrollYProgress, backgroundColor }}
    >
      <HeaderTitle title="- A B O U T -" />
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
          <motion.div
            className="h-[10rem] w-[10rem] sm:h-[20rem] sm:w-[20rem] lg:h-[30rem] lg:w-[30rem]"
            whileHover={{ y: -10 }}
          >
            <Image
              src={aboutProfile}
              alt="김진섭 about 프로필 사진"
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="rounded-full shadow-lg"
            />
          </motion.div>
          <motion.div className="relative w-[80%] lg:w-1/2">
            <ul className="relative cursor-default">
              {aboutData.map((data, index) => (
                <motion.li
                  key={index}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                >
                  <p className="block font-samlip text-xs sm:text-lg lg:text-3xl mt-5 sm:mt-10 mb-1 text-black">
                    {data.title}
                  </p>
                  <p className="font-thin text-xs sm:text-md lg:text-xl">
                    {data.contetnt}
                  </p>
                </motion.li>
              ))}
            </ul>
            <Button onClick={toggleView}>M O R E 😎</Button>
          </motion.div>
        </motion.div>
        {view ? <Overlay toggleView={toggleView} /> : null}
      </AnimatePresence>
    </motion.section>
  );
}
