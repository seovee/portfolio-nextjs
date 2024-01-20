import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLaptopCode } from "@react-icons/all-files/fa/FaLaptopCode";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { FaBlogger } from "@react-icons/all-files/fa/FaBlogger";
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
        <FaLaptopCode size="70" />
      </ContactIcon>
      <ContactIcon title="Github - seovee" url="https://github.com/seovee">
        <FaGithub size="70" />
      </ContactIcon>
      <ContactIcon title="Velog" url="https://velog.io/@jinseob102">
        <FaBlogger size="65" />
      </ContactIcon>
      <ContactIcon title="Instagram" url="https://www.instagram.com/_seovee/">
        <FaInstagram size="75" />
      </ContactIcon>
      <ContactIcon title="Email" url="mailto:jinseob102@naver.com">
        <MdEmail size="75" />
      </ContactIcon>
    </motion.ul>
  );
}
