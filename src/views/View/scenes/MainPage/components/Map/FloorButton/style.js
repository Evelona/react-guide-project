import {
	animPoints,
	arrowMoveDirection,
	icon
} from './kit'
import styled, { keyframes } from 'styled-components'

const arrowMove = (currentFloor) => keyframes`
	from { transform: translate(${arrowMoveDirection[currentFloor].top});}
	50% {	transform: translate(${arrowMoveDirection[currentFloor].bottom});}
	to { transform: translate(${arrowMoveDirection[currentFloor].top});}
`

export const Wrapper = styled.div`
	position: absolute;
	top: 1250px;
	left: 319px;
	width: 366px;
	height: 260px;
	cursor: pointer;

	&.enter {
		opacity: 0;
		${({ animDirection, currentFloor }) => animPoints[animDirection][currentFloor].start};
	}
	&.enter-active { 
		opacity: 1;
		transform: translateY(0%);
		transition: opacity 1000ms, transform 1000ms
	}
	&.exit { 
		opacity: 1; 
		transform: translateY(0);
	}
	&.exit-active { 
		opacity: 0;
		${({ animDirection, currentFloor }) => animPoints[animDirection][currentFloor].end};
		transition: opacity 1000ms, transform 1000ms; 
	}
	
`

export const Arrow = styled.div`
	background: url(${({ currentFloor }) => icon[currentFloor].arrow}) no-repeat center;
	background-size: contain;
	width: 46px;
	height: 25px;
	margin: 0 auto;
	animation: ${({ currentFloor }) => arrowMove(currentFloor)} 1.5s linear infinite;
	
`

export const Stairs = styled.div`
	background: url(${({ currentFloor }) => icon[currentFloor].stair}) no-repeat center;
	background-size: contain;
	width: 128px;
	height: 112px;
	margin: -20px auto 0 auto;
	text-shadow: ${({ theme }) => theme.effect.enterIcon}

`

export const Label = styled.p`
	font-size: 72px;
	margin: 10px 0 0 0;
	white-space: pre-wrap;
	color: ${({ theme }) => theme.color.enterIconEnabled};
	text-align: center;
	line-height: 85%;
	text-shadow: ${({ theme }) => theme.effect.enterIcon}

`
