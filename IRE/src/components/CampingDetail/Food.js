import { styled } from 'styled-components';
import a from '../../assets/CampingDetail/a.png';

const Food = ({ url, text }) => {
  return (
    <Container>
      <FoodImg src={a} />
      <Name>애월 24시</Name>
    </Container>
  );
};

const Container = styled.div`
  /* margin-left: 0.5rem; */
`;

const FoodImg = styled.img`
  border-radius: 12px;
  width: 10.3225rem;
  height: 10.5rem;
`;

const Name = styled.div`
  font-weight: 400;
  font-size: 1rem;
`;

export default Food;
