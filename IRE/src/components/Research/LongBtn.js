import styled from "styled-components";
import { useState, useEffect } from "react";
import theme from "../../style/theme";

const LongBtn = ({ text, selectedValue, setSelectedValue }) => {
  const [clicked, setClicked] = useState("false");

  const handleClick = () => {
    setClicked(!clicked);
    setSelectedValue(text);
  };

  // 중복 선택 제한
  useEffect(() => {
    if (text !== selectedValue) {
      setClicked("false");
    }
  }, [selectedValue]);

  return (
    <Center>
      <Container onClick={handleClick} c={clicked}>
        <Text c={clicked}>{text}</Text>
      </Container>
    </Center>
  );
};

const Center = styled.div``;

const Text = styled.p`
  color: var(--, #292929);
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  margin-left: 16px;
  color: ${(props) => (props.c === "false" ? "black" : "white")};
`;

const Container = styled.div`
  display: flex;
  height: 48px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #eaeaea;
  background: ${(props) =>
    props.c === "false" ? "white" : theme.color.mainColor};
  box-shadow: 0px 4px 14px 0px #f3f3f3;
  margin-bottom: 12px;
`;

export default LongBtn;
