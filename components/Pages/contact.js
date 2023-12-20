import Image from "next/image";
import { motion } from "framer-motion";
import { SiVelog } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import ContactPic from "../../public/assets/mini.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex flex-col md:flex-row justify-center gap-10 lg:justify-between items-center bg-gradient-to-b from-lime-300 to-emerald-400 w-full h-[100vh] overflow-hidden pt-20"
    >
      <h2 className="absolute hidden sm:block top-0 text-center w-full font-thin">
        - C O N T A C T -
      </h2>
      <div className="w-full items-center flex">
        <Image
          src={ContactPic}
          alt="Contact 페이지 이미지"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <motion.h3
          className="font-jalnan font-bold text-5xl sm:text-6xl lg:text-8xl 2xl:text-9xl whitespace-nowrap tracking-wider"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 1 },
          }}
        >
          CONTACT ME
        </motion.h3>
        <motion.ul
          className="flex flex-row justify-center lg:mt-5 lg:gap-20 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 1 },
          }}
        >
          <li className="scale-50 lg:scale-100">
            <a
              title="김진섭 이력서"
              href="https://ink-kite-3ad.notion.site/Kim-JinSeob-d88f62b3aaaa497a975b17d834cd85d2?pvs=4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsPersonWorkspace
                size="70"
                className="focus:text-white hover:text-white"
              />
            </a>
          </li>
          <li className="scale-50 lg:scale-100">
            <a
              title="Github - seovee"
              href="https://github.com/seovee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size="70" className="hover:text-white" />
            </a>
          </li>
          <li className="scale-50 lg:scale-100">
            <a
              title="Velog"
              href="https://velog.io/@jinseob102"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiVelog size="65" className="hover:text-white" />
            </a>
          </li>
          <li className="scale-50 lg:scale-100">
            <a
              title="Instagram"
              href="https://www.instagram.com/_seovee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size="76" className="hover:text-white" />
            </a>
          </li>
          <li className="scale-50 lg:scale-100">
            <a
              title="Email"
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
