/* eslint-disable no-unused-vars */
// eslint-disable-next-line sort-imports
import { Icon, StyledBack, Text } from './style'

import { DURATION } from 'config'
import { Multilang } from 'langs'
import TransferButton from 'TransferButton'

const back = {
	eng: 'Back',
	rus: 'Назад',
	tat: 'Артка',
}

const Back = () => {
	return pug`
		TransferButton(
			WrapperComponent=StyledBack
			SizedComponent=Icon
			pageToTransfer='main'
		)
			Text
				Multilang(list=back)
	`
}

export default Back