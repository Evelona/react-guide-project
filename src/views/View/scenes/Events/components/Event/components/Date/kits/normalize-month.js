import months, { monthsWithoutDate } from './../config'

export const normalizeMonth = (month, currLang, day) => {
	let monthName = ''

	if (`${month}`.indexOf('-') !== -1) {
		const borders = month
			.split('-')
			.map(border => parseInt(border))

		monthName = `${months[borders[0]][currLang]} - ${months[borders[1]][currLang]}`
	} else if (Boolean(day) && currLang === 'rus') {
		monthName = monthsWithoutDate[month]
	} else {
		monthName = `${months[month][currLang]}`
	}

	return monthName
}