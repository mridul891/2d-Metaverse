import { useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { initSocket } from "../../socket";
import { io } from "socket.io-client";
import Game from "./Game";

const Room = () => {
  const location = useLocation();
  const { roomId } = useParams();
  const username = location.state?.username;
  const socketRef = useRef(null);
  // const socket = io();
  useEffect(() => {
    async function init() {
      socketRef.current = initSocket();

      socketRef.current.emit("join", {
        roomId,
        username,
      });
    }
    init();
    return () => {
      socketRef.current.off("join");
      socketRef.current.disconnect();
    };
  }, []);
  return (
    <div id="game-video" className="flex flex-col justify-center items-center ">
      <Game socketRef={socketRef} roomId={roomId} />
    </div>
  );
};

export default Room;
