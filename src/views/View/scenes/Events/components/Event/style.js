import bg from './statics/background.webp'
import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 700px;
	height: auto;
	min-height: 500px;
	border-radius: 25px;
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.3);
	background: url(${bg});
	background-position: center;
	margin-left: 36px;
	margin-right: 36px;
	margin-top: 27px;
	margin-bottom: 27px;
	display: flow-root;
	div {
		scroll-behavior: auto;
    	overscroll-behavior: auto;
	}
`