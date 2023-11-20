import { RiMailFill } from "react-icons/ri";
import { SiVelog } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Iphone from "../public/iphone.png";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Contact() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0.8, 1], [-600, 0]);
  return (
    <section
      id="contact"
      className="relative flex flex-row justify-between items-center bg-gradient-to-b from-lime-300 to-emerald-400 w-full h-[100vh] overflow-hidden"
    >
      <h2 className="absolute top-10 text-center w-full font-thin">
        - C O N T A C T -
      </h2>
      <motion.div
        className="flex w-1/3 h-full items-center mt-28"
        style={{ scrollYProgress, x }}
      >
        <Image
          src={Iphone}
          alt="휴대폰 사진"
          style={{ width: "100%", height: "auto" }}
        />
      </motion.div>
      <div className="w-2/3">
        <h3 className="font-gmarket font-bold text-9xl">CONTACT_ME</h3>
        <ul className="flex mt-10 ml-5 gap-10 items-center">
          <li>
            <a href="https://github.com/seovee">
              <FaGithub size="50" className="hover:text-white" />
            </a>
          </li>
          <a href="https://velog.io/@jinseob102">
            <li>
              <SiVelog size="45" className="hover:text-white" />
            </li>
          </a>
          <a href="mailto:jinseob102@naver.com">
            <li>
              <RiMailFill size="56" className="hover:text-white" />
            </li>
          </a>
        </ul>
      </div>
    </section>
  );
}
