import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import { Routes, Route } from 'react-router-dom';

import CampingList from './pages/CampingList';
import CampingMap from './pages/CampingMap';
import Loading from './pages/Loading';

const staticServerUrl = process.env.REACT_APP_PATH || '';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Routes>
          <Route path={staticServerUrl + '/'} />
          <Route path={staticServerUrl + '/research'} />
          <Route path={staticServerUrl + '/loading'} element={<Loading />} />
          <Route
            path={staticServerUrl + '/campingList/all'}
            element={<CampingList />}
          />
          <Route path={staticServerUrl + '/campingList/jeju'} />
          <Route path={staticServerUrl + '/campingList/seongwipo'} />
          <Route path={staticServerUrl + '/campingDetail/:id'} />
          <Route
            path={staticServerUrl + '/campingMap'}
            element={<CampingMap />}
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
