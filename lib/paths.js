import { mapValues } from 'lodash'
import moize from 'moize'

export default routers => {
	const createPath = (...rootRoute) => {
		const path = {
			toRoot: () => rootRoute,
			...mapValues(
				routers,
				router => moize((...args) => router(path, ...args))
			)
		}

		return path
	}

	return {
		from: createPath,
		path: createPath()
	}
}
