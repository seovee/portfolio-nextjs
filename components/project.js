import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { projectData } from "../data";
import Image from "next/image";

export default function Project() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.7, 0.75],
    ["rgb(251 146 60)", "rgb(190 242 100)"]
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
        translateX: "-610vw",
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
      className="project-section overflow-hidden "
      style={{ scrollYProgress, backgroundColor }}
    >
      <h2 className="project-title absolute top-10 font-thin">
        - P R O J E C T -
      </h2>
      <div
        ref={triggerRef}
        className="project-wrapper flex items-center h-[100vh] w-full"
      >
        <div ref={sectionRef} className="relative flex flex-row mt-16">
          {projectData.map((data, index) => (
            <div
              key={index}
              className="relative w-[90vw] px-16 py-24 bg-white/20 mr-[200px] rounded-[30px] flex justify-center items-center shadow-md"
            >
              <span className="absolute top-5 left-[-40px] text-white text-9xl font-extrabold italic drop-shadow-md">
                {data.num}
              </span>
              <div className="flex flex-col h-full items-center gap-20">
                <motion.h3
                  className="font-gmarket text-center text-4xl font-bold tracking-wider"
                  whileHover={{ scale: 1.2 }}
                >
                  {data.title}
                </motion.h3>
                <motion.a
                  href="https://www.naver.com"
                  target="_blank"
                  className="shadow-2xl"
                  whileHover={{ y: -10 }}
                >
                  <Image
                    src={data.img}
                    alt={data.title}
                    width={400}
                    height={400}
                    style={{ width: "100%", height: "auto" }}
                  />
                </motion.a>
                <p className="font-gmarket p-10">{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
