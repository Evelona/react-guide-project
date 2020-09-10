import {
	useListOfEventsEngCluster,
	useListOfEventsEngClusterItems,
	useListOfEventsRusCluster,
	useListOfEventsRusClusterItems,
	useListOfEventsTatCluster,
	useListOfEventsTatClusterItems
} from 'cs-data-hooks'

export const getListData = (lang) => {
	let listId, listType
	let items

	if (lang === 'rus') {
		const [rusListId, rusListType] = useListOfEventsRusCluster()
		const rusItems = useListOfEventsRusClusterItems()

		listId = rusListId
		listType = rusListType
		items = rusItems
	} else if (lang === 'tat') {
		const [tatListId, tatListType] = useListOfEventsTatCluster()
		const tatItems = useListOfEventsTatClusterItems()

		listId = tatListId
		listType = tatListType
		items = tatItems
	} else {
		const [engListId, engListType] = useListOfEventsEngCluster()
		const engItems = useListOfEventsEngClusterItems()

		listId = engListId
		listType = engListType
		items = engItems
	}

	return [listId, listType, items]
}