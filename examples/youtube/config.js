import '../../dist/vlite.css'
import Vlitejs from '../../dist/vlite.js'
import VlitejsYoutube from '../../dist/providers/youtube.js'
import '../../assets/images/poster.jpg'

Vlitejs.registerProvider('youtube', VlitejsYoutube)

/* eslint-disable no-unused-vars */
const player = new Vlitejs('#player-yt', {
	options: {
		autoplay: false,
		controls: true,
		playPause: true,
		progressBar: true,
		time: true,
		volume: true,
		fullscreen: true,
		poster: '../dist/images/poster.jpg',
		bigPlay: true,
		autoHide: true,
		playsinline: true,
		loop: false,
		muted: false
	},
	provider: 'youtube',
	onReady: function (player) {
		console.log(player)

		player.on('play', () => console.log('play'))
		player.on('pause', () => console.log('pause'))
		player.on('ended', () => console.log('ended'))
		player.on('progress', () => console.log('progress'))
		player.on('volumechange', () => console.log('volumechange'))
		player.on('timeupdate', () => console.log('timeupdate'))
		player.on('enterfullscreen', () => console.log('enterfullscreen'))
		player.on('exitfullscreen', () => console.log('exitfullscreen'))
		player.on('enterpip', () => console.log('enterpip'))
		player.on('leavepip', () => console.log('leavepip'))
		player.on('trackenabled', () => console.log('trackenabled'))
		player.on('trackdisabled', () => console.log('trackdisabled'))
	}
})
window.player = player
/* eslint-enable no-unused-vars */