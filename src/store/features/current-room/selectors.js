import { from } from './paths'
import getOps from 'state-ops'
import { useSelector } from 'react-redux'

const { get } = getOps(from('app', 'currRoom'))

export const useCurrRoom = () => useSelector(state => get.currRoom(state))