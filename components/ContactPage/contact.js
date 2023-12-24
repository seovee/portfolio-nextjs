import Image from "next/image";
import { motion } from "framer-motion";
import { SiVelog } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import ContactPic from "../../public/assets/mini.png";
import HeaderTitle from "../HeaderTitle";
import ContactIcon from "./ContactIcon";
import ContactIconList from "./ContactIconList";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex flex-col md:flex-row justify-center gap-10 lg:justify-between items-center bg-gradient-to-b from-lime-300 to-emerald-400 w-full h-[100vh] overflow-hidden pt-20"
    >
      <HeaderTitle title="- C O N T A C T -" />
      <div className="w-full items-center flex">
        <Image
          src={ContactPic}
          alt="Contact 페이지 메인이미지"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <motion.div
          className="font-jalnan inline-block font-bold text-5xl sm:text-6xl lg:text-8xl 2xl:text-9xl whitespace-nowrap tracking-wider"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          <h3 className="hover:text-white hover:transition hover:duration-500">
            CONTACT ME
          </h3>
        </motion.div>
        <ContactIconList />
      </div>
    </section>
  );
}
