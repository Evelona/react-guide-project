import { convertedFloorData } from './kit'
import { useCurrExhibit } from 'store/features/current-exhibit'
import { useCurrFloor } from 'store/features/current-floor'
import { useCurrRoom } from 'store/features/current-room'

export const FloorsContext = React.createContext({})

const FloorsContextProvider = FloorsContext.Provider

export const FloorProvider = ({ children }) => {
	const currFloor = useCurrFloor()
	const currRoom = useCurrRoom()
	const currExhibit = useCurrExhibit()

	const floors = convertedFloorData
	const floorRooms = floors[currFloor].rooms
	const floorRoomsLength = (index) => floors[index].rooms.length
	const floorRoom = floorRooms[currRoom]
	const roomName = floorRoom ? floorRoom.name : ''
	const roomDescriptionShort = floorRoom ? floorRoom.description.short : ''
	const roomDescriptionFull = floorRoom ? floorRoom.description.full : ''
	const roomArrow = floorRoom ? floorRoom.arrow : ''
	const roomPlatform = floorRoom ? floorRoom.platform : ''
	const roomExhibits = floorRoom ? floorRoom.exhibits : ''
	const roomAnimatedExhibits = floorRoom ? floorRoom.animatedExhibits : ''
	const roomExhibit = floorRoom ? floorRoom.exhibits[currExhibit] : ''

	const value = {
		currExhibit,
		currFloor,
		currRoom,
		floorRoom,
		floorRooms,
		floorRoomsLength,
		floors,
		roomAnimatedExhibits,
		roomArrow,
		roomDescriptionFull,
		roomDescriptionShort,
		roomExhibit,
		roomExhibits,
		roomName,
		roomPlatform,
	}

	return pug`
		FloorsContextProvider(value=value)
			=children
	`
}