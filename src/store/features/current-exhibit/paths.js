import createPaths from 'paths'

export const { path, from } = createPaths({
	toCurrExhibit: currRoomExhibit => [...currRoomExhibit.toRoot(), 'index'],
	toCurrExhibitId: currRoomExhibit => [...currRoomExhibit.toRoot(), 'id']
})
