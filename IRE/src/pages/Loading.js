import React, { useState } from 'react';
import styled from 'styled-components';
import spinImg from '../assets/Loading/spin.png';
import spinner from '../assets/Loading/Rolling-1s-244px.gif';

const Loading = () => {
  return (
    <Container>
      <Title>취향에 맞는</Title>
      <Title>캠핑장을 찾고 있어요</Title>
      <SpinnerContainer>
        <Spinner src={spinner} />
        <Character src={spinImg} />
      </SpinnerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 0.5625rem;
`;

const SpinnerContainer = styled.div`
  position: relative;
`;

const Spinner = styled.img`
  width: 8rem;
  height: 8rem;
`;

const Character = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 59.257px;
  height: 40.147px;
`;

export default Loading;
