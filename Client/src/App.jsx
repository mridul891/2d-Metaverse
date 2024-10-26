import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./Component/Landing";
import Room from "./Component/Room";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/room/:id" element={<Room />} />
    </Routes>
  );
}

export default App;
