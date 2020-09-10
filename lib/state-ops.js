import { isFunction, lowerFirst, mapKeys, mapValues, replace } from 'lodash'

export default paths => {
	paths = mapKeys(paths, (value, key) => {
		return lowerFirst(replace(key, 'to', ''))
	})

	return {
		get: mapValues(paths, explorer => (state, ...args) => {
			return state.getIn(explorer(...args))
		}),
		map: mapValues(paths, explorer => (state, ...args) => {
			const value = args.pop()

			// eslint-disable-next-line no-shadow
			return state.updateIn(explorer(...args), state => state.map(value))
		}),
		merge: mapValues(paths, explorer => (state, ...args) => {
			const value = args.pop()

			return state.mergeIn(explorer(...args), value)
		}),
		set: mapValues(paths, explorer => (state, ...args) => {
			const value = args.pop()

			if (isFunction(value)) {
				return state.updateIn(explorer(...args), value)
			}

			return state.setIn(explorer(...args), value)
		})
	}
}