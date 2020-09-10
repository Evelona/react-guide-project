import { Fragment, useContext } from 'react'
import { StyledPhoto, StyledTitle, StyledYear, Text } from './style'

import { FloorsContext } from 'contexts/floors-context'
import { Multilang } from 'langs'

const ExhibitView = ({ index, openViewer }) => {
	const { roomExhibits } = useContext(FloorsContext)
	const { description, year, imgPath } = roomExhibits[index]
	const noPhotoText = {
		eng: 'No photo',
		rus: 'Нет фото',
		tat: ''
	}

	return pug`
		Fragment
			StyledPhoto#photoExhibit(
				onClick=openViewer
				path=imgPath
			)
				if imgPath === '' 
					Multilang(...noPhotoText)
			Text
				StyledTitle
					Multilang(...description)
				StyledYear 
					Multilang(...year)
	`
}

export default ExhibitView