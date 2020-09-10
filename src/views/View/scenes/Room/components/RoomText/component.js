import { Fragment, useContext } from 'react'
import { StyledText, StyledTitle } from './style'

import { FloorsContext } from 'contexts/floors-context'
import { Multilang } from 'langs'

const RoomText = () => {
	const { roomName, roomDescriptionFull } = useContext(FloorsContext)

	return pug`
		Fragment
			StyledTitle
				Multilang(...roomName)
			StyledText 
				div.text
					Multilang(...roomDescriptionFull)
	`
}

export default RoomText