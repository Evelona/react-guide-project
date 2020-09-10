import about from './statics/Book.svg'
import { animated } from 'react-spring'
import divider from './statics/divider.svg'
import events from './statics/Events.svg'
import price from './statics/List.svg'
import styled from 'styled-components'

export const MenuBar = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	left: 200px;
	top: 1690px;
	width: 986px;
	height: 270px;
	line-height: .9;
`
export const PriceButton = styled.div`
	width: 286px;
	padding-top: 15px;

`
export const EventsButton = styled.div`
	width: 286px;
	padding-top: 15px;

`
export const AboutButton = styled.div`
	width: 286px;
	padding-top: 15px;
`
export const Divider = styled.div`
	background: url(${divider}) no-repeat center;
	width: 6px;
	height: 270px;

	:last-child {
		padding-top: 10px;
	}
`

export const ButtonIconPrice = styled(animated.div)`
	background: url(${price}) no-repeat center;
	background-size: contain;

	width: 128px;
	height: 100%;
	max-height: 128px;

	margin: 0 auto;
`
export const ButtonIconEvents = styled(animated.div)`
	background: url(${events}) no-repeat center;
	background-size: contain;

	width: 128px;
	height: 100%;
	max-height: 128px;

	margin: 0 auto;
`
export const ButtonIconAbout = styled(animated.div)`
	background: url(${about}) no-repeat center;
	background-size: contain;

	width: 128px;
	height: 100%;
	max-height: 128px;

	margin: 0 auto;
`

export const ButtonLabel = styled.p`
	text-align: center;
	position: absolute; // чтобы изменение иконки
	top: 170px;	 // не влияло на расположение текста
	font-size: 84px;
	color: ${({ theme }) => theme.color.title};
	margin: 0;
	width: 286px;
	text-shadow: ${({ theme }) => theme.effect.exhibitElement}

`