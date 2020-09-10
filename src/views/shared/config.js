export const theme = {
	color: {
		arrow: '#746C6C',
		enterIconEnabled: '#575555',
		title: '#575555',
	},
	effect: {
		enterIcon: '0px 2px 4px rgba(0, 0, 0, 0.25);',
		exhibitElement: '0px 4px 4px rgba(0, 0, 0, 0.25);',
		videoPlayerControl: '0px 3px 7px rgba(0, 0, 0, 0.75);',
	}
}

export const DURATION = {
	EXTRASLOW: 6000,
	FAST: 200,
	FASTER: 100,
	NORMAL: 300,
	SLOW: 400,
	SLOWER: 500,
	UNUSED: 3000
}

export const DELAY = DURATION

export const MENU_ANIM_DURATION = DURATION.SLOW
export const PAGE_ANIM_DURATION = DURATION.FASTER
export const FLIP_TRANSITION_TIMEOUT = MENU_ANIM_DURATION + PAGE_ANIM_DURATION
export const TIME_FOR_SWIPE = 500
export const DISTANCE_FOR_SWIPE = 400
export const MASK_COUNT = 5
export const RESET_APP_TIMEOUT = 20000
export const ANIMATION_PAUSE = 10000