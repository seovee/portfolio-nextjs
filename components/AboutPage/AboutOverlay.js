import { motion } from "framer-motion";
import Image from "next/image";
import BackImg1 from "../../public/assets/profile/profile6.jpeg";
import BackImg2 from "../../public/assets/profile/profile2.jpg";
import Profile from "../../public/assets/profile/profile4.jpg";
import { overlayData } from "../../data";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
import { useRouter } from "next/router";

export default function Overlay({ toggleView }) {
  const router = useRouter();

  // overlay 버블링 방지 함수
  const WrapperClick = (e) => {
    e.stopPropagation();
  };

  const onClickNext = () => {
    toggleView();
    setTimeout(() => {
      router.push("/#project");
    }, 200);
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
          <div className="hidden lg:grid lg:grid-cols-2 gap-5 lg:w-1/2 text-gray-400 font-jalnan hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-green-300 hover:via-blue-500 hover:to-purple-600 hover:transition hover:duration-500">
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -5 }}
              className="hidden lg:block overflow-hidden rounded-[15px] shadow-xl"
            >
              <Image
                src={BackImg1}
                alt="첫번째 배경 이미지"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </motion.div>
            <div className="hidden lg:block">
              <h2 className="flex justify-center items-center text-center h-full text-4xl">
                김진섭
                <br />
                (Kim JinSeob)
              </h2>
            </div>
            <div className="hidden lg:block">
              <p className="flex justify-center items-center h-full text-4xl font-bold">
                1991. 11. 29.
              </p>
            </div>
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -5 }}
              className="hidden lg:block overflow-hidden shadow-xl rounded-[15px]"
            >
              <Image
                src={BackImg2}
                alt="두번째 배경 이미지"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </motion.div>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-5 h-full text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:transition hover:duration-500">
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -5 }}
              className="h-1/2 overflow-hidden rounded-tl-[15px] rounded-[15px] shadow-xl"
            >
              <Image
                src={Profile}
                alt="소개페이지 메인 사진"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </motion.div>
            <div className="h-[90%] sm:h-1/2 justify-between flex flex-col">
              <div className="lg:hidden font-jalnan text-black italic">
                <h2 className="text-xl lg:text-3xl font-bold">
                  김진섭(Kim JinSeob)
                </h2>
                <p className="text-lg lg:text-xl font-bold">1991. 11. 29.</p>
              </div>
              <div className="font-jalnan text-lg sm:text-3xl italic ">
                React, NextJS, TypeScript, JavaScript, ReactQuery, Recoil,
                Redux, FramerMotion, TailwindCSS, StyledComponent
              </div>
              <div className="relative text-black">
                <ul>
                  {overlayData.map((data) => (
                    <li
                      key={data.num}
                      className="flex flex-row lg:items-center gap-2 mt-[4px]"
                    >
                      <p className="text-xs sm:text-2xl italic">{data.date}</p>
                      <p className="text-xs sm:text-2xl">{data.title}</p>
                    </li>
                  ))}
                </ul>
                <motion.div
                  className="absolute bottom-0 right-0 flex justify-center items-center font-thin cursor-pointer h-10 hover:bg-black/20 py-1 px-3 rounded-[15px] text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: [0, 1, 0],
                    transition: {
                      duration: 1,
                      repeat: Infinity,
                    },
                  }}
                  onClick={onClickNext}
                >
                  <div className="flex items-center justify-center w-auto">
                    <span className="hidden sm:block text-center">
                      P R O J E C T
                    </span>
                    <FaAngleRight />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
}
