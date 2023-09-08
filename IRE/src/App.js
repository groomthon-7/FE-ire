import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import { Routes, Route } from "react-router-dom";
import Research from "./pages/Research";
import CampingList from "./pages/CampingList";
import Loading from "./pages/Loading";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Main from "./pages/Main";
import CampingDetail from "./pages/CampingDetail";

const staticServerUrl = process.env.REACT_APP_PATH || "";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes>
            <Route path={staticServerUrl + "/"} element={<Main />} />
            <Route
              path={staticServerUrl + "/research"}
              element={<Research />}
            />
            <Route
              path={staticServerUrl + "/campingList/all"}
              element={<CampingList />}
            />
            <Route path={staticServerUrl + "/campingList/jeju"} />
            <Route path={staticServerUrl + "/campingList/seongwipo"} />
            <Route
              path={staticServerUrl + "/campingDetail/:id"}
              element={<CampingDetail />}
            />
          </Routes>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
