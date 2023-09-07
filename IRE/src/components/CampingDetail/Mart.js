import { styled } from 'styled-components';
import a from '../../assets/CampingDetail/a.png';

const Mart = ({ url, text }) => {
  return (
    <Container>
      <MartImg src={a} />
      <Name>애월 24시</Name>
    </Container>
  );
};

const Container = styled.div`
  /* margin-left: 0.5rem; */
`;

const MartImg = styled.img`
  border-radius: 12px;
  width: 10rem;
  height: 6.75rem;
`;

const Name = styled.div`
  font-weight: 400;
  font-size: 1rem;
`;

export default Mart;
