import { Fragment } from 'react'
import { StyledBackground } from './style'
import { useExhibitAnimation } from './kits'

export default ({ children }) => {
	useExhibitAnimation()

	return pug`
		Fragment
			StyledBackground
			=children
	`
}