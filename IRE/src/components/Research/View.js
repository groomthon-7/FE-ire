import styled from 'styled-components';
import { useState, useEffect } from 'react';

const ViewCard = ({ text, num, img, selectedValue, setSelectedValue }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    setSelectedValue(text);
  };

  // 중복 선택 제한
  useEffect(() => {
    if (text !== selectedValue) {
      setClicked('false');
    }
  }, [selectedValue]);

  return (
    <Container onClick={handleClick} c={clicked}>
      <Text c={clicked} star={num === 2 ? 'star' : ''}>
        {text}
      </Text>
      {clicked ? <Img src={img[1]} /> : <Img src={img[0]} />}
    </Container>
  );
};

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Text = styled.p`
  position: absolute;
  color: var(--, #292929);
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  margin-left: 16px;
  margin-top: -125px;
  color: ${(props) => (props.star === 'star' ? 'white' : 'black')};
`;

const Container = styled.div`
  display: flex;
  width: 165px;
  height: 196px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #f4f4f4;
  background: ${(props) => (props.c === false ? 'white' : 'none')};
  box-shadow: 0px 4px 14px 0px #f3f3f3;
  cursor: pointer;
  position: relative;
`;

export default ViewCard;
