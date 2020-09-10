import dragButton from './statics/drag-button.svg'
import styled from 'styled-components'

export const DragHandle = styled.div`
	position: absolute;
	bottom: 20;
	right: 30;
	background: url(${dragButton}) center no-repeat;
	width: 50px;
	height: 50px;
	user-select: none;
`
