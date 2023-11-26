import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { projectData, skillData } from "../data";
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
      { translateX: "15vw" },
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
      className="relative project-section overflow-hidden "
      style={{ scrollYProgress, backgroundColor }}
    >
      <h2 className="absolute top-10 w-full text-center font-thin">
        - P R O J E C T -
      </h2>
      <div ref={triggerRef} className="project-wrapper flex h-[100vh] w-full">
        <div
          ref={sectionRef}
          className="relative flex flex-row items-center mt-10"
        >
          {projectData.map((data, index) => (
            <div
              key={index}
              className="relative w-[70vw] justify-start h-[60vh] px-10 lg:px-20 pb-24 pt-28 lg:pt-36 mr-[15vw] gap-2 rounded-[30px] flex flex-col lg:flex-row items-center shadow-xl bg-white/40 lg:gap-20 lg:justify-around lg:h-[80vh]"
            >
              <span className="absolute top-5 left-[-20px] text-white text-7xl font-extrabold italic drop-shadow-md lg:left-[-40px] lg:text-9xl">
                {data.num}
              </span>
              <div className="absolute font-gmarket top-12">
                <h3 className="text-center text-3xl font-bold lg:text-6xl">
                  {data.title}
                </h3>
              </div>
              <div className="flex flex-col font-gmarket lg:w-3/5">
                <motion.a
                  href={data.url}
                  target="_blank"
                  className="shadow-2xl w-full"
                  whileHover={{ y: -10 }}
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
              <div className="flex flex-col justify-evenly h-full lg:w-2/5">
                <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                  {data.skill.map((i, index) => (
                    <span
                      key={index}
                      className="inline-block text-xs bg-gray-300 px-2 py-1 rounded-md text-blue-600 font-bold whitespace-nowrap italic lg:text-lg"
                    >
                      {i}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col lg:gap-2">
                  <p className="font-gmarket text-xl hidden lg:block">
                    {data.category}
                  </p>
                  <p className="text-lg lg:text-4xl font-thin">{data.date}</p>
                  {data.refacDate && (
                    <p className="font-thin text-lg">
                      리팩토링 : {data.refacDate}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-gmarket font-md">{data.desc}</p>
                  <div className="flex gap-5">
                    <a href={data.github_url} target="_blank">
                      <FaGithub size="40" className="hover:text-white" />
                    </a>
                    <a href={data.url} target="_blank">
                      <MdOutlineWeb size="40" className="hover:text-white" />
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
