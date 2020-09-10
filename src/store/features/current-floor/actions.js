import { createActions } from 'redux-actions'
import { identity } from 'lodash'
import { upgradeActionsToHooks } from 'action-converter'

export const {
	setCurrFloor,
} = createActions({
	SET_CURR_FLOOR: identity,
})

export const {
	useSetCurrFloor,
} = upgradeActionsToHooks({
	setCurrFloor,
})