import { camelCase, mapKeys, mapValues } from 'lodash'

import { useDispatch } from 'react-redux'

export const upgradeActionsToHooks = (actionCreators) => {
	const hooks = mapValues(actionCreators, (actionCreator) => (
		() => {
			const dispatch = useDispatch()

			return (...args) => dispatch(actionCreator(...args))
		}
	))

	return mapKeys(hooks, (actionCreator, actionName) => (
		camelCase(`use-${actionName}`))
	)
}