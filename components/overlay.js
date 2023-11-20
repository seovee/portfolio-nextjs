import { motion } from "framer-motion";
import Image from "next/image";
import Profile2 from "../public/assets/profile/profile2.jpg";
import Profile4 from "../public/assets/profile/profile4.jpg";
import Profile7 from "../public/assets/profile/profile7.jpeg";
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
        <section className="flex flex-row p-12 h-full gap-10">
          <div className="grid grid-cols-2 gap-5 w-1/2">
            <div className="relative overflow-hidden rounded-tl-[25px]">
              <Image
                src={Profile2}
                alt="첫번째 앨범 사진"
                width={600}
                height={600}
                style={{ width: "100%", height: "auto" }}
                className="shadow-md"
              />
            </div>
            <motion.div
              className="flex items-center justify-center overflow-hidden font-giants text-5xl"
              animate={{
                rotate: 360,
                transition: { duration: 0.5, repeat: Infinity, repeatDelay: 1 },
              }}
            >
              Calm
            </motion.div>
            <motion.div
              className="flex items-center justify-center overflow-hidden font-giants text-5xl"
              animate={{
                rotate: 360,
                transition: { duration: 0.8, repeat: Infinity, repeatDelay: 2 },
              }}
            >
              Steady
            </motion.div>
            <div className="relative overflow-hidden">
              <Image
                src={Profile7}
                alt="네번째 앨범 사진"
                width={600}
                height={600}
                style={{ width: "100%", height: "auto" }}
                className="shadow-md"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 w-1/2 h-full">
            <div className="h-1/2 overflow-hidden rounded-tr-[25px]">
              <Image
                src={Profile4}
                alt="소개페이지 사진"
                width={600}
                height={600}
                style={{ width: "100%", height: "auto" }}
                className="shadow-md"
              />
            </div>
            <div className="font-gmarket flex flex-col gap-10">
              <div>
                <p>김진섭(Kim JinSeob), 1991. 11. 29.</p>
                <div className="flex gap-2">
                  {skillData.map((i, index) => (
                    <span
                      key={index}
                      className="inline-block text-xs bg-gray-300 px-2 pt-1 pb-0 rounded-md text-orange-600 font-semibold"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span>Experience</span>
                <ul>
                  <li>
                    ✓ 2022.11.28. - 2022.30.30. 멋쟁이사자처럼 프론트엔드 스쿨
                    4기 수료
                  </li>
                  <li>✓ 2020.07. - 2022.11. 포천시청 공무원</li>
                  <li>✓ 2010.03. - 2018.02. 강원대학교 환경공학과</li>
                </ul>
              </div>
              <div>
                <span>
                  체계가 정립되지 않은 공직업무 수행 중 효율적인 방법을 찾으려
                  노력했습니다. 이경험으로 효율성과 혁신을 추구하는 “개발자”로의
                  전향을 결심하게 되었습니다. 퇴사 후 프론트엔드 부트캠프에
                  참여하여 기초를 다지고 스킬을 익혔습니다. 이제는 효율적이고
                  사용자 친화적인 웹 인터페이스를 구현하는 프론트엔드 개발자로서
                  성장하고 싶습니다.
                </span>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
}
