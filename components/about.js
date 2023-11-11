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
        className="relative h-[100vh] flex justify-around items-center"
        style={{ scrollYProgress, backgroundColor }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
      >
        <h2 className="absolute top-10 font-thin">- A B O U T -</h2>
        <div>
          <Image
            src={Profile}
            alt="김진섭의 프로필 사진"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
        <div className="w-1/2">
          <ul className="cursor-default">
            {aboutData.map((data, index) => (
              <li key={index}>
                <p className="font-jaram text-4xl mt-10 mb-1 font-medium hover:font-black">
                  {data.title}
                </p>
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
            <motion.div
              animate={{ scale: [0, 1], transition: { delay: 2.5 } }}
              className="w-4 h-4 rounded-full bg-black cursor-pointer"
            ></motion.div>
            <motion.div
              animate={{ scale: [0, 1], transition: { delay: 2.5 } }}
              className="w-4 h-4 rounded-full bg-black cursor-pointer"
            ></motion.div>
            <motion.div
              animate={{ scale: [0, 1], transition: { delay: 2.5 } }}
              className="w-4 h-4 rounded-full bg-black cursor-pointer"
            ></motion.div>
            <motion.div
              animate={{ scale: [0, 1], transition: { delay: 2.5 } }}
              className="w-4 h-4 rounded-full bg-black cursor-pointer"
            ></motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
