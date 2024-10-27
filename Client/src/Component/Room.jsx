import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { initSocket } from "../../socket";
import { io } from "socket.io-client";

const Room = () => {
  const location = useLocation();
  const { roomId } = useParams();
  const username = location.state?.username;
  const socket = io();
  useEffect(() => {
    initSocket();
    socket.on("join", (roomId, username) => {
      console.log("Done");
    });
  }, []);
  return (
    <div id="game-video" className="flex flex-col justify-center items-center ">
      UserList
    </div>
  );
};

export default Room;
