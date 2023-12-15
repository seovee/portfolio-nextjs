import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    // 불투명한 배너 사용(backdrop)
    <motion.header
      className="fixed top-0 left-0 right-0 z-30 flex flex-row backdrop-blur-md select-none h-12 lg:h-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
    >
      <motion.h1
        className="absolute hidden items-center justify-center left-0 w-36 h-20 text-2xl font-bold lg:flex"
        animate={{
          y: [-10, 10, -10, 10, -10],
          transition: {
            duration: 3,
            repeat: Infinity,
          },
        }}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
      >
        <Link href="/" className="text-md font-samlip">
          seovee
          <p className="font-normal font-extralight text-xs text-center">
            PORTFOLIO
          </p>
        </Link>
      </motion.h1>
      <nav className="w-full flex items-center justify-center">
        <ul className="flex gap-5 text-sm font-normal font-samlip sm:text-md sm:gap-10 lg:gap-20 lg:text-xl">
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
          >
            <Link
              href="#"
              className="font-semibold hover:underline hover:underline-offset-8"
            >
              HOME
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
          >
            <Link
              href="#about"
              className="font-semibold hover:underline hover:underline-offset-8"
            >
              ABOUT
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
          >
            <Link
              href="#project"
              className="font-semibold hover:underline hover:underline-offset-8"
            >
              PROJECT
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
          >
            <Link
              href="#contact"
              className="font-semibold hover:underline hover:underline-offset-8"
            >
              CONTACT
            </Link>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  );
}
