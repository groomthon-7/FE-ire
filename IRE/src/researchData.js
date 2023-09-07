import ocean from "./assets/Research/ocean.png";
import yard from "./assets/Research/yard.png";
import star from "./assets/Research/star.png";
import forest from "./assets/Research/tree.png";
import tent from "./assets/Research/tent.png";
import glamping from "./assets/Research/glamping.png";
import caraban from "./assets/Research/caraban.png";
import all from "./assets/Research/q.png";
import solo from "./assets/Research/solo.png";
import couple from "./assets/Research/couple.png";
import friend from "./assets/Research/friend.png";
import family from "./assets/Research/family.png";
import inactiveOcean from "./assets/Research/1.png";
import inactiveYard from "./assets/Research/2.png";
import inactiveStar from "./assets/Research/3.png";
import inactiveForest from "./assets/Research/4_gray.png";

export const researchData = [
  {
    index: 0,
    questions: '누구와 함께 가시나요?',
    contents: [
      { title: "혼자", img: solo },
      { title: "연인", img: couple },
      { title: "친구", img: friend },
      { title: "가족", img: family },
    ],
  },
  {
    index: 1,
    questions: '어떤 자연 환경을 선호하시나요?',
    contents: [
      { title: "바다", img: [ocean, inactiveOcean] },
      { title: "들판", img: [yard, inactiveYard] },
      { title: "별", img: [star, inactiveStar] },
      { title: "숲", img: [forest, inactiveForest] },
    ],
  },
  {
    index: 2,
    questions: '어떤 종류의 캠핑을 선호하시나요?',
    contents: [
      { title: "텐트", img: tent },
      { title: "글램핑", img: glamping },
      { title: "카라반", img: caraban },
      { title: "미정", img: all },
    ],
  },
  {
    index: 3,
    questions: '어떤 자연환경을 선호하시나요?',
    contents: [
      { title: '봄', img: '' },
      { title: '여름', img: '' },
      { title: '가을', img: '' },
      { title: '겨울', img: '' },
    ],
  },
];
