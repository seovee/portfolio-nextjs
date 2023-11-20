import About from "../../components/about";
import Contact from "../../components/contact";
import Home from "../../components/home";
import Project from "../../components/project";

export default function Main() {
  return (
    <main className="relative mx-auto w-full">
      <Home />
      <About />
      <Project />
      <Contact />
    </main>
  );
}
