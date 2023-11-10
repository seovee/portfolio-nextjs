import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Project from "./project";

export default function Main() {
  return (
    <main className="relative w-11/12 mx-auto md:w-full">
      <Home />
      <About />
      <Project />
      <Contact />
    </main>
  );
}
