import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const Landing = () => {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    if (!roomId || !username) {
      toast.error("Room ID & username is required");
      return;
    }
    navigate(`/room/${roomId}`, { state: { username } });
  };
  return (
    <div className="h-screen flex  justify-center items-center bg-[#1C1E29] text-white">
      <div className="p-10 w-[100vw] lg:w-[30vw] lg:py-20 lg:px-10 m-2 rounded-lg bg-[#282a36] flex flex-col  gap-7 ">
        <div className="flex flex-col uppercase gap-4">
          <h2 className="text-xl font-semibold">Paste the Invitation Code</h2>
          <input
            type="text"
            placeholder="Room ID"
            onChange={(event) => setRoomId(event.target.value)}
            value={roomId}
            className="p-3 rounded-lg font-bold uppercase text-black"
          />
          <input
            type="text"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
            className="p-3 uppercase rounded-lg font-bold text-black"
          />
          <button
            onClick={handleClick}
            className="w-[40vw] lg:w-[10vw] text-gray-800 uppercase  bg-[#4aed88] text-lg font-bold rounded-lg"
          >
            Submit
          </button>
        </div>
        <div>
          <h1 className="text-lg font-semibold">
            Don&apos;t Have an Room Id{" "}
            <span>
              {" "}
              <button
                onClick={() => setRoomId(uuid())}
                className="text-[#ffff00] underline "
              >
                Generate now
              </button>
            </span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
