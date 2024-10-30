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

  return (
    <div id="game-video" className="flex flex-col justify-center items-center ">
      <Game roomId={roomId} />
    </div>
  );
};

export default Room;
