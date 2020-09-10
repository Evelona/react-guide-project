import { handleActions } from 'redux-actions'
import { setCurrPage } from './actions'

const initialState = 'main'

export default handleActions({
	[setCurrPage]: (state, action) => action.payload
}, initialState)
