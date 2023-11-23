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
      { translateX: "10vw" },
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
              className="relative w-[80vw] h-[80vh] px-20 pb-24 pt-36  mr-[15vw] rounded-[30px] flex flex-row gap-20 justify-around items-center shadow-xl bg-white/40"
            >
              <span className="absolute top-5 left-[-40px] text-white text-9xl font-extrabold italic drop-shadow-md">
                {data.num}
              </span>
              <div className="absolute font-gmarket top-12">
                <h3 className="text-center text-6xl font-bold">{data.title}</h3>
              </div>
              <div className="flex flex-col font-gmarket w-3/5">
                <motion.a
                  href="https://www.naver.com"
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
                  />
                </motion.a>
              </div>
              <div className="w-2/5 flex flex-col gap-10">
                <div className="flex flex-wrap gap-2">
                  {data.skill.map((i, index) => (
                    <span
                      key={index}
                      className="inline-block text-md bg-gray-300 px-2 py-1 rounded-md text-blue-600 font-bold whitespace-nowrap italic"
                    >
                      {i}
                    </span>
                  ))}
                </div>
                <div>
                  <p className="font-gmarket">React 프로젝트 / 개인프로젝트</p>
                  <p className="text-4xl font-thin">2023. 11. 07. ~ 11. 24.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-gmarket">{data.desc}</p>
                  <div className="flex gap-5">
                    <a href="https://github.com/seovee" target="_blank">
                      <FaGithub size="40" className="hover:text-white" />
                    </a>
                    <a href="https://github.com/seovee" target="_blank">
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
