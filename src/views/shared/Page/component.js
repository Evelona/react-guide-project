/* eslint-disable no-unused-vars */
import { Langs, Multilang } from 'langs'
import StyledPage, { Logo, Mask, Text } from './style'

import Back from 'Back'
import ExhibitCorner from 'ExhibitCorner'
import { useCurrPage } from 'store/features/current-page'

const Page = (props) => {
	const page = useCurrPage()

	return pug`
		StyledPage#app-page
			if page !== 'room' && page !== 'about'
				ExhibitCorner
			if page !== 'main'
				Logo
				Back
			Mask(page=page)
				${props.children}
			if page !== 'room'
				Langs(
					position='absolute'
					stick='bottom'
					align='center'
					size='retina'
					style=${{ bottom: 0, left: 1607, width: 625 }}
				)
	`
}

export default Page
