import createPaths from 'paths'

export const { path, from } = createPaths({
	toCurrRoom: currRoomPath => [...currRoomPath.toRoot()],
})
