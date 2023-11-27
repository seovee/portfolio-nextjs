import { motion } from "framer-motion";
import Image from "next/image";
import BackImg2 from "../public/assets/etc/background1.jpeg";
import BackImg1 from "../public/assets/etc/background3.jpeg";
import Profile from "../public/assets/profile/profile4-1.jpg";
import { skillData } from "../data";

export default function Overlay({ toggleView }) {
  // overlay 버블링 방지 함수
  const WrapperClick = (e) => {
    e.stopPropagation();
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
      className="fixed top-0 w-full h-full bg-black/50 z-20"
      onClick={() => toggleView()}
      key="overlay"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, y: 10 }}
        className="absolute left-0 right-0 mx-auto my-0 top-[100px] h-[70vh] lg:h-[80vh] w-[80vw] rounded-[25px] bg-white"
        onClick={WrapperClick}
      >
        <section className="flex flex-row p-8 lg:p-12 h-full gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-1/2">
            <div className="hidden lg:block overflow-hidden rounded-tl-[25px]">
              <Image
                src={BackImg1}
                alt="첫번째 배경 이미지"
                width={600}
                height={600}
                style={{ width: "100%", height: "auto" }}
                className="shadow-md"
              />
            </div>
            <div className="flex flex-col justify-between overflow-hidden font-jalnan text-lg sm:text-3xl lg:text-4xl">
              <p className="text-amber-400">
                HTML,
                <br />
                CSS,
                <br />
                JavaScript
              </p>
              <p className="text-right text-gray-400">
                Git,
                <br />
                Github,
                <br />
                Notion
              </p>
            </div>
            <motion.div
              className="flex items-center justify-center overflow-hidden font-jalnan text-xl sm:text-4xl lg:text-5xl text-sky-300"
              animate={{
                rotate: 360,
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 1,
                },
              }}
            >
              React,
              <br />
              NextJS,
              <br />
              Vue.js,
              <br />
              Gatsby
            </motion.div>
            <div className="relative hidden sm:block overflow-hidden rounded-bl-[25px]">
              <Image
                src={BackImg2}
                alt="두번째 배경 이미지"
                width={600}
                height={600}
                style={{ width: "100%", height: "auto" }}
                className="shadow-md"
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col h-full gap-5">
            <div className="h-1/2 hidden sm:block overflow-hidden rounded-tr-[25px]">
              <Image
                src={Profile}
                alt="소개페이지 사진"
                width={600}
                height={600}
                style={{ width: "100%", height: "auto" }}
                className="shadow-md"
              />
            </div>
            <div className="h-4/5 lg:h-1/2 font-gmarket justify-between flex flex-col gap-5 sm:gap-10">
              <h2 className="text-sm sm:text-xl lg:text-3xl font-bold">
                김진섭(Kim JinSeob), 1991. 11. 29.
              </h2>
              <div>
                <span className="text-sm sm:text-lg lg:text-2xl font-semibold">
                  {`경력 / 교육`}
                </span>
                <ul>
                  <li className="flex flex-col lg:flex-row lg:items-center lg:gap-2">
                    <p className="text-xs sm:text-md italic">
                      ✓ 2022.12. - 2023.04.
                    </p>
                    <p className="text-xs sm:text-sm mb-2 lg:mb-0 lg:text-lg">
                      멋쟁이사자처럼 FE 4기 수료
                    </p>
                  </li>
                  <li className="flex flex-col lg:flex-row lg:items-center lg:gap-2">
                    <p className="text-xs sm:text-md italic">
                      2020.07. - 2022.11.
                    </p>
                    <p className="text-xs sm:text-sm mb-2 lg:mb-0 lg:text-lg">
                      포천시청 공무원
                    </p>
                  </li>
                  <li className="flex flex-col lg:flex-row lg:items-center lg:gap-2">
                    <p className="text-xs sm:text-md italic">
                      ✓ 2010.03. - 2018.02.
                    </p>
                    <p className="text-xs sm:text-sm mb-2 lg:mb-0 lg:text-lg">
                      강원대학교 환경공학과
                    </p>
                  </li>
                </ul>
              </div>
              <ul className="flex flex-col sm:flex-row gap-1 sm:gap-5 text-sm sm:text-lg">
                <motion.li whileHover={{ scale: 1.2 }}>
                  <a
                    href="https://ink-kite-3ad.notion.site/Kim-JinSeob-d88f62b3aaaa497a975b17d834cd85d2?pvs=4"
                    target="_blank"
                  >
                    이력서
                  </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <a href="https://velog.io/@jinseob102" target="_blank">
                    블로그
                  </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <a href="https://www.instagram.com/_seovee/" target="_blank">
                    인스타그램
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
}
