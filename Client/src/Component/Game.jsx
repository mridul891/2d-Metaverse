import { useEffect } from "react";
import Phaser from "phaser";
import GameScene from "@/Scene/GameScene";

const Game = () => {
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 200 },
      },
    },
    scene: [GameScene],
  };

  useEffect(() => {
    new Phaser.Game(config);
  }, []);
  return <div></div>;
};

export default Game;
