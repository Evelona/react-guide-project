import { handleActions } from 'redux-actions'
import { setCurrRoom } from './actions'

const initialState = 0

export default handleActions({
	[setCurrRoom]: (state, action) => action.payload
}, initialState)
