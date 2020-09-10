/* eslint-disable node/no-unpublished-import */
import deleteButton from './statics/delete-button.svg'
import styled from 'styled-components'

export default styled.div`
	/* position: absolute; */
	width: 60px;
	height: 60px;
	mask: url(${deleteButton}) center no-repeat;
	mask-size: contain;
	background: black;
	bottom: 20;
	right: 100;
	position: absolute;
	border-radius: 5px;
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.3);
`