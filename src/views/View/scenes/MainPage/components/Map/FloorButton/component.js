import { Arrow, Label, Stairs, Wrapper } from './style'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useContext, useState } from 'react'

import { FloorsContext } from 'contexts/floors-context'
import { Multilang } from 'langs'
import { usePress } from 'gesture'
import { useSetCurrExhibit } from 'store/features/current-exhibit'
import { useSetCurrFloor } from 'store/features/current-floor'
import { useSetCurrRoom } from 'store/features/current-room'

export default ({ animDirection }) => {
	const { floors, currFloor } = useContext(FloorsContext)
	const setFloor = useSetCurrFloor()
	const setRoom = useSetCurrRoom()
	const setExhibit = useSetCurrExhibit()

	const setupFloor = () => {
		if (currFloor === floors.length - 1) return 0

		return currFloor + 1
	}

	const [pressed, setPressed] = useState(false)

	// eslint-disable-next-line no-unused-vars
	const bind = usePress({
		down: () => setPressed(true),
		tap: () => {
			setExhibit(0)
			setRoom(0)
			setFloor(setupFloor())
		},
		up: () => setPressed(false),
	})

	const arrowStyle = {
		marginBottom: `${pressed ? '40' : '0'}px`,
		marginTop: `${pressed ? '-40' : '0'}px`,
		transition: 'margin ease 300ms'
	}

	const label = {
		eng: `go\nto ${setupFloor() + 1}nd floor`,
		rus: `перейти\nна ${setupFloor() + 1}-й этаж`,
		tat: `күчәргә\n${setupFloor() + 1} катта`
	}

	return pug`
		TransitionGroup
			CSSTransition(key=currFloor timeout=1000)
				Wrapper( 
					...bind()					
				currentFloor=currFloor 
				animDirection=animDirection)
					Arrow(currentFloor=currFloor style=${arrowStyle})
					Stairs(currentFloor=currFloor)
					Label
						Multilang(...label)
	`
}

