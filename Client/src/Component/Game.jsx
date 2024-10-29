import { useEffect, useMemo } from "react";
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
        gravity: { x: 0 },
      },
    },
    scene: [GameScene],
  };

  useMemo(() => {
    new Phaser.Game(config);
  }, []);
  return <div></div>;
};

export default Game;
