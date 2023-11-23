// Image에서 사진은 import해서 보내야 사진이 보여진다.
import Project_1 from "../public/assets/project/project1.png";
import Project_2 from "../public/assets/project/project2.png";
import Project_3 from "../public/assets/project/project3.png";

// 소개 Data
export const aboutData = [
  {
    title: "프론트엔드 스페셜리스트로 성장하고 싶습니다.",
    contetnt:
      "프론트엔드 기초 뿐만아니라 Next.js, Veu.js, TypeScript와 다양한 기술스택을 경험하며, 매번 업데이트되는 기술스택을 숙지함으로써 프론트엔드 숙명에 적응하고 있습니다.",
  },
  {
    title: "어려움은 성장의 기회라 생각합니다.",
    contetnt:
      "경험을 통해 팀원은 이끄는 법, 협업의 어려움 등에 대한 인사이트를 얻을 수 있었으며, 실무적인 협업을 빨리 경험하고 성장을 하고싶다는 열망이 생겼습니다.",
  },
  {
    title: "함께 일하고 싶은 동료가 되고 싶습니다.",
    contetnt:
      "경험을 바탕으로 개발자로서도 주변 분위기를 밝히고 동료들과 원활한 협업을 이뤄낼 수 있는 장점을 통해 프로젝트를 성공적으로 완수해 나가겠습니다. ",
  },
];

export const skillData = [
  "HTML / CSS",
  "JavaScript",
  "React",
  "NextJS",
  "Vue.js",
  "TypeScript",
  "Gatsby",
  "Github",
  "Notion",
];

// 프로젝트 Data
export const projectData = [
  {
    num: 1,
    title: "포트폴리오 웹사이트",
    category: "NextJS 프로젝트 / 개인프로젝트",
    date: "2023. 11. 07. ~ 11. 24.",
    desc: "첫 포트폴리오 웹페이지입니다. NextJS 만들었고, framer-motion, Gsap을 이용한 애니메이션을 통해 인터렉티브하게 구현해보았습니다.",
    img: Project_1,
    url: "https://portfolio-nextjs-tan-seven.vercel.app/",
    github_url: "https://github.com/seovee/portfolio-nextjs",
    skill: ["NextJS", "React", "Framer-motion", "Gsap", "TypeWriter-effect"],
  },
  {
    num: 2,
    title: "넷플릭스 클론 사이트",
    category: "React 프로젝트 / 개인프로젝트",
    date: "2023. 11. 07. ~ 11. 24.",
    desc: "React를 이용한 넷플릭스 클론코딩입니다. 영화API를 불러와 최신, 인기 영화의 정보를 전달합니다.",
    img: Project_2,
    url: "https://seovee.github.io/masterClass-Fin",
    github_url: "https://github.com/seovee/masterClass-Fin",
    skill: ["React", "TypeScript", "Framer-motion", "Recoil", "React-Route"],
  },
  {
    num: 3,
    title: "I's gallary 갤러리",
    category: "React 프로젝트 / 팀프로젝트(5명)",
    date: "2023. 11. 07. ~ 11. 24.",
    desc: "리액트, framer-motion, firebase를 이용한 갤러리 웹페이지입니다. 멋쟁이사자처럼 FE스쿨 4기에서 참여했던 프로젝트입니다.",
    img: Project_3,
    url: "https://likelion-fe4-rp11.github.io/Asparagus/",
    github_url: "https://github.com/seovee/masterClass-Fin",
    skill: ["React", "Framer-motion", "Firebase", "Figma"],
  },
  {
    num: 4,
    title: "티빙 클론 사이트 - Taing",
    category: "React 프로젝트 / 팀프로젝트(5명)",
    date: "2023. 11. 07. ~ 11. 24.",
    desc: "리액트, framer-motion, firebase를 이용한 갤러리 웹페이지입니다.",
    img: Project_3,
    url: "https://likelion-fe4-rp11.github.io/Asparagus/",
    github_url: "https://github.com/seovee/masterClass-Fin",
    skill: ["NextJS", "React", "Framer-motion", "Gsap", "TypeWriter-effect"],
  },
  {
    num: 5,
    title: "회원가입 페이지",
    category: "React 프로젝트 / 팀프로젝트(5명)",
    date: "2023. 11. 07. ~ 11. 24.",
    desc: "리액트, framer-motion, firebase를 이용한 갤러리 웹페이지입니다.",
    img: Project_3,
    url: "https://likelion-fe4-rp11.github.io/Asparagus/",
    github_url: "https://github.com/seovee/masterClass-Fin",
    skill: ["NextJS", "React", "Framer-motion", "Gsap", "TypeWriter-effect"],
  },
  {
    num: 6,
    title: "반응형 구현 페이지",
    category: "React 프로젝트 / 팀프로젝트(5명)",
    date: "2023. 11. 07. ~ 11. 24.",
    desc: "리액트, framer-motion, firebase를 이용한 갤러리 웹페이지입니다.",
    img: Project_3,
    url: "https://likelion-fe4-rp11.github.io/Asparagus/",
    github_url: "https://github.com/seovee/masterClass-Fin",
    skill: ["NextJS", "React", "Framer-motion", "Gsap", "TypeWriter-effect"],
  },
];
