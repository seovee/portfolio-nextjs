import { motion } from "framer-motion";

export default function Button({ children, onClick }) {
  return (
    <div className="scale-75 sm:scale-100">
      <motion.div
        className="absolute w-full bottom-[-15vh] flex flex-col justify-center items-center"
        onClick={onClick}
        whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            width: [0, 60, 60, 180],
            height: [0, 60, 60, 60],
            borderRadius: [0, 60, 60, 30],
            transition: { delay: 1, duration: 1 },
          }}
          className="absolute z-10 bg-gray-200 flex flex-row justify-evenly items-center drop-shadow-lg cursor-pointer"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 2 } }}
            className="font-gmarket text-sm"
          >
            {children}
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, zIndex: 1 }}
          whileInView={{
            opacity: [0, 1, 0],
            scale: [0, 1.1, 0],
            transition: { delay: 1, duration: 1 },
          }}
          className="bg-blue-500 h-20 w-20 rounded-full"
        ></motion.div>
      </motion.div>
    </div>
  );
}
