// Image에서 사진은 import해서 보내야 사진이 보여진다.
import Project_1 from "../public/assets/project/project1.png";
import Project_2 from "../public/assets/project/project2.png";
import Project_3 from "../public/assets/project/project3.png";
import Project_4 from "../public/assets/project/project4.png";
import Project_5 from "../public/assets/project/project5.png";
import Project_6 from "../public/assets/project/project6.png";
import Project_7 from "../public/assets/project/project7.png";

// NavBar Data
export const navBarData = [
  { num: 1, title: "HOME", asPath: "/#" },
  { num: 2, title: "ABOUT", asPath: "/#about" },
  { num: 3, title: "PROJECT", asPath: "/#project" },
  { num: 4, title: "CONTACT", asPath: "/#contact" },
];

// 소개 Data
export const aboutData = [
  {
    num: 1,
    title: "매일 studying 프론트엔드 개발자.",
    contetnt:
      "비전공 프론트엔드 개발자로서 부족한 정보량을 극복하기 위해 매일 조금씩 정보를 정리하고, 공식 문서를 반복적으로 읽는 노력을 하였습니다. 덕분에 필요 기술 스택을 쌓을 수 있었고, 항상 도전적인 자세로 일에 임하고자 합니다.",
  },
  {
    num: 2,
    title: "코드에 Life를 불어넣는 것을 좋아합니다.",
    contetnt:
      "웹 애니메이션은 사용자 경험을 더욱 풍부하게 만들어주는 힘이라고 생각합니다. 이를 통해 사용자에게 이야기를 전달하는 것을 즐기며, 웹페이지를 탐험하는 과정에서의 매력을 찾을 수 있도록 노력합니다.",
  },
  {
    num: 3,
    title: "Ice Breaking능력과 상대방에게 호기심이 많습니다.",
    contetnt:
      "팀원과 즐거운 협업은 프로젝트 성공에 중요한 역할을 합니다. 제 긍정적인 태도와 친화력은 팀에 활기를 불어넣으며, 매번 함께 일하고 싶은 동료가 되기 위해 노력합니다.",
  },
];

// 소개 오버레이 Data
export const overlayData = [
  {
    num: 1,
    date: `2022.12. - 2023.04.`,
    title: `멋쟁이사자처럼 4기 수료`,
  },
  { num: 2, date: `2020.07. - 2022.11.`, title: `포천시청 공무원 재직` },
  { num: 3, date: `2010.03. - 2018.02.`, title: `강원대학교 환경공학과` },
];

// 프로젝트 Data
export const projectData = [
  {
    num: 1,
    title: "실타래(Siltarae)",
    category: "팀프로젝트(4명) - 위버즈",
    date: "2023. 11. 19. ~ 2023. 12. 29.",
    refacDate: "2023. 1. 2. ~ 진행중",
    desc: "백엔드 협업으로 구현한 프로젝트입니다. NextJS, TypeScript를 기반으로 '실수'를 공유하는 웹페이지를 구현했습니다.",
    img: Project_7,
    url: "https://github.com/coding-union-kr/siltarae-fe",
    github_url: "https://github.com/coding-union-kr/siltarae-fe",
    skill: [
      "NextJS",
      "TypeScript",
      "Tanstack-Query",
      "Axios",
      "Tailwind",
      "YarnBerry",
    ],
  },
  {
    num: 2,
    title: "포트폴리오 웹페이지",
    category: "개인프로젝트",
    date: "2023. 11. 07. ~ 11. 29.",
    refacDate: "수시로 업데이트",
    desc: "NextJS로 만든 포트폴리오 웹페이지입니다. TailwindCSS로 모바일, 태블릿, 데스크탑 반응형을 적용했고, Framer-Motion, Gsap을 이용한 인터렉티브한 애니메이션 페이지를 만들었습니다.",
    img: Project_1,
    url: "https://portfolio-nextjs-tan-seven.vercel.app/",
    github_url: "https://github.com/seovee/portfolio-nextjs",
    skill: [
      "NextJS",
      "React",
      "TailwindCSS",
      "Framer-motion",
      "Gsap",
      "TypeWriter-effect",
    ],
  },
  {
    num: 3,
    title: "넷플릭스 Clone 웹페이지",
    category: "개인프로젝트 - Nomad Coder",
    date: "2023. 07. 17. ~ 07. 24.",
    refacDate: "2024. 01. 17 ~ 진행중",
    desc: "React, TypeScript를 이용한 넷플릭스 클론코딩입니다. fetch된 영화 API를 React-Query로 업데이트하도록 구현했습니다.",
    img: Project_2,
    url: "https://seovee.github.io/masterClass-Fin",
    github_url: "https://github.com/seovee/masterClass-Fin",
    skill: [
      "React",
      "TypeScript",
      "React-route",
      "React-Query",
      "Framer-motion",
    ],
  },
  {
    num: 4,
    title: "I's gallary 갤러리",
    category: "팀프로젝트(5명) - 멋쟁이사자처럼",
    date: "2023. 03. 01. ~ 03. 29.",
    refacDate: "예정",
    desc: "React, Vite로 구성한 SNS 웹페이지입니다. 기획 & 디자인 & 개발을 직접 수행했습니다. Firebase로 회원가입/로그인을 연동하여 구현하고, Framer-Motion을 이용하여 애니메이션을 추가했습니다.",
    img: Project_3,
    url: "https://likelion-fe4-rp11.github.io/Asparagus/",
    github_url: "https://github.com/seovee/masterClass-Fin",
    skill: ["React", "Framer-motion", "Firebase", "Figma"],
  },
  {
    num: 5,
    title: "티빙 클론 사이트 - Taing",
    category: "팀프로젝트(5명) - 멋쟁이사자처럼",
    date: "2023. 01. 27. ~ 02. 09.",
    refacDate: "예정",
    desc: "순수 HTML, CSS, JavaScript만으로 제작한 Tving 클론코딩 웹페이지입니다. Swiper 라이브러리를 이용해 캐러셀 기능을 추가했고, Fetch를 이용해 이미지를 불러오게 구현했습니다.",
    img: Project_4,
    url: "https://likelion-fe4-rp11.github.io/Asparagus/",
    github_url: "https://github.com/seovee/masterClass-Fin",
    skill: ["NextJS", "React", "Framer-motion", "Gsap", "TypeWriter-effect"],
  },
  {
    num: 6,
    title: "회원가입 페이지",
    category: "개인프로젝트 - 원티드",
    date: "2023. 08. 12. ~ 08. 16.",
    refacDate: "예정",
    desc: "React-hook-form 라이브러리를 이용한 회원가입, 로그인 기능구현 웹페이지입니다.",
    img: Project_5,
    url: "https://seovee.github.io/wanted-pre-onboarding-frontend/",
    github_url: "https://github.com/seovee/wanted-pre-onboarding-frontend",
    skill: ["React", "React-Router", "React-hook-form", "Style-Component"],
  },
  {
    num: 7,
    title: "반응형 구현 페이지",
    category: "개인프로젝트 - 원티드",
    date: "2023. 08. 21. ~ 08. 24.",
    refacDate: "예정",
    desc: `HTML, CSS로만 반응형을 연습한 웹페이지입니다. 데스크톱, 태블릿, 모바일용 3가지를 순수 HTML, CSS로 적용해보았습니다.`,
    img: Project_6,
    url: "http://seovee.github.io/wanted-fe-challenge/",
    github_url: "https://github.com/seovee/wanted-fe-challenge",
    skill: ["HTML", "CSS"],
  },
];
