import { useContext, useEffect, useState } from 'react'
import { useCurrExhibit, useCurrExhibitId, useSetCurrExhibit, useSetCurrExhibitId } from 'store/features/current-exhibit'
import { useCurrFloor, useSetCurrFloor } from 'store/features/current-floor'
import { useCurrRoom, useSetCurrRoom } from 'store/features/current-room'

import { DURATION } from 'config'
import { FloorsContext } from 'contexts/floors-context/floors-context'
import { setNextExhibit } from './set-next-exhibit'
import useBoolean from 'use-boolean'
import { useListener } from './use-listener'

let animationTimerId
let animationPauseTimerId
const DELAY = DURATION.EXTRASLOW

export const useExhibitAnimation = () => {
	const currRoom = useCurrRoom()
	const setRoom = useSetCurrRoom()

	const currExhibit = useCurrExhibit()
	const setExhibit = useSetCurrExhibit()

	const currFloor = useCurrFloor()
	const setFloor = useSetCurrFloor()

	const currExhibitId = useCurrExhibitId()
	const setExhibitId = useSetCurrExhibitId()

	const { floors } = useContext(FloorsContext)
	const [checked, check] = useState(false)
	const [playing, start, stop] = useBoolean()

	const setters = { check, setExhibit, setFloor, setRoom }

	const values = { currExhibit, currFloor, currRoom, playing }

	useEffect(() => {
		if (checked) {
			check(false)
			clearTimeout(animationTimerId)
			animationTimerId = setTimeout(() => {
				setNextExhibit(setters, values, floors)
			}, DELAY)
		}
	}, [currExhibitId, checked])

	useEffect(() => {
		if (checked) {
			setExhibitId(`${currExhibit}-${currRoom}-${currFloor}`)
		}
	}, [checked])

	useEffect(() => {
		clearTimeout(animationTimerId)
		check(true)
	}, [currRoom, currFloor])

	useListener({ animationPauseTimerId, animationTimerId, check, start, stop })
}