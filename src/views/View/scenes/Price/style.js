import AddButton from 'AddButton'
import Title from 'Title'
import styled from 'styled-components'

export const ContentArea = styled.div`
	position: absolute;
	top: 0px;
	left: 760px;
	width: 2480px;
	height: 2160px;
	overflow: hidden auto;
	div {
		scroll-behavior: auto;
		overscroll-behavior: auto;
	}
	
	::-webkit-scrollbar {
			display: ${({ showed }) => showed ? 'auto' : 'none'};
		}
`

export const PriceTitle = styled(Title)`
	:first-child {
		margin-left: -80px;
	}
`
export const Wrapper = styled.div`
	display: flex;
	position: relative;
	top: 400px;
	left: 5px;
	width: 2319px;
	height: auto;
	padding-bottom: 200px;
	.list-item {
		position: relative;
	}
`

export const LeftColumn = styled.div`
	width: 50%;
	height: max-content;
	/* background: rgba(255, 0,0,0.4); */
	float: left;
`

export const RightColumn = styled.div`
	width: 50%;
	height: max-content;
	/* background: rgba(0, 0,255,0.4); */
	float: right;
	margin-left: 135px;
`
export const PositionedAddButtonLeft = styled(AddButton)`
	position: absolute;
	bottom: 50%;
	left: 400px;
	width: 200px;
	height: 200px;
`

export const PositionedAddButtonRight = styled(AddButton)`
	position: absolute;
	bottom: 50%;
	right: 400px;
	width: 200px;
	height: 200px;
`