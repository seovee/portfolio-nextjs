import About from "../../components/about";
import Contact from "../../components/contact";
import Home from "../../components/home";
import Project from "../../components/project";

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
