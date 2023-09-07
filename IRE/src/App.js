import "./App.css";
import Test from "./pages/test";
import Research from "./pages/Research";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" />
        <Route path="/research" element={Research} />
        <Route path="/campingList/all" />
        <Route path="/campingList/jeju" />
        <Route path="/campingList/seongwipo" />
        <Route path="/campingDetail/:id" />
      </Routes>
    </div>
  );
}

export default App;
