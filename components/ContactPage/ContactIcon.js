import { BsPersonWorkspace } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ContactIcon({ title, url, children }) {
  return (
    <motion.li
      className="scale-50 lg:scale-100"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
    >
      <a title={title} href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </motion.li>
  );
}
