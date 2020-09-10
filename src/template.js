/* eslint-disable */
const MultiLangText = {
	fields: {
		eng: 'text',
		rus: 'text',
		tat: 'text'
	},
	name: 'MultiLangText'
}

const EventDate = {
	fields: {
		day: 'text',
		month: 'text'
	},
	name: 'GuideEventDate'
}

const Event = {
	fields: {
		date: EventDate,
		description: 'text',
		name: 'text',
		photo: 'media',
	},
	name: 'GuideEvent'
}

const ListOfEvents = [Event]

const Service = {
	fields: {
		cost: 'text',
		name: 'text',
	},
	name: 'Service'
}

const ListOfServices = [Service]

const ServiceCategory = {
	fields: {
		name: 'text',
		prices: ListOfServices
	},
	name: 'ServiceCategory'
}

const ListOfServiceCategories = [ServiceCategory]

module.exports = ({
	clusters: {
		ListOfEventsEng: {
			label: 'Список событий анг',
			open: true,
			type: ListOfEvents
		},
		ListOfEventsRus: {
			label: 'Список событий рус',
			open: true,
			type: ListOfEvents
		},
		ListOfEventsTat: {
			label: 'Список событий тат',
			open: true,
			type: ListOfEvents
		},
		ListOfServiceCategoriesEngLeft: {
			label: 'Список категорий услуг анг',
			open: true,
			type: ListOfServiceCategories
		},
		ListOfServiceCategoriesEngRight: {
			label: 'Список категорий услуг анг',
			open: true,
			type: ListOfServiceCategories
		},
		ListOfServiceCategoriesRusLeft: {
			label: 'Список категорий услуг рус',
			open: true,
			type: ListOfServiceCategories
		},
		ListOfServiceCategoriesRusRight: {
			label: 'Список категорий услуг рус',
			open: true,
			type: ListOfServiceCategories
		},
		ListOfServiceCategoriesTatLeft: {
			label: 'Список категорий услуг тат',
			open: true,
			type: ListOfServiceCategories
		},
		ListOfServiceCategoriesTatRight: {
			label: 'Список категорий услуг тат',
			open: true,
			type: ListOfServiceCategories
		},
	},
	key: 'nmrt-guide',
	name: 'Путеводитель',
	types: [
		Event, EventDate, Service, ServiceCategory
	]
})