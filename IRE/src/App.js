import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import { Routes, Route } from 'react-router-dom';
import Research from "./pages/Research";
import CampingList from './pages/CampingList';
import CampingMap from './pages/CampingMap';
import Loading from './pages/Loading';
import { Provider } from "react-redux";
import store from "./Redux/store";
import Main from "./pages/Main";

const staticServerUrl = process.env.REACT_APP_PATH || '';

function App() {
  return (
     <Provider store={store}>
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Routes>
           <Route path={staticServerUrl + "/"} element={<Main />} />
            <Route
              path={staticServerUrl + "/research"}
              element={<Research />}
            />
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
</Provider>
  );
}

export default App;
