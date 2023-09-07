import styled from 'styled-components';
import icon from '../../assets/CampingList/Ellipse18.png';

const CampingCard = ({ src }) => {
  return (
    <Card>
      <CampImg src={src}></CampImg>
      <CampInfo>
        <Name>성산 캠핑장</Name>
        <NameContainer>
          <CampIcon src={icon} />
          <Address>제주특별시 성산읍 성산로 241</Address>
        </NameContainer>
      </CampInfo>
    </Card>
  );
};

const Card = styled.div`
  width: 21.44rem;
  height: 16.31rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.white};

  border: 1px solid ${({ theme }) => theme.color.semiGray};

  margin-bottom: 1.25rem;
`;

const CampImg = styled.img`
  height: 11.56rem;
`;

const CampInfo = styled.div`
  margin-left: 0.88rem;
  margin-top: 0.625rem;
`;

const CampIcon = styled.img`
  width: 1rem;
  height: 1rem;

  margin-right: 0.25rem;
`;

const NameContainer = styled.div`
  display: flex;
`;

const Name = styled.div`
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;

  margin-bottom: 0.3125rem;
`;

const Address = styled.div`
  font-size: 1rem;
  font-style: normal;
`;

export default CampingCard;
