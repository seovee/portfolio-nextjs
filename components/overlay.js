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
      className="fixed top-0 w-full h-full bg-black/50 z-50"
      onClick={() => toggleView()}
      key="overlay"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, y: 10 }}
        className="absolute left-0 right-0 mx-auto my-0 top-[10vh] lg:top-[5vh] bottom-auto h-[80vh] lg:h-[90vh] w-[90vw] rounded-[15px] bg-white"
        onClick={WrapperClick}
      >
        <section className="flex flex-row p-5 sm:p-8 lg:p-10 h-full">
          <div className="hidden lg:grid lg:grid-cols-2 lg:w-1/2">
            <div className="hidden lg:block overflow-hidden rounded-tl-[10px]">
              <Image
                src={BackImg1}
                alt="첫번째 배경 이미지"
                style={{ height: "100%", objectFit: "cover" }}
                className="shadow-md"
              />
            </div>
            <div className="hidden lg:block"></div>
            <div className="hidden lg:block"></div>
            <div className="hidden lg:block overflow-hidden">
              <Image
                src={BackImg2}
                alt="두번째 배경 이미지"
                style={{ height: "100%", objectFit: "cover" }}
                className="shadow-md"
              />
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col h-full">
            <div className="h-1/2 overflow-hidden rounded-tl-[10px] lg:rounded-tl-0 rounded-tr-[10px]">
              <Image
                src={Profile}
                alt="소개페이지 메인 사진"
                style={{ height: "100%", objectFit: "cover" }}
                className="shadow-md"
              />
            </div>
            <div className="h-full lg:h-1/2 font-gmarket justify-between flex flex-col lg:pl-5 pt-5">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  김진섭(Kim JinSeob)
                </h2>
                <p className="text-lg lg:text-2xl font-bold">1991. 11. 29.</p>
              </div>
              <div className="font-jalnan text-lg sm:text-3xl text-center lg:text-right text-gray-400">
                React, NextJS, TypeScript, Vue, JavaScript, ReactQuery , Recoil,
                Redux
              </div>
              <div>
                <span className="text-sm sm:text-xl lg:text-3xl font-semibold">
                  {`경력 & 경험`}
                </span>
                <ul>
                  <li className="flex flex-row lg:items-center lg:gap-2">
                    <p className="text-xs sm:text-lg italic ">
                      2022.12. - 2023.04.
                    </p>
                    <p className="text-xs sm:text-lg">
                      멋쟁이사자처럼 FE 4기 수료
                    </p>
                  </li>
                  <li className="flex flex-row lg:items-center lg:gap-2">
                    <p className="text-xs sm:text-lg italic">
                      2020.07. - 2022.11.
                    </p>
                    <p className="text-xs sm:text-lg">포천시청 공무원 재직</p>
                  </li>
                  <li className="flex flex-row lg:items-center lg:gap-2">
                    <p className="text-xs sm:text-lg italic">
                      2010.03. - 2018.02.
                    </p>
                    <p className="text-xs sm:text-lg">강원대학교 환경공학과</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
}
