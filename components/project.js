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
      className="project-section relative flex flex-col items-center overflow-hidden"
    >
      <h2 className="project-title absolute top-10 font-thin">
        - P R O J E C T -
      </h2>
      <motion.div
        ref={triggerRef}
        className="project-wrapper bg-orange-300 h-[100vh] w-full flex items-center"
        style={{ scrollYProgress, backgroundColor }}
      >
        <div ref={sectionRef} className="flex flex-row mt-16">
          {projectData.map((data, index) => (
            <div
              key={index}
              className="relative w-[45rem] h-[45rme] px-16 py-24 bg-white/20 mr-[200px] rounded-[30px] flex justify-center items-center shadow-md"
            >
              <div className=" flex flex-col h-full items-center gap-20">
                <span className="absolute top-5 left-[-40px] text-white text-9xl font-extrabold italic drop-shadow-md">
                  {data.num}
                </span>
                <motion.h3
                  className="font-gmarket text-center text-4xl font-bold tracking-wider"
                  whileHover={{ scale: 1.2 }}
                >
                  {data.title}
                </motion.h3>
                <a
                  href="https://www.naver.com"
                  target="_blank"
                  className="shadow-2xl"
                >
                  <Image
                    src={data.img}
                    alt={data.title}
                    width={400}
                    height={400}
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
                <p className="font-gmarket p-10">{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
