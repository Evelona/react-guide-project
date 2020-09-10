import { from } from './paths'
import getOps from 'state-ops'
import { useSelector } from 'react-redux'

const { get } = getOps(from('app', 'currExhibit'))

export const useCurrExhibit = () => useSelector(state => get.currExhibit(state))
export const useCurrExhibitId = () => {
	return useSelector(state => get.currExhibitId(state))
}