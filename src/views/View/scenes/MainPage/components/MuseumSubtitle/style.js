import styled from 'styled-components'

export const Subtitle = styled.div`
	position: absolute;
	top: 318px;
	right: 469px;
	color: ${({ theme }) => theme.color.enterIconEnabled};

	p {
		font-size: 64px;
		line-height: 70px;
		text-align: right;
		font-weight: 600;
		margin: 0;
	}
`