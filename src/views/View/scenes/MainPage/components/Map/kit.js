import floor1 from './statics/floor-1.webp'
import floor2 from './statics/floor-2.webp'

export const floorBg = {
	0: floor1,
	1: floor2
}

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