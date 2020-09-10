import { ContentArea, CustAddButton, Wrapper } from './style'
import { useAdminMode, useSortedItems } from 'store/features/events'
import { useEffect, useRef } from 'react'

import DeleteButton from './components/DeleteButton'
import Event from './components/Event'
import Page from 'Page'
import Title from 'Title'
import { components } from 'app-shell-kit'
import { getListData } from './kits'
import { useLangs } from 'langs'

const listProps = {
	axis: 'x',
	lockAxis: 'x',
	transitionDuration: 600
}

const Stas = () => pug`div`

const resizeMasonryItem = (rowGap, rowHeight, item) => {
	const itemHeight = item.getBoundingClientRect().height
	const rowSpan = Math.ceil((itemHeight + rowGap) / (rowHeight + rowGap))

	item.style.gridRowEnd = `span ${rowSpan}`
}

const Events = () => {
	const { List, ListAddButton } = components
	const [lang] = useLangs()
	const eventsWrapper = useRef(null)

	const [listId, listType, items] = getListData(lang)
	const sortedItems = useSortedItems(items)
	const isAdmin = useAdminMode()

	let events, grid, wrapper

	useEffect(() => {
		wrapper = eventsWrapper.current
		grid = wrapper.getElementsByClassName('list')[0]
		events = grid.getElementsByClassName('list-item')
		const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'))
		const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'))

		for (let i = 0; i < events.length; i += 1) {
			resizeMasonryItem(rowGap, rowHeight, events[i])
		}
	}, [sortedItems])

	return pug`
		Page
			ContentArea(showed=isAdmin)
				Title
				Wrapper(ref=eventsWrapper)
					List(
						id=listId
						type=listType
						name='Афиша'
						childComponent=Event
						addButton=Stas
						deleteButton=DeleteButton
						listProps=listProps
						sortedItems=sortedItems
					)
			if isAdmin
				ListAddButton(
					StyledButton=CustAddButton
					listId=listId
					listType=listType
				)
	`
}

export default Events