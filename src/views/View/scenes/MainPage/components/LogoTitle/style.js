import styled from 'styled-components'

export const LogoTitle = styled.div`
	position: absolute;
	top: 136px;
	left: 200px;
	font-weight: bold;
	font-size: 48px;
	
	color: ${({ theme }) => theme.color.enterIconEnabled};
	
	.big {
		font-weight: bold;
		font-size: 84px;
		line-height: 84px;
		display: block;
	}
	
	p {
		margin: 0;
	}
`