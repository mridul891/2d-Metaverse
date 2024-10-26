import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

const Room = () => {
  const socket = useMemo(() => io("http://localhost:3000"), []);
  const [data, setData] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected", socket.id);
    });

    socket.on("join", (roomId = 1, username = "mridul") => {
      
    });
  }, [socket]);
  return (
    <div id="game-video" className="flex flex-col justify-center items-center ">
      UserList
      {/* {data.map((data) => (
        <div key={data.id}>{data.id}</div>
      ))} */}
    </div>
  );
};

export default Room;
