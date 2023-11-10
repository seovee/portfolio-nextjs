import About from "./about";
import Contact from "./contact";
import Project from "./project";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative w-11/12 mx-auto md:w-full">
      <section id="home">
        <div className="bg-yellow-300 h-screen flex flex-col gap-[5px] justify-center items-center">
          <h1 className="text-8xl hover:font-bold cursor-pointer mb-5">
            {`Hello, Every One🥹`}
          </h1>
          <h2>
            <motion.p
              initial={{ display: "none", opacity: 0 }}
              animate={{ display: "inline", opacity: 1 }}
              className="text-5xl font-light"
            >
              프론트엔드 개발자
            </motion.p>
          </h2>
          <h3 className="text-4xl font-semibold">김진섭 입니다.</h3>
        </div>
      </section>
      <About />
      <Contact />
      <Project />
    </main>
  );
}
