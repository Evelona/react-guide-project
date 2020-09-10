import arrowDown from './statics/arrow-down.webp'
import arrowUp from './statics/arrowUp.webp'
import stairsDown from './statics/stairs-down.webp'
import stairsUp from './statics/stairsUp.webp'

export const animPoints = {
	down: {
		0: {
			end: 'transform: translateY(-300px)',
			start: 'transform: translateY(-300px)'
		},
		1: {
			end: 'transform: translateY(-300px)',
			start: 'transform: translateY(-300px)'
		}
	},
	up: {
		0: {
			end: 'transform: translateY(300px)',
			start: 'transform: translateY(300px)'
		},
		1: {
			end: 'transform: translateY(300px)',
			start: 'transform: translateY(300px)'
		}
	}
}

export const icon = {
	0: {
		arrow: arrowUp,
		stair: stairsUp
	},
	1: {
		arrow: arrowDown,
		stair: stairsDown
	},
}

export const arrowMoveDirection = {
	0: {
		bottom: '30%,-30%',
		top: '-30%,30%'
	},
	1: {
		bottom: '30%,30%',
		top: '-30%,-30%'
	},
}