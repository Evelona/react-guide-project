import { Langs, Multilang } from 'langs'

import { FloorTitle } from './style'
import { FloorsContext } from 'contexts/floors-context'
import LogoTitle from './components/LogoTitle'
import Map from './components/Map'
import Menu from './components/Menu'
import MuseumSubtitle from './components/MuseumSubtitle'
import Page from 'Page'
import { useContext } from 'react'

export default () => {
	const { currFloor } = useContext(FloorsContext)

	const floorLabel = currFloor + 1

	const floor = {
		eng: `${floorLabel} floor`,
		rus: `${floorLabel}-й этаж`,
		tat: `${floorLabel} кат`
	}

	return pug`
		Page
			FloorTitle
				Multilang(...floor)
			LogoTitle
			MuseumSubtitle
			Map
			Menu
	`
}
