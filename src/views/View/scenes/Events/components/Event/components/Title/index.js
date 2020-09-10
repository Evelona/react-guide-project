import { Title } from './style'
import { components } from 'app-shell-kit'
import {	useGuideEventName } from 'cs-data-hooks'

export default (({ eventId }) => {
	const { Text } = components
	const fieldId = useGuideEventName(eventId)

	return pug`
		Title
			Text(
				id=fieldId
				name='Заголовок'
			)
	`
})