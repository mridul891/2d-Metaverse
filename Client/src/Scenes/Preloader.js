import Phaser from "phaser"

export default class Preloader extends Phaser.Scene {
    constructor() {
        super('preloader')
    }
    preload() {
        this.load.image('grid', 'Grid/grid.png')
    }
    create() {
        
        this.scene.start('game')
    }
}   