import { useEffect, useMemo } from "react";
import Phaser from "phaser";

const Game = () => {
  let player, platforms, cursors;
  let x = 100,
    y = 450;

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    };
    const game = new Phaser.Game(config);
  }, []);
  function preload() {
    this.load.image("grid", "/assets/grid.png");
    this.load.image("sky", "/assets/sky.png");
    this.load.image("ground", "/assets/platform.png");
    this.load.image("star", "/assets/star.png");
    this.load.image("bomb", "/assets/bomb.png");
    this.load.spritesheet("dude", "/assets/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  function create() {
    this.add.image(400, 300, "sky");
    platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, "ground").setScale(2).refreshBody();

    player = this.physics.add.sprite(x, y, "dude");

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    // Add animations
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    // Set gravity for the player only
    player.body.setGravityY(300);

    // Collide player with platforms
    this.physics.add.collider(player, platforms);

    // Initialize cursor keys for input
    cursors = this.input.keyboard.createCursorKeys();
  }

  function update() {
    // Horizontal movement
    if (cursors.left.isDown) {
      x += player.setVelocityX(-160);
      console.log(Math.floor(x));
      player.anims.play("left", true);
    } else if (cursors.right.isDown) {
      x += player.setVelocityX(160);
      player.anims.play("right", true);
    } else {
      player.setVelocityX(0);
      player.anims.play("turn");
    }

    // Vertical movement
    if (cursors.up.isDown) {
      player.setVelocityY(-160); // Move up
    } else if (cursors.down.isDown) {
      player.setVelocityY(160); // Move down
    } else if (!cursors.up.isDown && !cursors.down.isDown) {
      player.setVelocityY(0); // Stop vertical movement if no key is pressed
    }
  }
  return <div id="game-canvas"></div>;
};

export default Game;
