import { useLocation } from 'react-router-dom';
import KakaoMap from '../components/CampingMap/Map';

const CampingMap = () => {
  const location = useLocation();
  const data = { ...location.state };

  return (
    <div>
      <KakaoMap data={data} />
    </div>
  );
};

export default CampingMap;
