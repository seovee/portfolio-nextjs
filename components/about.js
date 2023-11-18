import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Profile from "../public/profile.jpeg";
import { aboutData } from "../data/index";
import { useState } from "react";
import Button from "./Button/button";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.425, 0.48],
    ["rgb(125 211 252)", "rgb(253 186 116)"]
  );
  const [view, setView] = useState(false);
  const toggleView = () => {
    setView((prev) => !prev);
    router.push("#about");
  };

  return (
    <section
      id="about"
      className="relative flex flex-col justify-center items-center"
    >
      <AnimatePresence>
        <motion.div
          className=" h-[100vh] w-full flex justify-evenly items-center"
          style={{ scrollYProgress, backgroundColor }}
          key="aboutContainer"
        >
          <h2 className="absolute top-10 font-thin">- A B O U T -</h2>
          <motion.div
            className="h-[32rem] w-[32rem]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.2, duration: 1 },
            }}
          >
            <Image
              src={Profile}
              alt="김진섭의 프로필 사진"
              width="auto"
              height="auto"
              className="rounded-full shadow-2xl"
            />
          </motion.div>
          <motion.div
            className="w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.2, duration: 1 },
            }}
          >
            <ul className="cursor-default">
              {aboutData.map((data, index) => (
                <li key={index}>
                  <motion.p
                    className="font-gmarket text-2xl mt-10 mb-1 font-medium hover:underline hover:underline-offset-8"
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
                  <p className="font-thin text-xl">{data.contetnt}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        {/* 오버레이 */}
        {view ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
            className="fixed top-0 w-full h-full bg-black/50 z-20"
            onClick={toggleView}
            key="overlay"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute left-0 right-0 top-[100px] h-[70vh] w-[80vw] mx-auto my-0 rounded-[25px] bg-white "
            >
              여기를 채우자
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <Button onClick={toggleView}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 1.5 } }}
          className="font-gmarket text-sm"
        >
          더 알아보기 🤔
        </motion.p>
      </Button>
    </section>
  );
}
