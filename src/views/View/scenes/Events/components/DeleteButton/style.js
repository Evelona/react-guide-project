/* eslint-disable node/no-unpublished-import */
import deleteButton from './statics/delete-button.svg'
import styled from 'styled-components'

export default styled.div`
	position: absolute;
	width: 50px;
	height: 50px;
	mask: url(${deleteButton}) center no-repeat;
	mask-size: contain;
	background: black;
	/* display: inline-block; */
	justify-content: center;
	align-items: center;
	margin-left: 95px;
	margin-top: -130px;
	border-radius: 5px;
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.3);
`