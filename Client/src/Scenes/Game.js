import Phaser from "phaser";
import GridView from '../assets/grid.png'

export default class Game extends Phaser.Scene {
    preload() {
        this.load.image('gridView', GridView);
    }
    create() {
        console.log('ready!')
        let image = this.add.image(0, 0, 'gridView').setOrigin(0, 0);
        image.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);
    }
}