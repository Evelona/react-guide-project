import { getPaths, getRoomIndex, hidePaths, showPaths } from './kits'
import { useContext, useEffect, useRef, useState } from 'react'

import { DURATION } from 'config'
import { FloorsContext } from 'contexts/floors-context'
import { ReactSVG } from 'react-svg'
import { WrapperSvg } from './style'
import firstFloor from './statics/first-floor.svg'
import secondFloor from './statics/second-floor.svg'
import { useCurrFloor } from 'store/features/current-floor'
import usePrevious from 'use-previous'
import { useSetCurrExhibit, useCurrExhibitId } from 'store/features/current-exhibit'
import { useSetCurrRoom } from 'store/features/current-room'

const Rooms = ({ floorIndex }) => {
	const { currRoom, floorRoomsLength } = useContext(FloorsContext)
	const prevFloorIndex = usePrevious(floorIndex, [Rooms, 'floorIndex'])
	const currExhibitId = useCurrExhibitId()
	const setRoom = useSetCurrRoom()
	const setExhibit = useSetCurrExhibit()
	const roomsRef = useRef(null)

	const [classIndex, setClassIndex] = useState(-1)
	const prevClassIndex = usePrevious(classIndex, [Rooms, 'currRoom'])
	let timerId

	const selectRoom = (e) => {
		const node = e.target
		const roomIndex = getRoomIndex(node)

		if (typeof roomIndex === 'number') {
			setExhibit(0)
			setRoom(roomIndex)
			const event = new CustomEvent('select-room')

			document.dispatchEvent(event)
		}
	}

	const changeRoom = (node) => {
		const container = node ? node : roomsRef.current

		const deactivePaths = getPaths(container, prevClassIndex)
		const activePaths = getPaths(container, classIndex)

		if (deactivePaths.length > 0) hidePaths(deactivePaths)

		if (activePaths.length > 0) showPaths(activePaths)
	}

	useEffect(() => {
		if (floorIndex !== prevFloorIndex) {
			clearTimeout(timerId)
			const nextClass = floorIndex ?
				currRoom + floorRoomsLength(floorIndex - 1) : currRoom

			timerId = setTimeout(() => {
				setClassIndex(nextClass)
			}, DURATION.SLOW)
		}
	}, [floorIndex])

	useEffect(() => {
		const nextClass = floorIndex ?
			currRoom + floorRoomsLength(floorIndex - 1) : currRoom

		if (floorIndex === prevFloorIndex) setClassIndex(nextClass)
	}, [currRoom])

	useEffect(() => {
		changeRoom()
	}, [classIndex])

	return pug`
		WrapperSvg(ref=roomsRef onClick=selectRoom)
			if floorIndex === 0
				ReactSVG(src=firstFloor)
			else
				ReactSVG(src=secondFloor)
	`
}

export default Rooms