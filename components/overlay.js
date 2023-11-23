import { motion } from "framer-motion";
import Image from "next/image";
import BackImg2 from "../public/assets/etc/background1.jpeg";
import BackImg1 from "../public/assets/etc/background3.jpeg";
import Profile from "../public/assets/profile/profile4.jpg";
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
        className="absolute left-0 right-0 top-[100px] h-[80vh] w-[80vw] mx-auto my-0 rounded-[25px] bg-white"
        onClick={WrapperClick}
      >
        <section className="flex flex-row p-8 xl:p-12 h-full gap-10">
          <div className="grid grid-cols-2 gap-5 w-1/2">
            <div className="overflow-hidden rounded-tl-[25px]">
              <Image
                src={BackImg1}
                alt="첫번째 배경 이미지"
                width={600}
                height={600}
                style={{ width: "auto", height: "100%" }}
                className="shadow-md"
              />
            </div>
            <motion.div className="flex items-center justify-center overflow-hidden font-jalnan text-5xl">
              HTML/CSS, JavaScript
            </motion.div>
            <motion.div
              className="flex items-center justify-center overflow-hidden font-jalnan text-5xl"
              animate={{
                rotate: 360,
                transition: { duration: 0.8, repeat: Infinity, repeatDelay: 2 },
              }}
            >
              React, NextJS, Vue.js
            </motion.div>
            <div className="relative overflow-hidden">
              <Image
                src={BackImg2}
                alt="두번째 배경 이미지"
                width={600}
                height={600}
                style={{ width: "auto", height: "100%" }}
                className="shadow-md"
              />
            </div>
          </div>
          <div className="flex flex-col h-full gap-5">
            <div className="h-1/2 overflow-hidden rounded-tr-[25px]">
              <Image
                src={Profile}
                alt="소개페이지 사진"
                width={600}
                height={600}
                style={{ width: "100%", height: "auto" }}
                className="shadow-md"
              />
            </div>
            <div className="h-1/2 font-gmarket flex flex-col justify-between pb-2">
              <h2 className="text-xl font-bold">
                김진섭(Kim JinSeob), 1991. 11. 29.
              </h2>

              <div>
                <span>Experience</span>
                <ul>
                  <li>
                    ✓ 2022.11.28. - 2022.30.30. 멋쟁이사자처럼 프론트엔드 4기
                    수료
                  </li>
                  <li>✓ 2020.07. - 2022.11. 포천시청 공무원</li>
                  <li>✓ 2010.03. - 2018.02. 강원대학교 환경공학과</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 ">
                {skillData.map((i, index) => (
                  <span
                    key={index}
                    className="inline-block text-xs bg-gray-300 px-2 pt-1 pb-0 rounded-md text-orange-600 font-semibold whitespace-nowrap"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
}
