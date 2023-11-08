import About from "./about";
import Contact from "./contact";
import Project from "./project";

export default function Home() {
  return (
    <>
      <section id="home">
        <div className="bg-yellow-300 h-[90vh] flex justify-center items-center">
          <h1 className="text-8xl hover:font-bold cursor-pointer">{`Hello, I'm Jinseob🥹`}</h1>
        </div>
      </section>
      <About />
      <Contact />
      <Project />
    </>
  );
}
