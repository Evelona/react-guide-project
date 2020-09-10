import createPaths from 'paths'

export const { path, from } = createPaths({
	toCurrFloor: currRoomFloor => [...currRoomFloor.toRoot()]
})
