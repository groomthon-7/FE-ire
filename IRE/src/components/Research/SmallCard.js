import styled from "styled-components";
import { useState, useEffect } from "react";
import theme from "../../style/theme";

const SmallCard = ({ text, img, selectedValue, setSelectedValue }) => {
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
    <Container onClick={handleClick} c={clicked}>
      <Text c={clicked}>{text}</Text>
    </Container>
  );
};

const Text = styled.p`
  color: var(--, #292929);
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  margin-left: 16px;
  margin-top: -45px;
  color: ${(props) => (props.c === "false" ? "black" : "white")};
`;

const Container = styled.div`
  display: flex;
  width: 165px;
  height: 118px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #f4f4f4;
  background: ${(props) =>
    props.c === "false" ? "white" : theme.color.mainColor};
  box-shadow: 0px 4px 14px 0px #f3f3f3;
  cursor: pointer;
`;

export default SmallCard;
