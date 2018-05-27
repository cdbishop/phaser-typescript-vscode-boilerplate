module MyGame {

	export class GameState extends Phaser.State {

		preload() {}

		create() {
			let logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'red_button');
			logo.anchor.setTo(0.5, 0.5);
		}

	}

}