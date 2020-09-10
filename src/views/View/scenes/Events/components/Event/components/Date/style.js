/* eslint-disable node/no-unpublished-import */
import styled from 'styled-components'

export const Date = styled.div`
	margin-top: 23px;
	margin-bottom: 23px;
	margin-right: 37px;
	float: right;
	* {
		display: flex;
		/* overflow: hidden; */
	}
	.ql-editor, .date {
		padding: 5px;
		font-family: Caveat;
		font-style: normal;
		font-weight: normal;
		font-size: 64px;
		line-height: 95%;
		height: 100%;
	}
	height: 80px;
`

export const Day = styled.div`
	min-width: 50px;
	height: 100%;
	float: left;
`

export const Month = styled.div`
	min-width: 50px;
	height: 100%;
	float: right;
`