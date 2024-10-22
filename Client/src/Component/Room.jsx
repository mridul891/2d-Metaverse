import { useEffect } from "react";
import Phaser from "phaser";

import Game from "../Scenes/Game";

const Room = () => {
  const config = {
    width: 1000,
    height: 500,
    type: Phaser.AUTO,
    scene: [Game],
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
  return;
};

export default Room;
