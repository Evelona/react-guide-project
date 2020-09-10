import { animPoints, floorBg } from './kit'

import styled from 'styled-components'

export const FloorPlan = styled.div`
	background-image: ${({ currentFloor }) => `url(${floorBg[currentFloor]})`};
	background-size: cover;
	position: absolute;
	top: 198px;
	left: 200px;
	width: 2866px;
	height: 1423px;

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

export const MapText = styled.div`
	&.enter {
		opacity: 0;
	}
	&.enter-active {
		opacity: 1;
		transition: opacity 1000ms
	}
	&.exit {
		opacity: 0;
	}
	&.exit-active { 
		opacity: 0;
		transition: opacity 1000ms
	}
`

export const RoomTitle = styled.h2`
	color: ${({ theme }) => theme.color.title};
	${({ theme }) => theme.enterIcon};
	text-align: right;
	margin: 0;
	position: absolute;
	// top: 439px;
	bottom: 1473px;
	right: 2120px;
	white-space: pre-line;
	font-size: 124px;
	font-weight: 400;
	max-width: 1200px;
`
export const RoomDescription = styled.p`
	margin: 0;
	font-family: Arsenal;
	font-size: 42px;
	color: ${({ theme }) => theme.color.title};
	display: flex;
	align-items: center;
	line-height: 118%;
	white-space: pre-line;
	position: absolute;
	width: 800px;
	top: 645px;
	left: 1825px;
	text-align: left;
`

