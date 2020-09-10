/* eslint-disable */
import { ops, selectors } from './app-shell-kit'
import { useSelector } from 'react-redux'

const ListOfEventsEng = 'ListOfEventsEng'
const ListOfEventsRus = 'ListOfEventsRus'
const ListOfEventsTat = 'ListOfEventsTat'
const ListOfServiceCategoriesEngLeft = 'ListOfServiceCategoriesEngLeft'
const ListOfServiceCategoriesEngRight = 'ListOfServiceCategoriesEngRight'
const ListOfServiceCategoriesRusLeft = 'ListOfServiceCategoriesRusLeft'
const ListOfServiceCategoriesRusRight = 'ListOfServiceCategoriesRusRight'
const ListOfServiceCategoriesTatLeft = 'ListOfServiceCategoriesTatLeft'
const ListOfServiceCategoriesTatRight = 'ListOfServiceCategoriesTatRight'

export const useListOfEventsEngCluster = () => useSelector((state) => {
	const listId = selectors.getDataFieldIdByClusterName(state, ListOfEventsEng)
	const listType = selectors.getFieldTypeByClusterName(state, ListOfEventsEng)

	return [listId, listType]
})

export const useListOfEventsEngClusterItems = () => useSelector((state) => {
	const listId = selectors.getDataFieldIdByClusterName(state, ListOfEventsEng)
	const listType = selectors.getFieldTypeByClusterName(state, ListOfEventsEng)

	return selectors.getListItems(state, listId, listType)
})
		
export const useListOfEventsRusCluster = () => useSelector((state) => {
	const listId = selectors.getDataFieldIdByClusterName(state, ListOfEventsRus)
	const listType = selectors.getFieldTypeByClusterName(state, ListOfEventsRus)

	return [listId, listType]
})

export const useListOfEventsRusClusterItems = () => useSelector((state) => {
	const listId = selectors.getDataFieldIdByClusterName(state, ListOfEventsRus)
	const listType = selectors.getFieldTypeByClusterName(state, ListOfEventsRus)

	return selectors.getListItems(state, listId, listType)
})
		
export const useListOfEventsTatCluster = () => useSelector((state) => {
	const listId = selectors.getDataFieldIdByClusterName(state, ListOfEventsTat)
	const listType = selectors.getFieldTypeByClusterName(state, ListOfEventsTat)

	return [listId, listType]
})

export const useListOfEventsTatClusterItems = () => useSelector((state) => {
	const listId = selectors.getDataFieldIdByClusterName(state, ListOfEventsTat)
	const listType = selectors.getFieldTypeByClusterName(state, ListOfEventsTat)

	return selectors.getListItems(state, listId, listType)
})
		
export const useListOfServiceCategoriesEngLeftCluster = () => useSelector((state) => {
	const listId = selectors.getDataFieldIdByClusterName(state, ListOfServiceCategoriesEngLeft)
	const listType = selectors.getFieldTypeByClusterName(state, ListOfServiceCategoriesEngLeft)

	return [listId, listType]
})

export const useListOfServiceCategoriesEngLeftClusterItems = () => useSelector((state) => {
	const listId = selectors.getDataFieldIdByClusterName(state, ListOfServiceCategoriesEngLeft)
	const listType = selectors.getFieldTypeByClusterName(state, ListOfServiceCategoriesEngLeft)

	return selectors.getListItems(state, listId, listType)
})
		
export const useListOfServiceCategoriesEngRightCluster = () => useSelector((state) => {
	const listId = selectors.getDataFieldIdByClusterName(state, ListOfServiceCategoriesEngRight)
	const listType = selectors.getFieldTypeByClusterName(state, ListOfServiceCategoriesEngRight)

	return [listId, listType]
})

export const useListOfServiceCategoriesEngRightClusterItems = () => useSelector((state) => {
	const listId = selectors.getDataFieldIdByClusterName(state, ListOfServiceCategoriesEngRight)
	const listType = selectors.getFieldTypeByClusterName(state, ListOfServiceCategoriesEngRight)

	return selectors.getListItems(state, listId, listType)
})
		
