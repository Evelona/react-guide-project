/* eslint-disable node/no-missing-import */

import { Photo } from './style'
import { components } from 'app-shell-kit'
import imageSize from './image-config'
import {	useGuideEventPhoto } from 'cs-data-hooks'

export default (({ eventId }) => {
	const fieldId = useGuideEventPhoto(eventId)
	const { Media } = components

	return pug`
		Photo
			Media(
				id=fieldId
				name='Фото'
				size=imageSize
			)
	`
})