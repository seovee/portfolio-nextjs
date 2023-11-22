import { useScroll, useTransform, motion } from "framer-motion";
import { RiMailFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import Image from "next/image";
import IPhone from "../public/iphone.png";

export default function Contact() {
  const { scrollYProgress } = useScroll();
  const minusFadeIn = useTransform(scrollYProgress, [0.7, 0.9], [-1000, 0]);
  const plusFadeIn = useTransform(scrollYProgress, [0.7, 0.9], [1000, 0]);
  const plusFadeIn_2 = useTransform(scrollYProgress, [0.7, 0.95], [1000, 0]);
  return (
    <section
      id="contact"
      className="relative flex flex-row justify-between items-center bg-gradient-to-b from-lime-300 to-emerald-400 w-full h-[100vh] overflow-hidden"
    >
      <h2 className="absolute top-10 text-center w-full font-thin">
        - C O N T A C T -
      </h2>
      <motion.div
        className="flex w-2/5 h-full items-center mt-28"
        style={{ scrollYProgress, x: minusFadeIn }}
      >
        <Image
          src={IPhone}
          alt="휴대폰 사진"
          style={{ width: "100%", height: "auto" }}
        />
      </motion.div>
      <div className="w-3/5">
        <motion.h3
          className="font-gmarket font-bold text-9xl"
          style={{ scrollYProgress, x: plusFadeIn }}
        >
          CONTACT_ME
        </motion.h3>
        <motion.ul
          className="flex mt-10 gap-10 ml-5 justify-start items-center"
          style={{ scrollYProgress, x: plusFadeIn_2 }}
        >
          <li>
            <a href="https://github.com/seovee" target="_blank">
              <FaGithub size="50" className="hover:text-white" />
            </a>
          </li>
          <a href="https://velog.io/@jinseob102" target="_blank">
            <li>
              <SiVelog size="45" className="hover:text-white" />
            </li>
          </a>
          <a href="mailto:jinseob102@naver.com" target="_blank">
            <li>
              <RiMailFill size="56" className="hover:text-white" />
            </li>
          </a>
        </motion.ul>
      </div>
    </section>
  );
}
