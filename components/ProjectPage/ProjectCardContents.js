import { projectData } from "../../data";
import { motion } from "framer-motion";
import Image from "next/image";
import { BiMessageError } from "@react-icons/all-files/bi/BiMessageError";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaHome } from "@react-icons/all-files/fa/FaHome";

export default function ProjectCardContents() {
  return (
    <>
      {projectData.map((data, index) => (
        <div
          key={index}
          className="relative justify-center h-[85vh] w-[90vw] px-6 sm:px-10 lg:px-20 pt-16 pb-10 sm:pt-28 lg:pt-36 mr-[10vw] gap-2 rounded-[10px] flex flex-col lg:flex-row items-center shadow-xl bg-white/40 lg:gap-16 lg:justify-around "
        >
          <span className="absolute top-5 text-white font-bold italic drop-shadow-md text-6xl sm:text-7xl left-[-20px] lg:left-[-40px] lg:text-9xl">
            {data.num}
          </span>
          <div className="absolute top-8 sm:top-12">
            <h3 className="font-samlip text-center  text-xl sm:text-3xl lg:text-5xl text-yellow-950">
              {data.title}
            </h3>
          </div>
          <div className="flex items-start justify-start lg:w-3/5 mt-5 ">
            <motion.a
              href={data.url}
              title={`${data.title} 배포페이지 바로가기`}
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-2xl w-full block rounded-[10px] overflow-hidden"
              whileHover={{ scale: 1.05, y: -20 }}
            >
              <Image
                src={data.img}
                alt={data.title}
                width={400}
                height={400}
                style={{ width: "100%", height: "auto" }}
                priority={true}
              />
            </motion.a>
          </div>
          <div className="flex flex-col mt-2 justify-evenly gap-1 h-full w-[90%] lg:w-2/5">
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
              {data.skill.map((i, index) => (
                <span
                  key={index}
                  className="inline-blockt text-[10px] bg-gray-300 px-2 py-[0.2rem] rounded-lg text-blue-600 font-bold whitespace-nowrap sm:text-xs lg:text-lg"
                >
                  {i}
                </span>
              ))}
            </div>
            <div className="flex flex-col lg:gap-2">
              <p className="font-semibold text-sm md:text-xl lg:text-3xl">
                {data.category}
              </p>
              <p className="font-thin text-md md:text-2xl lg:text-3xl xl:text-4xl whitespace-nowrap">
                {data.date}
              </p>
              {data.refacDate && (
                <p className="font-thin text-xs sm:text-lg">
                  리팩토링 : {data.refacDate}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-normal text-sm sm:text-lg lg:text-xl">
                {data.desc}
              </p>
              <div className="flex gap-1 sm:gap-5">
                <motion.a
                  href={data.github_url}
                  title={`${data.title} gihub 바로가기`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
                >
                  <FaGithub size="40" className="scale-[70%] sm:scale-100" />
                </motion.a>
                <motion.a
                  href={data.url}
                  title={`${data.title} 배포 바로가기`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
                >
                  <FaHome size="40" className="scale-[70%] sm:scale-100" />
                </motion.a>
                <motion.a
                  href={data.notion_url}
                  title={`${data.title} 트러블슈팅 & 정리 바로가기`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
                >
                  <BiMessageError
                    size="40"
                    className="scale-[70%] sm:scale-100"
                  />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
