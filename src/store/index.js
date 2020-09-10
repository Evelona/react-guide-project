import { combineReducers } from 'redux-immutable'
import currentExhibitReducer from './features/current-exhibit'
import currentFloorReducer from './features/current-floor'
import currentPageReducer from './features/current-page'
import currentRoomReducer from './features/current-room'

const reducer = combineReducers({
	currExhibit: currentExhibitReducer,
	currFloor: currentFloorReducer,
	currPage: currentPageReducer,
	currRoom: currentRoomReducer,
})

export default reducer
