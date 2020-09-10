import createPaths from 'paths'

export const { path, from } = createPaths({
	toCurrPage: currRoomPage => [...currRoomPage.toRoot()]
})
