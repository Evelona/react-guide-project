import { setCurrExhibit, setCurrExhibitId } from './actions'

import { Map } from 'immutable'
import { handleActions } from 'redux-actions'

const initialState = new Map({
	id: 0,
	index: 0,
})

export default handleActions({
	[setCurrExhibit]: (state, action) => state.set('index', action.payload),
	[setCurrExhibitId]: (state, action) => state.set('id', action.payload)
}, initialState)
