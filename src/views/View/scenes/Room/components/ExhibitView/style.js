import styled from 'styled-components'

export const StyledPhoto = styled.div`
	position: absolute;
	width: 1264px;
	height: 1100px;
	right: 417px;
	top: 370px;

	background: ${({ path }) => `url(./statics/exhibits/${path}) 0 0 no-repeat`};
	background-size: cover;
	box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
	border-radius: 20px;

	font-size: 94px;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Text = styled.div`
	position: absolute;
	right: 417px;
	top: 1500px;
	text-align: right;
	width: 1400px;
	height: 100px;
`

export const StyledTitle = styled.p`
	margin: 0;

	font-family: Caveat;
	font-style: normal;
	font-weight: normal;
	font-size: 96px;
	line-height: 94%;
	padding-bottom: 10px;


	color: ${({ theme }) => theme.color.title};

	text-shadow: ${({ theme }) => theme.effect.exhibitElement};
`
export const StyledYear = styled.p`
	margin: 0;
	white-space: pre-line;
	// position: absolute;
	max-width: 1400px;
	height: 57px;
	// right: 417px;
	// top: 1673px;

	font-family: Arsenal;
	font-style: normal;
	font-weight: normal;
	font-size: 48px;
	line-height: 118%;
	
	color: ${({ theme }) => theme.color.title};
`