import {
	useListOfServiceCategoriesEngLeftCluster,
	useListOfServiceCategoriesEngRightCluster,
	useListOfServiceCategoriesRusLeftCluster,
	useListOfServiceCategoriesRusRightCluster,
	useListOfServiceCategoriesTatLeftCluster,
	useListOfServiceCategoriesTatRightCluster,
} from 'cs-data-hooks'

export const getListOfServiceCategories = (lang, side) => {
	let listId, listType

	if (side === 'left') {
		if (lang === 'rus') {
			[listId, listType] = useListOfServiceCategoriesRusLeftCluster()
		} else if (lang === 'tat') {
			[listId, listType] = useListOfServiceCategoriesTatLeftCluster()
		} else {
			[listId, listType] = useListOfServiceCategoriesEngLeftCluster()
		}
	} else if (side === 'right') {
		if (lang === 'rus') {
			[listId, listType] = useListOfServiceCategoriesRusRightCluster()
		} else if (lang === 'tat') {
			[listId, listType] = useListOfServiceCategoriesTatRightCluster()
		} else {
			[listId, listType] = useListOfServiceCategoriesEngRightCluster()
		}
	}

	return [listId, listType]
}

