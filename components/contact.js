import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact">
      <div className="bg-lime-300 h-[100vh] flex justify-center items-center">
        <h1 className="text-8xl hover:font-bold cursor-pointer">
          <motion.p
            initial={{ display: "none", opacity: 0 }}
            animate={{ display: "inline", opacity: 1 }}
            className="text-5xl font-bold md:text-9xl"
          >
            {`Contact 페이지 입니다 🥹`}
          </motion.p>
        </h1>
      </div>
    </section>
  );
}
