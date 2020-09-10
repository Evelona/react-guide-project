import { Multilang } from 'langs'
import { Subtitle } from './style'

const firstLine = {
	eng: 'National Museum',
	rus: 'Национальный Музей',
	tat: 'Татарстан Республикасы'
}

const secondLine = {
	eng: 'of the Republic of Tatarstan',
	rus: 'Республики Татарстан',
	tat: 'Милли музее'
}

export default () => {
	return pug`
		Subtitle
			p
				Multilang(...firstLine)
			p 
				Multilang(...secondLine)
	`
}