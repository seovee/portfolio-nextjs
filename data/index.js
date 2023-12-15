// Image에서 사진은 import해서 보내야 사진이 보여진다.
import Project_1 from "../public/assets/project/project1.png";
import Project_2 from "../public/assets/project/project2.png";
import Project_3 from "../public/assets/project/project3.png";
import Project_4 from "../public/assets/project/project4.png";
import Project_5 from "../public/assets/project/project5.png";
import Project_6 from "../public/assets/project/project6.png";

// 소개 Data
export const aboutData = [
  {
    title: "프론트엔드 스페셜리스트로 성장하고 싶습니다.",
    contetnt:
      "프론트엔드 기본교육 뿐만아니라 Next.js, Veu.js, TypeScript와 다양한 기술스택을 경험하며, 매번 업데이트되는 기술스택을 숙지함으로써 프론트엔드 숙명에 적응하고 있습니다.",
  },
  {
    title: "어려움은 성장의 기회라 생각합니다.",
    contetnt:
      "2가지 프로젝트를 경험하며 팀원은 이끄는 방법, 협업의 어려움 등에 대한 인사이트를 얻을 수 있었으며, 실무적인 경험을 더해 더욱 성장하고 싶은 열망이 있습니다.",
  },
  {
    title: "함께 일하고 싶은 동료가 되고 싶습니다.",
    contetnt:
      "긍정적인 분위기로 모범 공무원상을 받았던 경험으로 개발자가 돼서도 주변 분위기를 밝히고 동료들과 원활한 협업을 이끌어 프로젝트를 성공적으로 완수해 나가겠습니다.",
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
    category: "개인프로젝트",
    date: "2023. 11. 07. ~ 11. 29.",
    refacDate: "",
    desc: "NextJS로 만든 포트폴리오 웹페이지입니다. Framer-Motion, Gsap을 이용한 애니메이션을 통해 통통튀는 컨셉으로 인터렉티브하게 구현해보았습니다.",
    img: Project_1,
    url: "https://portfolio-nextjs-tan-seven.vercel.app/",
    github_url: "https://github.com/seovee/portfolio-nextjs",
    skill: ["NextJS", "React", "Framer-motion", "Gsap", "TypeWriter-effect"],
  },
  {
    num: 2,
    title: "넷플릭스 클론 사이트",
    category: "개인프로젝트 - Nomad Coder",
    date: "2023. 07. 17. ~ 07. 24.",
    refacDate: "예정",
    desc: "React, TypeScript를 이용한 넷플릭스 클론코딩입니다. Recoil로 상태관리를 하고, React-Query로 API를 받아와 최신, 인기 영화를 보여줍니다.",
    img: Project_2,
    url: "https://seovee.github.io/masterClass-Fin",
    github_url: "https://github.com/seovee/masterClass-Fin",
    skill: [
      "React",
      "TypeScript",
      "Recoil",
      "React-route",
      "Framer-motion",
      "React-Query",
    ],
  },
  {
    num: 3,
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
    num: 4,
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
    num: 5,
    title: "회원가입 페이지",
    category: "개인프로젝트 - 원티드",
    date: "2023. 08. 12. ~ 08. 16.",
    refacDate: "예정",
    desc: "회원가입, 로그인 기능구현 웹페이지입니다.",
    img: Project_5,
    url: "https://seovee.github.io/wanted-pre-onboarding-frontend/",
    github_url: "https://github.com/seovee/wanted-pre-onboarding-frontend",
    skill: ["React", "React-Router", "Style-Component"],
  },
  {
    num: 6,
    title: "반응형 구현 페이지",
    category: "개인프로젝트 - 원티드",
    date: "2023. 08. 21. ~ 08. 24.",
    refacDate: "예정",
    desc: `HTML, CSS로만 반응형을 구현한 웹페이지입니다. 데스크톱, 태블릿, 모바일용 3가지 레이아웃을 적용했습니다.`,
    img: Project_6,
    url: "http://seovee.github.io/wanted-fe-challenge/",
    github_url: "https://github.com/seovee/wanted-fe-challenge",
    skill: ["HTML", "CSS"],
  },
];
