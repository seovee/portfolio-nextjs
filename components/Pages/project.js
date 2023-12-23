import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { projectData, skillData } from "../../data";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

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
      <h2 className="absolute hidden sm:block top-0 text-center w-full font-thin">
        - P R O J E C T -
      </h2>
      <div ref={triggerRef} className="project-wrapper flex h-[100vh] w-full">
        <div
          ref={sectionRef}
          className="relative flex flex-row items-center mt-12"
        >
          {projectData.map((data, index) => (
            <div
              key={index}
              className="relative justify-center h-[85vh] w-[90vw] px-6 sm:px-10 lg:px-20 pt-16 pb-10 sm:pt-28 lg:pt-36 mr-[10vw] gap-2 rounded-[10px] flex flex-col lg:flex-row items-center shadow-xl bg-white/60 lg:gap-16 lg:justify-around "
            >
              <span className="absolute top-5 text-white font-bold italic drop-shadow-md text-6xl sm:text-7xl left-[-20px] lg:left-[-40px] lg:text-9xl">
                {data.num}
              </span>
              <div className="absolute font-gmarket top-8 sm:top-12">
                <h3 className="text-center font-bold text-xl sm:text-3xl lg:text-5xl text-yellow-950 font-samlip">
                  {data.title}
                </h3>
              </div>
              <div className="flex font-gmarket items-start justify-start lg:w-3/5 mt-5 ">
                <motion.a
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow-2xl w-full block rounded-[10px] overflow-hidden"
                  whileHover={{ y: -30 }}
                >
                  <Image
                    src={data.img}
                    alt={data.title}
                    width={400}
                    height={400}
                    style={{ width: "100%", height: "auto" }}
                    quality={100}
                  />
                </motion.a>
              </div>
              <div className="flex flex-col mt-2 justify-evenly h-full w-[90%] lg:w-2/5">
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
                  {data.skill.map((i, index) => (
                    <span
                      key={index}
                      className="inline-blockt text-[10px] bg-gray-300 px-2 py-[0.2rem] rounded-lg text-blue-600 font-bold whitespace-nowrap italic sm:text-xs lg:text-lg"
                    >
                      {i}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col lg:gap-2">
                  <p className="font-gmarket text-sm lg:text-2xl">
                    {data.category}
                  </p>
                  <p className="text-cd lg:text-3xl font-thin whitespace-nowrap">
                    {data.date}
                  </p>
                  {data.refacDate && (
                    <p className="font-thin text-sm sm:text-lg">
                      리팩토링 : {data.refacDate}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-gmarket text-sm sm:text-md lg:text-lg">
                    {data.desc}
                  </p>
                  <div className="flex gap-1 sm:gap-5">
                    <a
                      href={data.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub
                        size="40"
                        className="scale-[70%] sm:scale-100 hover:text-white"
                      />
                    </a>
                    <a
                      href={data.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MdOutlineWeb
                        size="40"
                        className="scale-[70%] sm:scale-100 hover:text-white"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
