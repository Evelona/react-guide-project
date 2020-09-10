import AddButton from 'AddButton'
import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	height: auto;
	min-height: 300px;
`

export const Title = styled.div`
	height: auto;
	width: 100%;
	margin-bottom: ${({ isAdmin }) => isAdmin ? '0px' : '-10px'};
	.ql-editor {
		/* height: 100%; */
		font-family: Caveat;
		font-style: normal;
		font-weight: normal;
		font-size: 110px;
		color: #575555;
	}
`

export const ListWrapper = styled.div`
	width: 1000px;
	height: auto;
	margin-left: 95px;
`

export const PositionedAddButton = styled(AddButton)`
	left: 50%;
	position: relative;
	margin: 20 0 20 0;
`