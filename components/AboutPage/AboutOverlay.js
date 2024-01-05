import { motion } from "framer-motion";
import Image from "next/image";
import BackImg1 from "../../public/assets/profile/profile6.jpeg";
import BackImg2 from "../../public/assets/profile/profile2.jpg";
import Profile from "../../public/assets/profile/profile4.jpg";
import { overlayData } from "../../data";

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
        <section className="flex flex-row p-5 gap-5 sm:p-8 lg:p-8 h-full">
          <div className="hidden lg:grid lg:grid-cols-2 gap-5 lg:w-1/2">
            <div className="hidden lg:block overflow-hidden rounded-tl-[15px]">
              <Image
                src={BackImg1}
                alt="첫번째 배경 이미지"
                style={{ height: "100%", objectFit: "cover" }}
                className="shadow-md"
              />
            </div>
            <div className="hidden lg:block">
              <h2 className="flex justify-center items-center text-center h-full font-samlip text-4xl">
                김진섭
                <br />
                (Kim JinSeob)
              </h2>
            </div>
            <div className="hidden lg:block">
              <p className="flex justify-center items-center h-full font-samlip text-4xl font-bold">
                1991. 11. 29.
              </p>
            </div>
            <div className="hidden lg:block overflow-hidden">
              <Image
                src={BackImg2}
                alt="두번째 배경 이미지"
                style={{ height: "100%", objectFit: "cover" }}
                className="shadow-md"
              />
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-5 h-full">
            <div className="h-1/2 overflow-hidden rounded-tl-[15px] lg:rounded-tl-[0px] rounded-tr-[15px]">
              <Image
                src={Profile}
                alt="소개페이지 메인 사진"
                style={{ height: "100%", objectFit: "cover" }}
                className="shadow-md"
              />
            </div>
            <div className="h-1/2 font-samlip justify-between flex flex-col">
              <div className="lg:hidden">
                <h2 className="text-2xl lg:text-3xl font-bold">
                  김진섭(Kim JinSeob)
                </h2>
                <p className="text-lg lg:text-xl font-bold italic">
                  1991. 11. 29.
                </p>
              </div>
              <div className="font-jalnan text-lg sm:text-3xl text-gray-400 italic">
                React, NextJS, TypeScript, JavaScript, ReactQuery, Recoil,
                Redux, FramerMotion, Tailwind
              </div>
              <div className="font-gmarket">
                <ul>
                  {overlayData.map((data) => (
                    <li
                      key={data.num}
                      className="flex flex-row lg:items-center gap-2 mt-[4px]"
                    >
                      <p className="text-xs sm:text-2xl">{data.date}</p>
                      <p className="text-xs sm:text-2xl">{data.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
}
