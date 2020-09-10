import { createActions } from 'redux-actions'
import { identity } from 'lodash'
import { upgradeActionsToHooks } from 'action-converter'

export const {
	setCurrRoom,
} = createActions({
	SET_CURR_ROOM: identity,
})

export const {
	useSetCurrRoom,
} = upgradeActionsToHooks({
	setCurrRoom,
})