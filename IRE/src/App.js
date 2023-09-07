import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/research" />
      <Route path="/campingList/all" />
      <Route path="/campingList/jeju" />
      <Route path="/campingList/seongwipo" />
      <Route path="/campingDetail/:id" />
    </Routes>
  );
}

export default App;
