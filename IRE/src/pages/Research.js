import { useState, useEffect } from "react";
import { researchData } from "../researchData";
import styled from "styled-components";
import Button from "../components/common/button";
import ProgressBar from "../components/Research/ProgressBar";
import SmallCard from "../components/Research/SmallCard";
import MediumCard from "../components/Research/MediumCard";
import { useDispatch } from "react-redux";
import { setPeople, setView, setCamp, setWeather } from "../Redux/action";
import ViewCard from "../components/Research/View";
import LayOut from "../components/common/layout";
import { useSelector } from "react-redux";
import { POST_Research } from "../api/research";
import alert from "../assets/Research/alert.png";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const Research = () => {
  const [curPage, setCurPage] = useState(0); // 현 페이지 index
  const [selectedValue, setSelectedValue] = useState(""); // 선택한 값
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const people = useSelector((state) => state.people);
  const view = useSelector((state) => state.view);
  const weather = useSelector((state) => state.weather);
  const camp = useSelector((state) => state.camp);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const answer1List = ["혼자", "연인", "친구", "가족"];
  const answer2List = ["바다", "들판", "별", "숲"];
  const answer3List = ["텐트", "글램핑", "카라반", "상관없어요"];
  const answer4List = ["봄", "여름", "가을", "겨울"];

  const staticServerUrl = process.env.REACT_APP_PATH || "";

  const navigateList = (data) => {
    navigate(`${staticServerUrl}/campingList/all`, {
      state: {
        ...data,
      },
    });
  };

  useEffect(() => {
    if (selectedValue !== "") {
      setIsOpen(false);
    }
  }, [selectedValue]);

  const NextBtn = () => {
    if (selectedValue === "") {
      setIsOpen(true);
    } else if (curPage === 3) {
      const info = `people: ${people}, view: ${view}, camp: ${camp}, weather: ${weather}`;

      const infos = info.split(", ");

      let infoIndex = 0;

      for (let i = 0; i < [answer1List, answer2List, answer3List].length; i++) {
        const answerList = [answer1List, answer2List, answer3List][i];
        for (const answer of answerList) {
          if (infos[i].substring(6) === answer) {
            const num = (answerList.indexOf(answer) + 1) * Math.pow(10, 2 - i);
            infoIndex += num;
          }
        }
      }

      if (infoIndex % 10 === 1 && Math.floor(infoIndex / 10) % 10 === 1) {
        const data = POST_Research(setIsLoading, isLoading, 1);
        console.log("데이터!", data);
        navigateList(data);
      } else if (
        infoIndex % 10 === 1 &&
        Math.floor(infoIndex / 10) % 10 !== 1
      ) {
        const data = POST_Research(setIsLoading, isLoading, 2);
        console.log("데이터!", data);
        navigateList(data);
      } else if (
        infoIndex % 10 !== 1 &&
        Math.floor(infoIndex / 10) % 10 === 1
      ) {
        const data = POST_Research(setIsLoading, isLoading, 3);
        console.log("데이터!", data);
        navigateList(data);
      } else {
        const data = POST_Research(setIsLoading, isLoading, 4);
        console.log("데이터!", data);
        navigateList(data);
      }
    } else {
      setCurPage(curPage + 1);

      switch (curPage) {
        case 0:
          dispatch(setPeople(selectedValue));
          break;
        case 1:
          dispatch(setView(selectedValue));
          break;
        case 2:
          dispatch(setCamp(selectedValue));
          break;
        case 3:
          dispatch(setWeather(selectedValue));
          break;
        default:
          break;
      }

      setSelectedValue("");
    }
  };

  const PrevBtn = () => {
    setCurPage(curPage - 1);

    switch (curPage) {
      case 0:
        dispatch(setPeople(selectedValue));
        break;
      case 1:
        dispatch(setView(selectedValue));
        break;
      case 2:
        dispatch(setCamp(selectedValue));
        break;
      case 3:
        dispatch(setWeather(selectedValue));
        break;
      default:
        break;
    }

    setSelectedValue("");
  };

  return (
    <LayOut>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <ProgressBar complete={curPage + 1} />
          <Title>{researchData[curPage].questions}</Title>
          <CardContainer>
            {curPage === 1 &&
              researchData[curPage].contents.map((el, idx) => (
                <ViewCard
                  key={idx}
                  num={idx}
                  text={el.title}
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                  img={el.img}
                />
              ))}
            {curPage === 3 &&
              researchData[curPage].contents.map((el, idx) => (
                <MediumCard
                  key={idx}
                  text={el.title}
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                  img={el.img}
                />
              ))}
            {(curPage === 2 || curPage === 0) &&
              researchData[curPage].contents.map((el, idx) => (
                <SmallCard
                  key={idx}
                  text={el.title}
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                  img={el.img}
                />
              ))}
          </CardContainer>
          {isOpen && <Alert src={alert} onClick={() => setIsOpen(false)} />}
          {curPage === 0 ? (
            <BtnContainer>
              <Button type="lg" text="다음" onClick={NextBtn} />
            </BtnContainer>
          ) : (
            <BtnContainer>
              <Button type="sm" text="이전" onClick={PrevBtn} />
              <Button type="md" text="다음" onClick={NextBtn} />
            </BtnContainer>
          )}
        </Container>
      )}
    </LayOut>
  );
};

const Alert = styled.img`
  width: 100%;
  margin-top: auto;
  cursor: pointer;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: 32px;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
  margin-top: 34px;
  margin-bottom: 48px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 14px;
`;

export default Research;
