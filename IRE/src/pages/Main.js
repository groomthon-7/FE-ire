import bg from "../assets/Research/bg.png";
import styled from "styled-components";
import Button from "../components/common/button";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>캠핑하러 이레옵써</Title>
      <Content>도심의 복잡함에 지친 캠핑족들을 위한 맞춤형 캠핑장 추천</Content>

      <BtnContainer>
        <Button
          type="lg"
          text="시작하기"
          onClick={() => navigate("./research")}
        />
      </BtnContainer>
    </Container>
  );
};

const Content = styled.p`
  color: white;
  line-height: 22px; /* 137.5% */
  margin-top: 7px;
  align-self: flex-start;
  margin-left: 1rem;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: 32px;
  cursor: pointer;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${bg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 28px;
  line-height: 36px;
  font-weight: 700;
  margin: 0;
  color: white;
  margin-top: 126px;
  align-self: flex-start;
  margin-left: 1rem;
`;

const BG = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -2;
`;

export default Main;
