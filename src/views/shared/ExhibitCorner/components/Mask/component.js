/* eslint-disable no-unused-vars */
import { Corner, ExhibitTitle, Wrapper } from './style'
import { useContext, useState } from 'react'

import { FloorsContext } from 'contexts/floors-context'
import { Multilang } from 'langs'
import { useCurrExhibit } from 'store/features/current-exhibit'
import { useCurrFloor } from 'store/features/current-floor'
import { useCurrPage } from 'store/features/current-page'
import { useCurrRoom } from 'store/features/current-room'

const Mask = ({ index }) => {
	const currFloorIndex = useCurrFloor()
	const currRoomIndex = useCurrRoom()
	const currPage = useCurrPage()
	const currExhibitIndex = useCurrExhibit()
	const { floors } = useContext(FloorsContext)

	const currRoom = floors[currFloorIndex]['rooms'][currRoomIndex]
	const currExhibit = currRoom['animatedExhibits'][currExhibitIndex]
	const initialExhibit = floors[0]['rooms'][0]['exhibits'][0]

	const [roomExhibit, setRoomExhibit] = useState(currRoom && currExhibit ?
		currExhibit : initialExhibit)

	const { imgPath, description, photoId, direction } = roomExhibit
	const isMain = currPage === 'main'

	return pug`
		Wrapper(mask=index)
			Corner(key=photoId path=imgPath direction=direction isMain=isMain)
				if currPage === 'main' 
					ExhibitTitle
						Multilang(...description)
`
}

export default Mask