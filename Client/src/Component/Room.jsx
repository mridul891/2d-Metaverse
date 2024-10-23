import { useEffect } from "react";
import Phaser from "phaser";
import Game from "../Scenes/Game";

const Room = () => {
  const config = {
    width: 1000,
    height: 500,
    type: Phaser.AUTO,
    parent: "game-video",
    
  };
  useEffect(() => {
    async function initGame() {
      const game = new Phaser.Game(config);
      // game.scene.add("titleScreen", TitleScreen);
      game.scene.add("game", Game);
      // game.scene.start("titleScreen")
      game.scene.start("game");
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
