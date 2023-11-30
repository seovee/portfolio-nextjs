import Image from "next/image";
import { motion } from "framer-motion";
import { SiVelog } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import IPhone from "../../public/iphone.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex flex-row justify-between items-center bg-gradient-to-b from-lime-300 to-emerald-400 w-full h-[50vh] sm:h-[100vh] overflow-hidden"
    >
      <h2 className="absolute hidden sm:block top-10 text-center w-full font-thin">
        - C O N T A C T -
      </h2>
      <motion.div
        className="w-1/2 lg:w-2/5 hidden h-full items-center mt-28 md:flex"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5, duration: 1 },
        }}
      >
        <Image
          src={IPhone}
          alt="Contact 페이지 이미지"
          style={{ width: "100%", height: "auto" }}
        />
      </motion.div>
      <div className="w-1/2 lg:w-3/5 relative w-full h-full">
        <motion.h3
          className="absolute top-[25vh] right-0 font-jalnan font-bold text-3xl sm:text-6xl lg:text-8xl 2xl:text-9xl"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.5, duration: 1 },
          }}
        >
          CONTACT ME
        </motion.h3>
        <motion.ul
          className="absolute top-[30vh] sm:top-[40vh] right-0 sm:right-[10px] flex mt-2 lg:mt-10 gap-1 sm:gap-10 lg:gap-20 ml-5 justify-start items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.5, duration: 1 },
          }}
        >
          <li className="scale-50 sm:scale-100">
            <a
              href="https://github.com/seovee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size="70" className="hover:text-white" />
            </a>
          </li>
          <li className="scale-50 sm:scale-100">
            <a
              href="https://velog.io/@jinseob102"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiVelog size="65" className="hover:text-white" />
            </a>
          </li>
          <li className="scale-50 sm:scale-100">
            <a
              href="mailto:jinseob102@naver.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiMailFill size="76" className="hover:text-white" />
            </a>
          </li>
        </motion.ul>
      </div>
    </section>
  );
}
