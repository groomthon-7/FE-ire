import styled from 'styled-components';
import Button from '../components/CampingList/Button';
import CampingCard from '../components/CampingList/Card';

import icon from '../assets/CampingList/Ellipse18.png';
import { useEffect, useState } from 'react';
import LayOut from '../components/common/layout';
import { getAllCampingApi } from '../api/getCampingList';

import allData from './all';

const CampingList = ({ category }) => {
  const showAllData = () => {
    const res = getAllCampingApi();
    return res;
  };

  return (
    <LayOut>
      <CampingListLayout>
        <Header>
          <ButtonContainer>
            <Button text='전체' active onClick={showAllData} />
          </ButtonContainer>
          <MapIcon src={icon} />
        </Header>

        <CampingListContainer>
          {allData.map((data) => (
            <CampingCard data={data} />
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
