const FIRST_TAG_POSITION = 3
const LAST_TAG_POSITION = 7

export const withOutTag = str => str ? str
	.substr(FIRST_TAG_POSITION, str.length - LAST_TAG_POSITION) : ''