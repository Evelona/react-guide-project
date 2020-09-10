export const normalizeDay = (day) => {
	const isPeriod = day.indexOf('-') !== -1

	if (isPeriod) return day.split('-').map(date => parseInt(date))

	return parseInt(day)
}