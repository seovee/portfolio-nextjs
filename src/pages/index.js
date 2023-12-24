import About from "../../components/Pages/about";
import Contact from "../../components/ContactPage/contact";
import Home from "../../components/Pages/home";
import Project from "../../components/ProjectPage/project";

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
