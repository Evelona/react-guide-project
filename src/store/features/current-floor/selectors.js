import { from } from './paths'
import getOps from 'state-ops'
import { useSelector } from 'react-redux'

const { get } = getOps(from('app', 'currFloor'))

export const useCurrFloor = () => useSelector(state => get.currFloor(state))