import dragButton from './statics/drag-button.svg'
import styled from 'styled-components'

export const DragHandle = styled.div`
	position: absolute;
	width: 50px;
	height: 50px;
	mask: url(${dragButton}) center no-repeat;
	mask-size: contain;
	background: black;
	/* display: inline-block; */
	justify-content: center;
	align-items: center;
	margin-left: 1020px;
	margin-top: -80px;
	border-radius: 5px;
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.3);
`
