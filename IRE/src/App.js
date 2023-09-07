import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";

import { Routes, Route } from "react-router-dom";
import Test from "./test";

const staticServerUrl = process.env.REACT_APP_PATH || "";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path={staticServerUrl + "/"} element={<Test />} />
          <Route path={staticServerUrl + "/research"} />
          <Route path={staticServerUrl + "/campingList/all"} />
          <Route path={staticServerUrl + "/campingList/jeju"} />
          <Route path={staticServerUrl + "/campingList/seongwipo"} />
          <Route path={staticServerUrl + "/campingDetail/:id"} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
