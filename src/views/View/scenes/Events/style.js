import AddButton from 'AddButton'
import styled from 'styled-components'

export const Wrapper = styled.div`
	position: relative;
	top: 360px;
	left: 133px;
	width: 2318px;
	padding-bottom: 200px;
	.list {
		/* display: flex;
		flex-wrap: wrap;
		flex-direction: row; */
		display: grid;
		grid-gap: 1em;
		grid-template-columns: repeat(auto-fill, minmax(660px,1fr));
		grid-auto-rows: 0;
	}

	.list-item {
		position:relative;
		height: max-content;
	}
`
export const CustAddButton = styled(AddButton)`
	position: absolute;
	top: 50%;
	left: 85%;
	width: 200px;
	height: 200px;
`

export const ContentArea = styled.div`
	position: absolute;
	top: 0px;
	left: 627px;
	width: 2586px;
	height: 2160px;
	overflow: hidden auto;
	::-webkit-scrollbar {
			display: ${({ showed }) => showed ? 'auto' : 'none'};
		}
`