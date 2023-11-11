import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Profile from "../public/profile.jpeg";

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
        className="relative h-[100vh] flex justify-evenly items-center"
        style={{ scrollYProgress, backgroundColor }}
      >
        <h2 className="absolute top-0 font-gmarket font-bold">ABOUT</h2>
        <div>
          <Image
            src={Profile}
            alt="김진섭의 프로필 사진"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
        <div>
          <ul>
            <li>Data를 map으로 써서 넣어보자!!!!!!!!!!!!!!!!!!!</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
