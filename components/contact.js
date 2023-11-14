import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex flex-col justify-center items-center"
    >
      <div className="bg-gradient-to-b from-lime-300 to-emerald-400 w-full h-[100vh] flex justify-center items-center">
        <h2 className="absolute top-10 font-thin">- C O N T A C T -</h2>
        <motion.p
          initial={{ display: "none", opacity: 0 }}
          animate={{ display: "inline", opacity: 1 }}
          className="text-5xl font-bold md:text-9xl"
        >
          {`Contact 페이지 입니다 🥹`}
        </motion.p>
      </div>
    </section>
  );
}
