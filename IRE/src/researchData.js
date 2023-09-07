import ocean from "./assets/Research/ocean.png";
import yard from "./assets/Research/yard.png";
import star from "./assets/Research/star.png";
import forest from "./assets/Research/tree.png";
import tent from "./assets/Research/tent.png";
import glamping from "./assets/Research/glamping.png";
import caraban from "./assets/Research/caraban.png";
import all from "./assets/Research/q.png";

export const researchData = [
  {
    index: 0,
    questions: "누구와 함께 가시나요?",
    contents: [
      { title: "혼자", img: "" },
      { title: "친구", img: "" },
      { title: "연인", img: "" },
      { title: "가족", img: "" },
    ],
  },
  {
    index: 1,
    questions: "어떤 자연 환경을 선호하시나요?",
    contents: [
      { title: "바다", img: ocean },
      { title: "들판", img: yard },
      { title: "별", img: star },
      { title: "숲", img: forest },
    ],
  },
  {
    index: 2,
    questions: "어떤 종류의 캠핑을 선호하시나요?",
    contents: [
      { title: "텐트", img: tent },
      { title: "글램핑", img: glamping },
      { title: "카라반", img: caraban },
      { title: "미정", img: all },
    ],
  },
  {
    index: 3,
    questions: "어떤 자연환경을 선호하시나요?",
    contents: [
      { title: "봄", img: "" },
      { title: "여름", img: "" },
      { title: "가을", img: "" },
      { title: "겨울", img: "" },
    ],
  },
  {
    index: 4,
    questions: "마지막으로 참고하면 좋을 사항이 있나요?",
    contents: [
      { title: "애완동물을 동반하고 싶어요.", img: "" },
      { title: "바베큐장이 있으면 좋겠어요.", img: "" },
      { title: "물놀이장이 있으면 좋겠어요.", img: "" },
      { title: "화장실이 있으면 좋겠어요.", img: "" },
    ],
  },
];
