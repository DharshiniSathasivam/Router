import "./App.css";
import { Route, Routes } from "react-router-dom";
import FullStack from "./Router/FullStack";
import DataScince from "./Router/DataScince";
import Cyber from "./Router/Cyber";
import Career from "./Router/Career";
import All from "./Router/All";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<All />} />
        <Route path="/doc/FullStack" element={<FullStack />} />
        <Route path="/doc/DataScince" element={<DataScince />} />
        <Route path="/doc/Cyber" element={<Cyber />} />
        <Route path="/doc/Career" element={<Career />} />
      </Routes>
    </div>
  );
}

export default App;
