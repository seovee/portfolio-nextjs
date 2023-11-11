import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    // 불투명한 배너 사용(backdrop)
    <motion.header
      className="fixed top-0 left-0 right-0 z-10 flex flex-row backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
    >
      <h1 className="absolute flex items-center justify-center left-0 w-36 h-20 text-2xl font-bold bg-gray-500/10">
        <Link href="/" className="italic">
          Logo!
        </Link>
      </h1>
      <nav className="w-full h-20 flex items-center justify-center">
        <ul className="flex gap-20 text-xl font-normal font-giants">
          <li>
            <Link href="#" className="font-semibold">
              HOME
            </Link>
          </li>
          <li>
            <Link href="#about" className="font-semibold ">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="#project" className="font-semibold">
              PROJECT
            </Link>
          </li>
          <li>
            <Link href="#contact" className="font-semibold">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
