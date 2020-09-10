import divider from './statics/divider.svg'
import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 400px;
	height: 600px;
	position: absolute;
	top: 480px;
	left: 1560px;
`

export const Vertical = styled.div`
	margin: 0 auto;
	width: 6px;
	height: 500px;
	background: linear-gradient(180deg, rgba(87, 85, 85, 0) 0%, #575555 100%);
`

export const Gorizontal = styled.div`
	background: url(${divider}) no-repeat center;
	width: 400px;
	height: 6px;

	&:last-child {
      padding-top: 45%;
	}
`

export const Label = styled.div`
	cursor: pointer;
	position: absolute;
	top: 520px;
	left: 32%;
	font-size: 48px;
	color: ${({ theme }) => theme.color.title};
	text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
	z-index: 100;
`
