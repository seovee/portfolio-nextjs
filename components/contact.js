import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex flex-row justify-around items-center bg-gradient-to-b from-lime-300 to-emerald-400 w-full h-[100vh]"
    >
      <h2 className="absolute top-10 font-thin">- C O N T A C T -</h2>
      <div>
        <h3 className="font-gmarket text-9xl">CONTACT ME🫡</h3>
        <ul className="flex gap-10 bg-blue-500/50">
          <li>이메일</li>
          <li>깃허브</li>
          <li>블로그</li>
        </ul>
      </div>
      <div className="bg-gray-500/50 w-1/4 h-1/4">
        애니메이션 이미지 추가공간
      </div>
    </section>
  );
}
