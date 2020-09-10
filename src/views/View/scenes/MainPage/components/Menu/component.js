import { AboutButton, ButtonIconAbout, ButtonIconEvents, ButtonIconPrice, ButtonLabel, Divider, EventsButton, MenuBar, PriceButton } from './style'

import { Multilang } from 'langs'
import TransferButton from 'TransferButton'

const price = {
	eng: 'Service',
	rus: 'Услуги',
	tat: 'Хезмәтләр'
}
const events = {
	eng: 'Events',
	rus: 'Афиша',
	tat: 'Афиша'
}
const about = {
	eng: 'About museum',
	rus: 'О музее',
	tat: 'Музей турында'
}

export default () => {
	const ButtonPriceIcon = (props) => pug`ButtonIconPrice(...props type='price')`
	const ButtonEventsIcon = (props) => pug`ButtonIconEvents(...props type='events')`
	const ButtonAboutIcon = (props) => pug`ButtonIconAbout(...props type='about')`

	return pug`
		MenuBar
			TransferButton(
				WrapperComponent=PriceButton
				SizedComponent=ButtonPriceIcon
				pageToTransfer='price'
			)
				ButtonLabel(type='price')
					Multilang(...price)
			Divider
			TransferButton(
				WrapperComponent=EventsButton
				SizedComponent=ButtonEventsIcon
				pageToTransfer='events'
			)
				ButtonLabel(type='events')
					Multilang(...events)
			Divider
			TransferButton(
				WrapperComponent=AboutButton
				SizedComponent=ButtonAboutIcon
				pageToTransfer='about'
			)
				ButtonLabel(type='about')
					Multilang(...about)
	`
}