import { useState } from "react";
import { researchData } from "../researchData";
import styled from "styled-components";
import Button from "../components/common/button";
import ProgressBar from "../components/Research/ProgressBar";

const Research = () => {
  const [curPage, setCurPage] = useState(0); // 현 페이지 index
  const [selectedValue, setSelectedValue] = useState(""); // 선택한 값

  return (
    <Container>
      <ProgressBar />
      <Title>누구와 함께 가시나요?</Title>
      <Button />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 5rem;
`;

const Title = styled.h1`
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
  margin-top: 34px;
  margin-bottom: 48px;
`;

export default Research;
