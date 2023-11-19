import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { aboutData } from "../data/index";
import { useState } from "react";
import Button from "./Button/button";
import { useRouter } from "next/router";
import Profile from "../public/assets/profile/profile.jpeg";
import Profile2 from "../public/assets/profile/profile2.jpg";
import Profile3 from "../public/assets/profile/profile3.jpg";
import Profile4 from "../public/assets/profile/profile4.jpg";
import Profile5 from "../public/assets/profile/profile5.jpg";
import Profile6 from "../public/assets/profile/profile6.jpg";

export default function About() {
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.425, 0.48],
    ["rgb(125 211 252)", "rgb(253 186 116)"]
  );
  const [view, setView] = useState(false);
  const toggleView = () => {
    setView((prev) => !prev);
    router.push("#about");
  };

  return (
    <section
      id="about"
      className="relative flex flex-col justify-center items-center"
    >
      <AnimatePresence>
        <motion.div
          className=" h-[100vh] w-full flex justify-evenly items-center"
          style={{ scrollYProgress, backgroundColor }}
          key="aboutContainer"
        >
          <h2 className="absolute top-10 font-thin">- A B O U T -</h2>
          <motion.div
            className="h-[32rem] w-[32rem]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.2, duration: 1 },
            }}
          >
            <Image
              src={Profile}
              alt="김진섭의 프로필 사진"
              width="auto"
              height="auto"
              className="rounded-full shadow-2xl"
            />
          </motion.div>
          <motion.div
            className="w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.2, duration: 1 },
            }}
          >
            <ul className="cursor-default">
              {aboutData.map((data, index) => (
                <li key={index}>
                  <motion.p
                    className="font-gmarket text-2xl mt-10 mb-1 font-medium hover:underline hover:underline-offset-8"
                    whileHover={{
                      scale: 1.1,
                      x: 10,
                      fontWeight: 800,
                      color: "rgb(0, 128, 255)",
                      transition: {
                        type: "tween",
                      },
                    }}
                  >
                    {data.title}
                  </motion.p>
                  <p className="font-thin text-xl">{data.contetnt}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        {/* 오버레이 */}
        {view ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
            className="fixed top-0 w-full h-full bg-black/50 z-20"
            onClick={toggleView}
            key="overlay"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute left-0 right-0 top-[100px] h-[70vh] w-[80vw] mx-auto my-0 rounded-[25px] bg-white "
            >
              <section className="flex flex-row p-10 h-full gap-10">
                <div className="flex flex-row justify-center items-center w-1/2 h-full">
                  <Image
                    src={Profile2}
                    alt="김진섭의 프로필 사진"
                    width={600}
                    height={600}
                    style={{ width: "40%", height: "auto" }}
                    className="shadow-2xl"
                  />
                  <Image
                    src={Profile3}
                    alt="김진섭의 프로필 사진"
                    width={600}
                    height={600}
                    style={{ width: "40%", height: "auto" }}
                    className="shadow-2xl"
                  />
                  <Image
                    src={Profile4}
                    alt="김진섭의 프로필 사진"
                    width={600}
                    height={600}
                    style={{ width: "40%", height: "auto" }}
                    className="shadow-2xl"
                  />
                  <Image
                    src={Profile5}
                    alt="김진섭의 프로필 사진"
                    width={600}
                    height={600}
                    style={{ width: "40%", height: "auto" }}
                    className="shadow-2xl"
                  />
                </div>
                <div className=" justify-center items-center w-1/2 h-full">
                  <p>이름 : 김진섭</p>
                  <p>생년월일 : 1991년 11월 29일</p>
                  <p>별자리 : 사수자리</p>
                  <p>MBTI : INFJ</p>
                  <p>
                    간단소개 : 체계가 정립되지 않은 공직업무 수행 중 효율적인
                    방법을 찾으려 노력했습니다. 이경험으로 효율성과 혁신을
                    추구하는 “개발자”로의 전향을 결심하게 되었습니다. 퇴사 후
                    프론트엔드 부트캠프에 참여하여 기초를 다지고 스킬을
                    익혔습니다. 이제는 효율적이고 사용자 친화적인 웹
                    인터페이스를 구현하는 프론트엔드 개발자로서 성장하고
                    싶습니다.
                  </p>
                </div>
              </section>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <Button onClick={toggleView}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 1.5 } }}
          className="font-gmarket text-sm"
        >
          더 알아보기 🤔
        </motion.p>
      </Button>
    </section>
  );
}
