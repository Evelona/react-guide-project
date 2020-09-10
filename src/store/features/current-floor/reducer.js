import { handleActions } from 'redux-actions'
import { setCurrFloor } from './actions'

const initialState = 0

export default handleActions({
	[setCurrFloor]: (state, action) => action.payload
}, initialState)
