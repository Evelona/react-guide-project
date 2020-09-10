import styled from 'styled-components'

export const StyledTitle = styled.h2`
	margin: 0;
	position: absolute;
	left: 400px;
	top: 300px;
	width: 1500px;

	font-weight: normal;
	font-size: 144px;
	white-space: pre-wrap;


	text-align: center;
	color: ${({ theme }) => theme.color.title};

	text-shadow: ${({ theme }) => theme.effect.exhibitElement};
`

export const StyledText = styled.div`
	margin: 0;
	box-sizing: border-box;
	overflow-y: scroll;
	white-space: pre-wrap;
	position: absolute;
	width: 1500px;
	height: 1414px;
	left: 400px;
	top: 700px;

	font-family: Arsenal;
	font-style: normal;
	font-weight: normal;
	font-size: 48px;
	line-height: 118%;

	display: flex;
	// align-items: center;

	color: ${({ theme }) => theme.color.enterIconEnabled};
	mask-image: linear-gradient(to bottom, transparent, #000 5%, #000 90%, transparent 100%);
	
	::-webkit-scrollbar {
		display: none;
	}
	
	.text {
		height: fit-content;
		margin: 50px 0 50px 0;
	}
`