import { createActions } from 'redux-actions'
import { identity } from 'lodash'
import { upgradeActionsToHooks } from 'action-converter'

export const {
	setCurrPage,
} = createActions({
	SET_CURR_PAGE: identity,
})

export const {
	useSetCurrPage,
} = upgradeActionsToHooks({
	setCurrPage,
})