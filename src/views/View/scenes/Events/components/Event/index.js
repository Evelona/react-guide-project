import Date from './components/Date'
import Description from './components/Description'
import Photo from './components/Photo'
import Title from './components/Title'
import { Wrapper } from './style'

const Event = ({ id }) => {
	return pug`
		Wrapper
			Photo(eventId=id)
			Title(eventId=id)
			Description(eventId=id)
			Date(eventId=id)
	`
}

export default Event