/* eslint-disable no-unused-vars */
import { Langs, Multilang } from 'langs'
import StyledPage, { Icon, Text, Title } from './style'

import Back from 'Back'
import { texts } from './data'
import { useCurrPage } from 'store/features/current-page'

const Page = (props) => {
	const page = useCurrPage()

	return pug`
		Title
			Icon(page=page)
			Text
				Multilang(list=texts[page])
	`
}

export default Page
