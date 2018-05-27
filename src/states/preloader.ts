module MyGame {

	export class PreloaderState extends Phaser.State {

		preload() {
			this.game.load.image('red_button', 'assets/img/red_button.png');
		}

		create() {
			this.game.state.start('Game');
		}

	}

}