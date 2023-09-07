import styled from "styled-components";
import circle1 from "../../assets/Research/circle1.png";
import circle2 from "../../assets/Research/circle2.png";

const ProgressBar = ({ complete }) => {
  return (
    <Container>
      {Array.from({ length: complete }).map((_, index) => (
        <Circle2 key={index} src={circle2} />
      ))}
      {Array.from({ length: 4 - complete }).map((_, index) => (
        <Circle1 key={index} src={circle1} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 10px;
  margin-top: 5rem;
`;

const Circle1 = styled.img`
  margin-right: 12px;
  width: 10px;
  height: 10px;
`;

const Circle2 = styled.img`
  margin-right: 12px;
  width: 10px;
  height: 10px;
`;

export default ProgressBar;
