import { motion } from "framer-motion";

export default function Button() {
  return (
    <>
      <div className="absolute bottom-10">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            transition: { delay: 1.2, duration: 1.5 },
          }}
          className="bg-blue-500 w-20 h-20 rounded-full"
        ></motion.div>
      </div>
      <div className="absolute bottom-10">
        <motion.div
          whileInView={{
            width: [0, 80, 80, 240],
            height: [0, 80, 80, 80],
            borderRadius: [0, 80, 80, 80],
            transition: { delay: 1, duration: 1.5 },
          }}
          className="bg-gray-200 flex flex-row justify-evenly items-center"
        ></motion.div>
      </div>
    </>
  );
}
