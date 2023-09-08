import styled from "styled-components";
import icon from "../../assets/CampingList/Vector-Blue.png";

const CampingCard = ({ data }) => {
  return (
    <Card>
      <CampImg style={{ backgroundImage: `url(${data.img})` }}></CampImg>
      <CampInfo>
        <Name>{data.businessName}</Name>
        <NameContainer>
          <CampIcon src={icon} />
          <Address>{data.address}</Address>
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
  width: 100%;
  background-size: 50px 30px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px 12px 0px 0px;
`;

const CampInfo = styled.div`
  margin-left: 0.88rem;
  margin-top: 0.625rem;
`;

const CampIcon = styled.img`
  width: 0.8rem;
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
  font-size: 0.9rem;
  font-style: normal;
`;

export default CampingCard;
