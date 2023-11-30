import About from "../../components/Pages/about";
import Contact from "../../components/Pages/contact";
import Home from "../../components/Pages/home";
import Project from "../../components/Pages/project";

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
