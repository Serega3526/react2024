import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./components/main/mainPage";
import ControlPage from "./components/control/control";
import UncontrolPage from "./components/uncontrol/uncontrol";
import { NotFoundPage } from "./components/error/notFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/control" element={<ControlPage />} />
      <Route path="/uncontrol" element={<UncontrolPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
