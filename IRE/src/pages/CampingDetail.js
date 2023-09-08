import { styled } from "styled-components";
import backButton from "../assets/CampingDetail/chevron-left.png";
import thumnail from "../assets/CampingDetail/Frame 1000003974.png";
import phone from "../assets/CampingDetail/phone.png";
import pin from "../assets/CampingDetail/pin.png";
import LayOut from "../components/common/layout";
import Facility from "../components/CampingDetail/Facility";
import Mart from "../components/CampingDetail/Mart";
import Food from "../components/CampingDetail/Food";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getDetail } from "../api/getlist";
import { useEffect, useState } from "react";
import icons from "../assets/CampingDetail/icons.png";
import { useParams } from "react-router-dom";

const CampingDetail = () => {
  const location = useLocation();
  const [detailData, setDetailData] = useState([]);

  // const { id } = location.state || {};
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getDetail(id);
      setDetailData(res);
      console.log("디테일 데이터", res);
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <Template>
        <Back src={backButton} onClick={() => navigate(-1)} />
        <CampImg style={{ backgroundImage: `url(${detailData.img})` }} />
      </Template>
      <LayOut>
        <InfoContainer>
          <NameContainer>
            <Name>{detailData.businessName}</Name>
          </NameContainer>
          <DetailInfo>
            {/* <DatailContainer> */}
            {/* <Icon src={pin} /> */}
            {/* <Text>{detailData.address}</Text> */}
            {/* </DatailContainer> */}
            <DatailContainer>
              <Icon src={phone} />
              <Text>{detailData.phone}</Text>
            </DatailContainer>
          </DetailInfo>
        </InfoContainer>
        <Hr />
        <FacilityContainer src={icons} />
      </LayOut>
      <GrayBox />

      <LayOut>
        <NameContainer mart>
          <Name>가까운 마트도 있어요</Name>
          <MartContainer>
            <Mart />
            <Mart />
          </MartContainer>
        </NameContainer>
      </LayOut>

      <GrayBox />
      <LayOut>
        <NameContainer mart>
          <Name>이 캠핑장과 가까운 음식점이에요</Name>
        </NameContainer>
        <MartContainer>
          <Food />
          <Food />
        </MartContainer>

        <NameContainer mart>
          <Name>문화시설</Name>
        </NameContainer>
        <MartContainer>
          <Food />
          <Food />
        </MartContainer>

        <NameContainer mart>
          <Name>문화시설</Name>
        </NameContainer>
        <MartContainer>
          <Food />
          <Food />
        </MartContainer>
      </LayOut>
    </div>
  );
};

const Template = styled.div`
  width: 375px;
  position: absolute;
  top: 0;
`;

const Back = styled.img`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1rem;
  margin-top: 0.75rem;
`;

const CampImg = styled.img`
  height: 21rem;
  width: 100%;
  z-index: -1;
`;

const NameContainer = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: ${(props) => (props.mart ? "1rem" : "21rem")};
`;

const Name = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
`;

const DetailInfo = styled.div`
  margin-top: 1rem;
`;

const InfoContainer = styled.div`
  margin-top: 22rem;
`;

const Icon = styled.img`
  width: 0.9rem;
  height: 0.9rem;
  margin-right: 0.25rem;
`;

const DatailContainer = styled.div`
  display: flex;
  font-weight: 400;
`;

const Text = styled.div`
  margin-right: 0.5rem;
`;

const MapButton = styled.button`
  border-radius: 8px;
  background: #ececec;
  padding: 0.2rem 0.75rem;
  align-items: center;
  font-weight: 700;
  font-size: 0.75rem;
  border: 0;
`;

const Hr = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid #ececec;
`;

const FacilityContainer = styled.img`
  width: 100%;
  height: 48px;
`;

const GrayBox = styled.div`
  width: 100%;
  height: 1rem;
  background-color: #ececec;
  margin-top: 1rem;
`;

const MartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export default CampingDetail;
