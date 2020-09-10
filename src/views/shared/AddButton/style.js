/* eslint-disable node/no-unpublished-import */
import addBtn from './statics/addBtn.png'
import styled from 'styled-components'

export default styled.div`
	position: absolute;
	top: ${({ top }) => top ? `${top}` : 'none'};
	bottom:${({ bottom }) => bottom ? `${bottom}` : 'none'};
	left: ${({ left }) => left ? `${left}` : 'none'};
	right: ${({ right }) => right ? `${right}` : 'none'};
	width: 100px;
	height: 100px;
	background: url(${addBtn}) no-repeat;
	background-size: cover;
	/* z-index: 1000; */
`