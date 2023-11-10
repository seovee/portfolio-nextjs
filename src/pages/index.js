import About from "./about";
import Contact from "./contact";
import Project from "./project";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative w-11/12 mx-auto md:w-4/5">
      <section id="home">
        <div className="bg-yellow-300 h-[90vh] flex justify-center items-center">
          <h1 className="text-8xl hover:font-bold cursor-pointer">
            <motion.p
              initial={{ display: "none", opacity: 0 }}
              animate={{ display: "inline", opacity: 1 }}
              className="text-5xl font-bold md:text-9xl"
            >
              {`Hello, I'm Jinseob🥹`}
            </motion.p>
          </h1>
        </div>
      </section>
      <About />
      <Contact />
      <Project />
    </main>
  );
}
