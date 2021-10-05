import { Scene } from 'phaser'
import sky from '@/assets/sky_blue.png'
import bomb from '@/assets/bomb.png'

export default class BootScene extends Scene {
    constructor () {
        super({ key: 'BootScene' })
      }
    
      preload () {
        this.load.image('sky', sky)
        this.load.image('ball', bomb)
        
      }
    
      create () {
        this.scene.start('PlayScene')
      }
}