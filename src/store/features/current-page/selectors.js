import { from } from './paths'
import getOps from 'state-ops'
import { useSelector } from 'react-redux'

const { get } = getOps(from('app', 'currPage'))

export const useCurrPage = () => useSelector(state => get.currPage(state))