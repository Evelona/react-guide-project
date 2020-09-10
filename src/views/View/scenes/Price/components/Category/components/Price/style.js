import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 1000px;
	/* height: ${({ isAdmin }) => isAdmin ? 'auto' : '110px'};
	min-height: ${({ isAdmin }) => isAdmin ? '120px' : 'auto'}; */
	display: flex;
	align-items: center;
`
export const Name = styled.div`
	min-width: 200px;
	.ql-editor {
		max-width: 650px;
		font-family: Arsenal;
		font-style: normal;
		font-weight: normal;
		font-size: 72px;

		color: #333333;
	}
`
export const Dots = styled.div`
	height: fit-content;
	padding-bottom: 25px;
	display: flex;
	align-items: center;
	flex-grow: 1;
	flex-shrink: 1;
	flex-basis: 0;
	overflow: hidden;
	white-space: nowrap;
	font-family: Caveat;
	font-style: normal;
	font-weight: normal;
	font-size: 72px;

	color: #333333;
`
export const Buck = styled.div`
	display: inline-block;
	font-family: Caveat;
	font-style: normal;
	font-weight: normal;
	font-size: 72px;

	color: #333333;

	padding-top: 25px;
`

export const Cost = styled.div`
	right: 10;
	.ql-editor {
		max-width: 250px;
		word-wrap: normal;
		overflow: hidden;
		font-family: Caveat;
		font-style: normal;
		font-weight: normal;
		font-size: 72px;
		color: #333333;
	};
	float: right;
`