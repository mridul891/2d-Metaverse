import { io } from "socket.io-client";
import "./App.css";
import { useEffect, useMemo, useState } from "react";

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
    <div>
      <input type="text" onChange={handleChange} value={data} />
      <button onClick={handleSubmit}>submit</button>
      {data}
    </div>
  );
}

export default App;
