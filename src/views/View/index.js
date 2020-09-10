import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { DURATION, theme } from 'config'
import { useCurrPage, useSetCurrPage } from 'store/features/current-page'

import About from './scenes/About'
import AppContainer from './components/App'
import Events from './scenes/Events'
import { FloorProvider } from 'contexts/floors-context'
import GlobalStyles from './style'
import MainPage from './scenes/MainPage'
import Price from './scenes/Price'
import Room from './scenes/Room'
import { ThemeProvider } from 'styled-components'
import User from 'User'
import { hot } from 'react-hot-loader/root'
import { useAdminMode } from 'store/features/events'

let App = () => {
	const isAdmin = useAdminMode()
	const page = useCurrPage()
	const setCurrPage = useSetCurrPage()
	const resetApp = () => {
		if ((!isAdmin && page !== 'main') || (isAdmin && page === 'room')) setCurrPage('main')
	}

	const updateTimer = () => {
		if (page === 'room') {
			const event = new CustomEvent('activity-on-room-page')

			document.dispatchEvent(event)
		}
	}

	return pug`
		User(onInactive=resetApp onActive=updateTimer inactionTimeout=20000)
		ThemeProvider(theme=theme)
			GlobalStyles
			FloorProvider
				AppContainer
					TransitionGroup(component=${null})
						if page === 'main'
							CSSTransition(timeout=DURATION.SLOWER classNames='anim')
								MainPage
						if page === 'price'
							CSSTransition(timeout=DURATION.SLOWER classNames='anim')
								Price
						if page === 'events'
							CSSTransition(timeout=DURATION.SLOWER classNames='anim')
								Events
						if page === 'about'
							CSSTransition(timeout=DURATION.SLOWER classNames='anim')
								About
						if page === 'room'
							CSSTransition(timeout=DURATION.SLOWER classNames='anim')
								Room
	`
}

if (module.hot) {
	App = hot(App)
}

export default App