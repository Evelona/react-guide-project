import { ANIMATION_PAUSE, RESET_APP_TIMEOUT } from 'config'

import { useEffect } from 'react'

export const useListener = ({
	stop, start, check, animationPauseTimerId, animationTimerId
}) => {
	useEffect(() => {
		document.addEventListener('select-room', () => {
			stop()
			clearTimeout(animationPauseTimerId)
			animationPauseTimerId = setTimeout(() => {
				start()
			}, ANIMATION_PAUSE)
			clearTimeout(animationTimerId)
			check(true)
		})

		document.addEventListener('activity-on-room-page', () => {
			stop()
			clearTimeout(animationPauseTimerId)
			animationPauseTimerId = setTimeout(() => {
				start()
			}, RESET_APP_TIMEOUT)
			clearTimeout(animationTimerId)
			check(true)
		})

		return () => {
			document.removeEventListener('select-room', () => {
				stop()
				clearTimeout(animationPauseTimerId)
				animationPauseTimerId = setTimeout(() => {
					start()
				}, ANIMATION_PAUSE)
				clearTimeout(animationTimerId)
				check(true)
			})

			document.removeEventListener('activity-on-room-page', () => {
				stop()
				clearTimeout(animationPauseTimerId)
				animationPauseTimerId = setTimeout(() => {
					start()
				}, RESET_APP_TIMEOUT)
				clearTimeout(animationTimerId)
				check(true)
			})
		}
	}, [])
}