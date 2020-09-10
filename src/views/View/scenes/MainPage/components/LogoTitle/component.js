import { LogoTitle } from './style'
import { Multilang } from 'langs'

const exhibit = {
	eng: 'Exposition',
	rus: 'Экспозиция',
	tat: 'Экспозициясе'
}
const history = {
	eng: 'The History of the Republic of Tatarstan',
	rus: 'История Республики Татарстан',
	tat: 'Татарстан Республикасының борынгы'
}
const historySubtitle = {
	eng: 'from Ancient Times to the Present Days',
	rus: 'с древнейших времен до наших дней',
	tat: 'заманнан башлап бүгенге көнгә кадәр тарихы'
}

export default () => {
	return pug`
			LogoTitle
				p 
					Multilang(...exhibit)
				p.big
					Multilang(...history)
				p.big
					Multilang(...historySubtitle)
	`
}