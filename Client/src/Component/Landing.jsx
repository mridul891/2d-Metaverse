import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
const Landing = () => {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const HandleChange = (event) => {
    setRoomId(event.target.value);
  };

  const HandleGenerate = () => {
    setRoomId(uuid());
  };

  const handleClick = () => {
    if (!roomId) {
      console.log("room id Not found");
    } else {
      navigate(`/room/${roomId}`);
    }
  };
  return (
    <div className="h-screen flex  justify-center items-center bg-[#1C1E29] text-white">
      <div className="p-10 w-[100vw] lg:w-[40vw] lg:py-20 lg:px-10 m-2 rounded-lg bg-[#282a36] flex flex-col  gap-7 ">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Paste the Invitation Code</h2>
          <input
            type="text"
            placeholder="Enter The Room ID"
            onChange={HandleChange}
            value={roomId}
            className="p-3 rounded-lg font-bold text-black"
          />
          <button
            onClick={handleClick}
            className="w-[40vw] lg:w-[10vw] text-black bg-[#4aed88] text-lg font-semibold rounded-lg"
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
                onClick={HandleGenerate}
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
