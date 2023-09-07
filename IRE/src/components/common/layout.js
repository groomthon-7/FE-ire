import styled from "styled-components";

const LayOut = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  height: 100%;
`;

export default LayOut;
