import { ContentArea, LeftColumn, PositionedAddButtonLeft, PositionedAddButtonRight, PriceTitle, RightColumn, Wrapper } from './style'

import Category from './components/Category'
import DeleteButton from './components/DeleteButton'
import DragButton from './components/DragButton'
import Page from 'Page'
import { components } from 'app-shell-kit'
import { getListOfServiceCategories } from './kits'
import { useAdminMode } from 'store/features/events'
import { useLangs } from 'langs'

const Price = () => {
	const { List, ListAddButton } = components
	const [lang] = useLangs()
	const [leftCategoriesId, leftCategoriesType] = getListOfServiceCategories(lang, 'left')
	const [rightCategoriesId, rightCategoriesType] = getListOfServiceCategories(lang, 'right')

	const isAdmin = useAdminMode()
	const Stas = () => pug`div`

	return pug`
		Page
			ContentArea(showed=isAdmin)
				PriceTitle
				Wrapper#wrapper
					LeftColumn
						List(
							id=leftCategoriesId
							type=leftCategoriesType
							name='Категории'
							childComponent=Category
							deleteButton=DeleteButton
							addButton=Stas
							dragButton=DragButton
						)
					RightColumn
						List(
							id=rightCategoriesId
							type=rightCategoriesType
							name='Категории'
							childComponent=Category
							deleteButton=DeleteButton
							dragButton=DragButton
							addButton=Stas
						)
			if isAdmin
				ListAddButton(
					StyledButton=PositionedAddButtonLeft
					listId=leftCategoriesId
					listType=leftCategoriesType
				)
				ListAddButton(
					StyledButton=PositionedAddButtonRight
					listId=rightCategoriesId
					listType=rightCategoriesType
				)
	`
}

export default Price