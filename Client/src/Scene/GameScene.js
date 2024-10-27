import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
    // private platforms =  Phaser.Physics.Arcade.StaticGroup
    constructor() {
        super('Game')
    }
    preload() {
        this.load.image('grid', '/assets/grid.png')
        this.load.spritesheet("jungo", './assets/jungo.png', { frameWidth: 32, frameHeight: 48 })
    }
    create() {
        this.add.image(400, 300, "grid")
        const platforms = this.physics.add.staticGroup()
        const group = this.platforms.create()
    }
    update() {

    }
}