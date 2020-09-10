import { ListWrapper, PositionedAddButton, Title, Wrapper } from './style'
import { useServiceCategoryName, useServiceCategoryPrices } from 'cs-data-hooks'

import DeleteButtom from './components/DeleteButton'
import DragButtom from './components/DragButton'
import Price from './components/Price'
import { components } from 'app-shell-kit'
import { useAdminMode } from 'store/features/events'
const Category = ({ id }) => {
	const isAdmin = useAdminMode()
	const { List, Text } = components
	const nameId = useServiceCategoryName(id)
	const [priceListId, priceListType] = useServiceCategoryPrices(id)

	return pug`
		Wrapper
			Title(isAdmin=isAdmin)
				Text(
					id=nameId
					name='Заголовок'
				)
			ListWrapper
				List(
					id=priceListId
					type=priceListType
					name='Список цен'
					childComponent=Price
					addButton=PositionedAddButton
					deleteButton=DeleteButtom
					dragButton=DragButtom
				)
	`
}

export default Category