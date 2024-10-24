import { useEffect } from "react";
import Phaser from "phaser";
import Game from "../Scenes/Game";
import Preloader from "../Scenes/Preloader";

const Room = () => {
  const config = {
    width: 1000,
    height: 500,
    type: Phaser.AUTO,
    // parent: "game-video",
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0 },
      },
    },
    scene: [Preloader, Game],
  };
  useEffect(() => {
    async function initGame() {
      new Phaser.Game(config);
    }

    initGame();
  }, []);
  return (
    <div id="game-video" className="flex justify-center items-center ">
      {" "}
    </div>
  );
};

export default Room;
