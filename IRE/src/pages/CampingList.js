import styled from "styled-components";
import Button from "../components/CampingList/Button";
import CampingCard from "../components/CampingList/Card";

import icon from "../assets/CampingList/Ellipse18.png";
import { useEffect, useState } from "react";
import LayOut from "../components/common/layout";
import { getAllCampingApi } from "../api/getCampingList";

import allData from "./all";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CampingList = () => {
  const location = useLocation();

  const data = { ...location.state };

  console.log("캠핑리스트", data);

  // const filteredData = allData.map((el, idx) => ({
  //   businessName: el.businessName,
  //   longitude: el.longitude,
  //   latitude: el.latitude,
  // }));

  // console.log('필터', filteredData);

  // [[이름, 위도, 경도],[이름, 위도, 경도]]

  const navigate = useNavigate();

  return (
    <LayOut>
      <CampingListLayout>
        <Header>
          <ButtonContainer>
            <Button text="전체" active />
          </ButtonContainer>
          {/* <MapIcon
            src={icon}
            // onClick={() =>
            //   navigate('/campingMap', {
            //     state: {
            //       name: data.businessName,
            //       longitude: data.longitude,
            //       latitude: data.latitude,
            //     },
            //   })
            // }
          /> */}
        </Header>

        <CampingListContainer>
          {data.map((item) => (
            <CampingCard data={item} />
          ))}
        </CampingListContainer>
      </CampingListLayout>
    </LayOut>
  );
};

const CampingListLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.875rem;
  width: 100%;

  margin-bottom: 5rem;
`;

const CampingListContainer = styled.div`
  margin-top: 1.25rem;
`;

const MapIcon = styled.img`
  height: 1.8125rem;
  width: 1.8125rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

export default CampingList;
