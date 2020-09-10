import { Exhibit, Wrapper } from './style'

import { FloorsContext } from 'contexts/floors-context/floors-context'
import { useContext } from 'react'

const getCollectionItem = (roomExhibits, setIndex) => {
	return roomExhibits.map(
		({ imgPath }, index) => pug`
			Exhibit(
				onClick=() => setIndex(index)
				key=index
				path=imgPath
			)
		`
	)
}

const Collection = ({ setIndex }) => {
	const { roomExhibits } = useContext(FloorsContext)

	return pug`
		Wrapper#Collection
			=getCollectionItem(roomExhibits, setIndex)
	`
}

export default Collection