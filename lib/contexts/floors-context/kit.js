import floorsData from './floors-data.cson'
import { map } from 'lodash'

export const convertedFloorData = map(floorsData.floors, (floor) => {
	floor.rooms.forEach((room) => {
		room.exhibits.forEach((exhibit) => {
			if (!room.animatedExhibits) {
				room.animatedExhibits = []
			}

			if (exhibit.animated) {
				room['animatedExhibits'].push(exhibit)
			}
		})
	})

	return floor
})