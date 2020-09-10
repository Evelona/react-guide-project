import { RESET_APP_TIMEOUT } from 'CONFIG'
import React from 'react'

class User extends React.Component {
	constructor(props) {
		super(props)

		this.updateTimer = this.updateTimer.bind(this)
		this.timerId = 0
	}

	updateTimer() {
		clearTimeout(this.timerId)
		const { inactionTimeout } = this.props
		const time = inactionTimeout ? inactionTimeout : RESET_APP_TIMEOUT

		this.timerId = setTimeout(() => this.props.onInactive(), time)

		if (this.props.onActive) this.props.onActive()
	}

	componentDidMount() {
		this.updateTimer()
		document.body.addEventListener('mouseup', this.updateTimer)
		document.body.addEventListener('touchend', this.updateTimer)
	}

	componentWillUnmount() {
		document.body.removeEventListener('mouseup', this.updateTimer)
		document.body.removeEventListener('touchend', this.updateTimer)
		clearTimeout(this.timerId)
	}

	render() {
		return null
	}
}

export default User
