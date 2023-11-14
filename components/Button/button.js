import { motion } from "framer-motion";

export default function Button({ children }) {
  return (
    <>
      <div className="absolute bottom-5 flex flex-col justify-center items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            width: [0, 60, 60, 180],
            height: [0, 60, 60, 60],
            borderRadius: [0, 60, 60, 60],
            transition: { delay: 1, duration: 1.5 },
          }}
          className="absolute bg-gray-200 flex flex-row justify-evenly items-center"
        >
          {children}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, zIndex: 1 }}
          whileInView={{
            opacity: [0, 1, 0],
            scale: [0, 1.1, 0],
            transition: { delay: 1.2, duration: 1.5 },
          }}
          className="bg-blue-500 h-20 w-20 rounded-full"
        ></motion.div>
      </div>
    </>
  );
}
