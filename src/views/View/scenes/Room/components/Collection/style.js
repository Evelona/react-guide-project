import styled from 'styled-components'

export const Wrapper = styled.div`
	position: absolute;
	width: 1360px;
	box-sizing: border-box;
	padding: 15px 0;
	bottom: 105px;
	right: 370px;
	overflow-x: scroll;
	white-space: nowrap;
	mask-image: linear-gradient(to right, transparent, #000 5%, #000 90%, transparent 100%);

	::-webkit-scrollbar {
		width: 0;
		display: none;
	}

`

export const Exhibit = styled.div`
	display: inline-block;
	width: 300px;
	height: 260px;
	background: ${({ path }) => `url(./statics/exhibits/${path}) 0 0 no-repeat`};
	background-size: cover;
	box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
	border-radius: 20px;

	margin-right: 32px;

	:last-child {
		margin-right: 64px;
	}

	:first-child {
		margin-left: 32px;
	}

	
`