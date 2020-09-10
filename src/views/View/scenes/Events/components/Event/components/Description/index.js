import { Description } from './style'
import { components } from 'app-shell-kit'
import {	useGuideEventDescription } from 'cs-data-hooks'

export default (({ eventId }) => {
	const { Text } = components
	const fieldId = useGuideEventDescription(eventId)

	return pug`
		Description
			Text(
				id=fieldId
				name='Описание'
			)
	`
})