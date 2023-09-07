import styled from 'styled-components';
import Button from '../components/CampingList/Button';
import CampingCard from '../components/CampingList/Card';

import icon from '../assets/CampingList/Ellipse18.png';
import { useState } from 'react';

const CampingList = ({ category }) => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <CampingListLayout>
      <Header>
        <ButtonContainer>
          <Button
            text='전체'
            active={activeButton === 0 ? 'true' : 'false'}
            onClick={() => handleButtonClick(0)}
          />
          <Button
            text='제주시'
            active={activeButton === 1 ? 'true' : 'false'}
            onClick={() => handleButtonClick(1)}
          />
          <Button
            text='서귀포시'
            active={activeButton === 2 ? 'true' : 'false'}
            onClick={() => handleButtonClick(2)}
          />
        </ButtonContainer>
        <MapIcon src={icon} />
      </Header>

      <CampingListContainer>
        <CampingCard />
        <CampingCard />
        <CampingCard />
      </CampingListContainer>
    </CampingListLayout>
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
