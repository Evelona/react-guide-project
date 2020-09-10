import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { DURATION, MASK_COUNT } from 'config'
import { useEffect, useState } from 'react'

import Mask from './components/Mask'
import { useCurrExhibitId } from 'store/features/current-exhibit'
import usePrevious from 'use-previous'

const changeMask = (index) => {
	if (index === MASK_COUNT - 1) return 0

	return index += 1
}

export default () => {
	const [maskIndex, setMaskIndex] = useState(0)

	const currExhibitId = useCurrExhibitId()
	const prevExhibitId = usePrevious(currExhibitId, [Mask, 'currExhibitId'])

	useEffect(() => {
		if (prevExhibitId !== currExhibitId) {
			setMaskIndex(changeMask(maskIndex))
		}
	}, [currExhibitId])

	return pug`
		TransitionGroup
			CSSTransition(key=maskIndex timeout=DURATION.NORMAL)
				Mask(index=maskIndex currExhibitId=currExhibitId)
	`
}