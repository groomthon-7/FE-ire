import { styled } from 'styled-components';

import img from '../../assets/CampingDetail/Ellipse 18.png';

const Facility = ({ url, text }) => {
  return (
    <Container>
      <ImgContainer src={img} />
      <div>파트</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 3.375rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
`;

const ImgContainer = styled.img`
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 100%;
`;

export default Facility;
