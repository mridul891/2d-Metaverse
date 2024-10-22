import { io } from "socket.io-client";
import "./App.css";
import { useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Component/Landing";
import Room from "./Component/Room";

function App() {
  const socket = useMemo(() => io("http://localhost:3000"), []);
  const [data, setData] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };

  const handleSubmit = () => {
    socket.emit("message", data);
    setData(" ");
  };
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected", socket.id);
    });

    socket.on("message", (message) => {
      console.log(message);
    });
  }, [socket]);
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/room" element={<Room />} />
    </Routes>
  );
}

export default App;
