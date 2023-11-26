import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { aboutData } from "../data/index";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "./Button/button";
import Image from "next/image";
import Profile from "../public/assets/profile/profile.jpeg";
import Overlay from "./overlay";

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
      <h2 className="absolute top-10 font-thin">- A B O U T -</h2>
      <AnimatePresence>
        <motion.div
          className="relative h-screen flex flex-col justify-center lg:justify-evenly items-center lg:flex-row"
          key="aboutContainer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 1 },
          }}
        >
          <motion.div className="h-[20rem] w-[20rem] lg:h-[35rem] lg:w-[35rem] p-10">
            <Image
              src={Profile}
              alt="김진섭 메인프로필 사진"
              width={400}
              height={400}
              style={{ width: "100%", height: "auto" }}
              className="rounded-full shadow-2xl"
            />
          </motion.div>
          <motion.div className="w-4/5 lg:w-1/3">
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
          <Button onClick={toggleView}>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 2 } }}
              className="font-gmarket text-sm"
            >
              더 알아보기 🤔
            </motion.p>
          </Button>
        </motion.div>
        {view ? <Overlay toggleView={toggleView} /> : null}
      </AnimatePresence>
    </motion.section>
  );
}
