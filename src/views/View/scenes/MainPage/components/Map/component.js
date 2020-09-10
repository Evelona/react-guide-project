import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { FloorPlan, MapText, RoomDescription, RoomTitle } from './style'

import FloorButton from './FloorButton'
import { FloorsContext } from 'contexts/floors-context'
import Legend from './Legend'
import MoreButton from './MoreButton'
import { Multilang } from 'langs'
import Rooms from './Rooms'
import { useContext } from 'react'
import { useCurrFloor } from 'store/features/current-floor'

export default () => {
	const {
		floors,
		currFloor,
		roomName,
		roomDescriptionShort
	} = useContext(FloorsContext)

	const floorIndex = useCurrFloor()
	const animDirection = currFloor === floors.length - 1 ? 'down' : 'up'

	return pug`
		TransitionGroup(component=null)
			CSSTransition(key=currFloor timeout=1000)
				FloorPlan#floorplan(
					currentFloor=currFloor
					animDirection=animDirection
					floors=floors
				)
					Rooms(floorIndex=floorIndex)
					if currFloor==0
						Legend
		TransitionGroup(component=null)
			CSSTransition(key=currFloor timeout=1000)
				MapText
					RoomTitle
						Multilang(...roomName)
					RoomDescription
						Multilang(...roomDescriptionShort)
					MoreButton
		FloorButton(animDirection=animDirection currentFloor=currFloor)
	`
}