import { animated } from 'react-spring'
import back from '../../statics/Back.webp'
import styled from 'styled-components'

export const StyledBack = styled.div`
	position: absolute;
	top: 128px;
	right: 136px;
	height: 144px;
	width: auto;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	z-index: 20;
`

export const Icon = styled(animated.div)`
	width: 128px;
	height: 128px;
	right: 0px;
	background: url(${back}) no-repeat 0 0;
	background-size: cover;
`

export const Text = styled.div`
	position: absolute;
	color: #575555;
	text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
	font-size: 144px;
	font-weight: 400;
	padding-right: 205px;
`