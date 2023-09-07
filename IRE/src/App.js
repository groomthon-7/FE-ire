import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import Research from "./pages/Research";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Main from "./pages/Main";

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
            <Route path={staticServerUrl + "/campingList/all"} />
            <Route path={staticServerUrl + "/campingList/jeju"} />
            <Route path={staticServerUrl + "/campingList/seongwipo"} />
            <Route path={staticServerUrl + "/campingDetail/:id"} />
          </Routes>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
