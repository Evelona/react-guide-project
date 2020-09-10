import { Gorizontal, Label, Vertical, Wrapper } from './style'

import { Multilang } from 'langs'
import { usePress } from 'gesture'
import { useSetCurrPage } from 'store/features/current-page'
import { useState } from 'react'

const more = {
	eng: 'More...',
	rus: 'Подробнее...',
	tat: 'Җентекле'
}

export default () => {
	const setCurrPage = useSetCurrPage()

	const [pressed, setPressed] = useState(false)

	// eslint-disable-next-line no-unused-vars
	const bind = usePress({
		down: () => setPressed(true),
		tap: () => {
			setCurrPage('room')
			const event = new CustomEvent('activity-on-room-page')

			document.dispatchEvent(event)
		},
		up: () => setPressed(false),
	})

	const firstDeviderStyle = {
		transform: `translateX(${pressed ? '-60' : '0'}px)`,
		transition: 'transform ease 300ms'
	}

	const secondDeviderStyle = {
		transform: `translateX(${pressed ? '60' : '0'}px)`,
		transition: 'transform ease 300ms'
	}

	return pug`
		Wrapper#more-button(
			...bind()
		)
			Vertical
			Gorizontal(style=${firstDeviderStyle})
			Label
				Multilang(...more)
			Gorizontal(style=${secondDeviderStyle})
			
	`
}