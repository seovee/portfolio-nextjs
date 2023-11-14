// 버튼안 Circle 컴포넌트 분리
import { motion } from "framer-motion";

export default function ButtonCircle() {
  return (
    <motion.div
      whileInView={{ scale: [0, 1], transition: { delay: 2.5 } }}
      whileHover={{ backgroundColor: "rgb(0, 125, 255)" }}
      className="w-4 h-4 rounded-full bg-black cursor-pointer"
    ></motion.div>
  );
}
