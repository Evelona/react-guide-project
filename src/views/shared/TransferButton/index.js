/* eslint-disable no-unused-vars */
import { DURATION } from 'config'
import { usePress } from 'gesture'
import { useSetCurrPage } from 'store/features/current-page'
import { useState } from 'react'

const TransferButton = ({
	pageToTransfer,
	SizedComponent,
	WrapperComponent,
	children
}) => {
	const setCurrPage = useSetCurrPage()

	const [pressed, setPressed] = useState(false)
	const bind = usePress({
		down: () => setPressed(true),
		tap: () => setCurrPage(pageToTransfer),
		up: () => setPressed(false),
	})

	const sizeStyle = {
		transform: `scale(${pressed ? '0.85' : '1'})`,
		transition: 'transform ease 300ms'
	}

	return pug`
		WrapperComponent(
			...bind()
		)
			SizedComponent(style=${sizeStyle})
			${children}
	`
}

export default TransferButton