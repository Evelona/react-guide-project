/* eslint-disable no-undef */
/* eslint-disable node/no-missing-import */
/* eslint-disable node/no-extraneous-import */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { Date, Day, Month } from './style'
import { components, ops } from 'app-shell-kit'
import { normalizeDay, normalizeMonth, withOutTag } from './kits'
import { useAdminMode, usePublishedText } from 'store/features/events'
import {
	useGuideEventDate,
	useGuideEventDateDay,
	useGuideEventDateMonth,
} from 'cs-data-hooks'

import PropTypes from 'prop-types'
import { useLangs } from 'langs'

export default (({ eventId }) => {
	const [currLang] = useLangs()
	const { textPublished } = ops.get
	const dateId = useGuideEventDate(eventId)
	const dayId = useGuideEventDateDay(dateId)
	const monthId = useGuideEventDateMonth(dateId)

	const monthValue = withOutTag(usePublishedText(monthId)) || 1
	const dayValue = `${withOutTag(usePublishedText(dayId))} `
	const normalizedDay = normalizeDay(dayValue)
	const monthName = normalizeMonth(monthValue, currLang, normalizedDay)

	const { Text } = components
	const isAdminMode = useAdminMode()
	const isKiosk = !isAdminMode

	return pug`
		Date#date(kiosk=isKiosk)
			Day(kiosk=isKiosk)
				if !isKiosk
					Text(
						id=dayId
						name='День'
						inline
					)
				if isKiosk
					div.date(style=${{ paddingRight: '5px' }}) ${dayValue}
			Month
				if !isKiosk
					Text(
						id=monthId
						name='Месяц'
						inline
					)
				if isKiosk
					div.date ${monthName}
	`
})