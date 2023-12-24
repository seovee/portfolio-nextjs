import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectCardContents from "./ProjectCardContents";
import { useEffect, useRef } from "react";
import HeaderTitle from "../HeaderTitle";
import { gsap } from "gsap";

export default function Project() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.7, 0.75],
    ["rgb(253 224 71)", "rgb(190 242 100)"]
  );

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  // horizontal 스크롤 애니메이션 - Gsap
  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: "5vw" },
      {
        translateX: "-705vw",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () =>
            `+=${document.querySelector(".project-wrapper").offsetHeight}`,
          pin: true,
          scrub: 1,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <motion.section
      id="project"
      className="relative project-section overflow-hidden "
      style={{ scrollYProgress, backgroundColor }}
    >
      <HeaderTitle title="- P R O J E C T -" />
      {/* gsap 애니메이션 구현 부분 */}
      <div ref={triggerRef} className="project-wrapper flex h-[100vh] w-full">
        <div
          ref={sectionRef}
          className="relative flex flex-row items-center mt-12"
        >
          <ProjectCardContents />
        </div>
      </div>
    </motion.section>
  );
}
