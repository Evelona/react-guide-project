/* eslint-disable max-lines */
import { ops, selectors } from 'app-shell-kit'

import { List } from 'immutable'
import { useSelector } from 'react-redux'

const monthsCount = 12
const currMonth = new Date().getMonth() + 1
const FIRST_TAG_POSITION = 3
const LAST_TAG_POSITION = 7

const withOutTag = str => str ? str
	.substr(FIRST_TAG_POSITION, str.length - LAST_TAG_POSITION) : ''

const getEventDates = (state, eventId) => {
	const {
		guideEventDateDay,
		textPublished,
		guideEventDate,
		guideEventDateMonth,
	} = ops.get

	console.log(ops)

	const monthId = guideEventDateMonth(state, guideEventDate(state, eventId))
	const monthValue = withOutTag(textPublished(state, monthId))

	const dayId = guideEventDateDay(state, guideEventDate(state, eventId))
	const dayValue = withOutTag(textPublished(state, dayId))

	return {
		day: parseInt(dayValue),
		id: eventId,
		month: monthValue
	}
}

const isPeriod = (dateStr) => {
	return dateStr.indexOf('-') !== -1
}

const getMonthRemoteness = (month) => {
	let remoteness

	if (month === currMonth) {
		remoteness = 0
	} else if (month > currMonth) {
		remoteness = month - currMonth
	} else {
		remoteness = (month - currMonth) + monthsCount
	}

	return remoteness
}

const getPeriodBorders = (dateStr) => {
	const borders = dateStr.split('-')

	return borders.map(date => parseInt(date))
}

const getBorderToSort = (dateStr) => {
	const borders = getPeriodBorders(dateStr)

	borders[0] = getMonthRemoteness(borders[0])
	borders[1] = getMonthRemoteness(borders[1])

	const borderToSort = Math.min.apply(null, borders)

	return borderToSort
}

export const useSortedItems = (items) => useSelector((state) => {
	const events = items.toArray().map(eventId => getEventDates(state, eventId))

	events.map(event => {
		const { month } = event
		let monthInt

		if (isPeriod(month)) {
			monthInt = getBorderToSort(month)
		} else {
			monthInt = parseInt(month)
		}
		event.month = getMonthRemoteness(monthInt)

		return event
	})

	events.sort((a, b) => {
		if (a.month < b.month) return -1

		if (a.month > b.month) return 1

		if (a.day < b.day) return -1

		if (a.day > b.day) return 1

		return 0
	})

	return new List(events.map(event => event.id))
})

export const usePublishedText = (id) => useSelector((state) => {
	return ops.get.textPublished(state, id)
})

export const useAdminMode = () => useSelector((state) => {
	const { isAdminMode } = selectors

	return isAdminMode(state)
})