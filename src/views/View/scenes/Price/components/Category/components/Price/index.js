import { Buck, Cost, Dots, Name, Wrapper } from './style'
import { useServiceCost, useServiceName } from 'cs-data-hooks'

import { components } from 'app-shell-kit'
import { useAdminMode } from 'store/features/events'

const Price = ({ id }) => {
	const isAdmin = useAdminMode()
	const { Text } = components
	const costId = useServiceCost(id)
	const nameId = useServiceName(id)

	return pug`
		Wrapper(isAdmin=isAdmin)
			Name
				Text(
					id=nameId
					name='Название'
				)
			Dots ${'. . . . . . . . . . . . . . . . . . . . . . . . . .'}
			Cost
				Text(
					id=costId
					name='Стоимость'
				)
			Buck ${'₽'}
	`
}

export default Price