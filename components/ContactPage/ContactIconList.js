import { FaGithub, FaInstagram } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiMailFill } from "react-icons/ri";
import { SiVelog } from "react-icons/si";
import { motion } from "framer-motion";
import ContactIcon from "./ContactIcon";

export default function ContactIconList() {
  return (
    <motion.ul
      className="flex flex-row justify-center lg:mt-5 lg:gap-20 items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.5 },
      }}
    >
      <ContactIcon
        title="김진섭 이력서"
        url="https://ink-kite-3ad.notion.site/Kim-JinSeob-d88f62b3aaaa497a975b17d834cd85d2?pvs=4"
      >
        <BsPersonWorkspace size="70" />
      </ContactIcon>
      <ContactIcon title="Github - seovee" url="https://github.com/seovee">
        <FaGithub size="70" />
      </ContactIcon>
      <ContactIcon title="Velog" url="https://velog.io/@jinseob102">
        <SiVelog size="65" />
      </ContactIcon>
      <ContactIcon title="Instagram" url="https://www.instagram.com/_seovee/">
        <FaInstagram size="75" />
      </ContactIcon>
      <ContactIcon title="Email" url="mailto:jinseob102@naver.com">
        <RiMailFill size="75" />
      </ContactIcon>
    </motion.ul>
  );
}
