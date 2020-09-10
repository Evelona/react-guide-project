import { createActions } from 'redux-actions'
import { identity } from 'lodash'
import { upgradeActionsToHooks } from 'action-converter'

export const {
	setCurrExhibit,
	setCurrExhibitId
} = createActions({
	SET_CURR_EXHIBIT: identity,
	SET_CURR_EXHIBIT_ID: identity,
})

export const {
	useSetCurrExhibit,
	useSetCurrExhibitId,
} = upgradeActionsToHooks({
	setCurrExhibit,
	setCurrExhibitId,
})