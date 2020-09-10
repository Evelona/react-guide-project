import ArsenalRegular from '../statics/fonts/Arsenal-Regular.preload.ttf'
import CaveatRegular from '../statics/fonts/Caveat-Regular.preload.ttf'
import SansCondensedEurasian from '../statics/fonts/Sans_Condensed_Eurasian.preload.ttf'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	@font-face {
		font-family: 'Arsenal';
		src: url(${ArsenalRegular});
	}
	@font-face {
		font-family: 'Caveat';
		src: url(${CaveatRegular});
	}
	@font-face {
		font-family: 'Sans Condensed Eurasian';
		src: url(${SansCondensedEurasian});
	}

	html {
		font-family: Caveat, sans-serif !important;
	}

	body {
		overflow-x: hidden;
		user-select: none;
	}

	.ql-editor {
		font-family Sans Condensed Eurasian, sans-serif
	}

	#app {
		position: relative !important;
		overflow: hidden !important;
	}
`