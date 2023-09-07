import { useState } from "react";
import { researchData } from "../researchData";
import styled from "styled-components";
import Button from "../components/common/button";
import ProgressBar from "../components/Research/ProgressBar";
import SmallCard from "../components/Research/SmallCard";
import MediumCard from "../components/Research/MediumCard";
import { useDispatch } from "react-redux";
import {
  setPeople,
  setView,
  setCamp,
  setWeather,
  setOther,
} from "../Redux/action";
import ViewCard from "../components/Research/View";
import LayOut from "../components/common/layout";
import { useSelector } from "react-redux";

const Research = () => {
  const [curPage, setCurPage] = useState(0); // 현 페이지 index
  const [selectedValue, setSelectedValue] = useState(""); // 선택한 값

  //   const peopleValue = useSelector((state) => state.people); // 'people'는 Redux 스토어의 상태 이름에 맞게 수정
  //   console.log("peopleVal", peopleValue);

  const dispatch = useDispatch();

  const NextBtn = () => {
    if (curPage === 5) {
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
        case 4:
          dispatch(setOther(selectedValue));
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
      case 4:
        dispatch(setOther(selectedValue));
        break;
      default:
        break;
    }

    setSelectedValue("");
  };

  return (
    <LayOut>
      <Container>
        <ProgressBar complete={curPage + 1} />
        <Title>{researchData[curPage].questions}</Title>
        <CardContainer>
          {curPage === 1
            ? researchData[curPage].contents.map((el, idx) => (
                <ViewCard
                  key={idx}
                  text={el.title}
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                  img={el.img}
                />
              ))
            : curPage === 3
            ? researchData[curPage].contents.map((el, idx) => (
                <MediumCard
                  key={idx}
                  text={el.title}
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                  img={el.img}
                />
              ))
            : researchData[curPage].contents.map((el, idx) => (
                <SmallCard
                  key={idx}
                  text={el.title}
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                />
              ))}
        </CardContainer>
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
    </LayOut>
  );
};

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
