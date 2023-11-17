import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Project() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.7, 0.8],
    ["rgb(253 186 116)", "rgb(190 242 100)"]
  );

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  // horizontal 스크롤 애니메이션 - Gsap
  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 100 },
      {
        translateX: -6400,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 0.7,
          invalidateOnRefresh: true,
          pin: ".project-section",
          anticipatePin: 1,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section
      id="project"
      className="relative project-section flex flex-col items-center"
    >
      <h2 className="absolute top-10 font-thin">- P R O J E C T -</h2>

      <motion.div
        ref={triggerRef}
        className="bg-orange-300 h-[100vh] w-full flex items-center"
        style={{ scrollYProgress, backgroundColor }}
      >
        <div ref={sectionRef} className="flex flex-row">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className="w-[850px] h-[850px] bg-gray-400/30 mr-[200px] flex justify-center items-center text-4xl font-lg"
            >
              {i}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