export const useListOfServiceCategoriesRusLeftCluster = () => useSelector((state) => {
	const listId = selectors.getDataFieldIdByClusterName(state, ListOfServiceCategoriesRusLeft)
	const listType = selectors.getFieldTypeByClusterName(state, ListOfServiceCategoriesRusLeft)

	return [listId, listType]
})

export const useListOfServiceCategoriesRusLeftClusterItems = () => useSelector((state) => {
	const listId = selectors.getDataFieldIdByClusterName(state, ListOfServiceCategoriesRusLeft)
	const listType = selectors.getFieldTypeByClusterName(state, ListOfServiceCategoriesRusLeft)

	return selectors.getListItems(state, listId, listType)
})
		
export const useListOfServiceCategoriesRusRightCluster = () => useSelector((state) => {
	const listId = selectors.getDataFieldIdByClusterName(state, ListOfServiceCategoriesRusRight)
	const listType = selectors.getFieldTypeByClusterName(state, ListOfServiceCategoriesRusRight)

	return [listId, listType]
})

export const useListOfServiceCategoriesRusRightClusterItems = () => useSelector((state) => {
	const listId = selectors.getDataFieldIdByClusterName(state, ListOfServiceCategoriesRusRight)
	const listType = selectors.getFieldTypeByClusterName(state, ListOfServiceCategoriesRusRight)

	return selectors.getListItems(state, listId, listType)
})
		
export const useListOfServiceCategoriesTatLeftCluster = () => useSelector((state) => {
	const listId = selectors.getDataFieldIdByClusterName(state, ListOfServiceCategoriesTatLeft)
	const listType = selectors.getFieldTypeByClusterName(state, ListOfServiceCategoriesTatLeft)

	return [listId, listType]
})

export const useListOfServiceCategoriesTatLeftClusterItems = () => useSelector((state) => {
	const listId = selectors.getDataFieldIdByClusterName(state, ListOfServiceCategoriesTatLeft)
	const listType = selectors.getFieldTypeByClusterName(state, ListOfServiceCategoriesTatLeft)

	return selectors.getListItems(state, listId, listType)
})
		
export const useListOfServiceCategoriesTatRightCluster = () => useSelector((state) => {
	const listId = selectors.getDataFieldIdByClusterName(state, ListOfServiceCategoriesTatRight)
	const listType = selectors.getFieldTypeByClusterName(state, ListOfServiceCategoriesTatRight)

	return [listId, listType]
})

export const useListOfServiceCategoriesTatRightClusterItems = () => useSelector((state) => {
	const listId = selectors.getDataFieldIdByClusterName(state, ListOfServiceCategoriesTatRight)
	const listType = selectors.getFieldTypeByClusterName(state, ListOfServiceCategoriesTatRight)

	return selectors.getListItems(state, listId, listType)
})
		
export const useGuideEventDate = (id) => useSelector((state) => {
	return ops.get.guideEventDate(state, id)
})
	
export const useGuideEventDescription = (id) => useSelector((state) => {
	return ops.get.guideEventDescription(state, id)
})
	
export const useGuideEventName = (id) => useSelector((state) => {
	return ops.get.guideEventName(state, id)
})
	
export const useGuideEventPhoto = (id) => useSelector((state) => {
	return ops.get.guideEventPhoto(state, id)
})
	
export const useGuideEventDateDay = (id) => useSelector((state) => {
	return ops.get.guideEventDateDay(state, id)
})
	
export const useGuideEventDateMonth = (id) => useSelector((state) => {
	return ops.get.guideEventDateMonth(state, id)
})
	
export const useServiceCost = (id) => useSelector((state) => {
	return ops.get.serviceCost(state, id)
})
	
export const useServiceName = (id) => useSelector((state) => {
	return ops.get.serviceName(state, id)
})
	
export const useServiceCategoryName = (id) => useSelector((state) => {
	return ops.get.serviceCategoryName(state, id)
})
	
export const useServiceCategoryPrices = (id) => useSelector((state) => {
	const listId = ops.get.serviceCategoryPrices(state, id)
	const listType = ops.get.serviceCategoryPricesType(state, id)

	return [listId, listType]
})

export const useServiceCategoryPricesItems = (id) => useSelector((state) => {
	const listId = ops.get.serviceCategoryPrices(state, id)
	const listType = ops.get.serviceCategoryPricesType(state, id)

	return selectors.getListItems(state, listId, listType)
})
	