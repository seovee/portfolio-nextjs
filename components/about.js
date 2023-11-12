import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Profile from "../public/profile.jpeg";
import { aboutData } from "../data/aboutData";

export default function About() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.425, 0.48],
    ["rgb(253 186 116)", "rgb(190 242 100)"]
  );

  return (
    <section id="about" className="flex flex-col justify-center items-center">
      <motion.div
        className="relative h-[100vh] w-full flex justify-evenly items-center"
        style={{ scrollYProgress, backgroundColor }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
      >
        <h2 className="absolute top-10 font-thin">- A B O U T -</h2>
        <div className="h-[32rem] w-[32rem]">
          <Image
            src={Profile}
            alt="김진섭의 프로필 사진"
            width="auto"
            height="auto"
            className="rounded-full"
          />
        </div>
        {/* 소개 타이틀 & 내용 */}
        <div className="w-1/3">
          <ul className="cursor-default">
            {aboutData.map((data, index) => (
              <li key={index}>
                <motion.p
                  className="font-gmarket text-2xl mt-10 mb-1 font-medium"
                  whileHover={{
                    scale: 1.1,
                    x: 40,
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
        </div>
        {/* Button 컴포넌트 */}
        <div className="absolute bottom-10">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              transition: { delay: 1.2, duration: 1.5 },
            }}
            className="bg-blue-500 w-20 h-20 rounded-full"
          ></motion.div>
        </div>
        <div className="absolute bottom-10">
          <motion.div
            animate={{
              width: [0, 80, 80, 240],
              height: [0, 80, 80, 80],
              borderRadius: [0, 80, 80, 80],
              transition: { delay: 1, duration: 1.5 },
            }}
            className="bg-gray-200 flex flex-row justify-evenly items-center"
          >
            <ButtonCircle />
            <ButtonCircle />
            <ButtonCircle />
            <ButtonCircle />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// 버튼안 Circle 컴포넌트 분리
function ButtonCircle() {
  return (
    <motion.div
      animate={{ scale: [0, 1], transition: { delay: 2.5 } }}
      whileHover={{ backgroundColor: "rgb(0, 125, 255)" }}
      className="w-4 h-4 rounded-full bg-black cursor-pointer"
    ></motion.div>
  );
}
