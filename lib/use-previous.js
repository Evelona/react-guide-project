import { useEffect, useRef, useState } from 'react'

import memoize from 'moize'

const restoreInputs = memoize((...inputs) => inputs)

const data = new Map()
const getData = (inputs) => data.get(restoreInputs(...inputs))
const setData = (inputs, value) => data.set(restoreInputs(...inputs), value)

const usePrevious = (value, inputs = []) => {
	const [initialValue] = useState(() => {
		if (inputs.length < 2) {
			console.warn('Please add additional identification to usePrevious')
		}

		return inputs ? getData(inputs) : null
	})
	const ref = useRef(initialValue)

	useEffect(() => {
		if (inputs) {
			setData(inputs, value)
		}
		ref.current = value
	}, [value])

	return ref.current
}

export default usePrevious