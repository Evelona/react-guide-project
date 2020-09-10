import { DURATION } from 'config'
import styled from 'styled-components'

export const PhotoViewer = styled.div`
	z-index: 999;
	position: absolute;
	width: 3840px;
	height: 2160px;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.90);

	&.anim-enter {
		touch-action: none;
		pointer-events: none;
		opacity: 0;
	}
	&.anim-enter-active {
		opacity: 1;
		transition:
			opacity ${DURATION.NORMAL}ms ease;
	}
	&.anim-exit  {
		pointer-events: none;
		touch-action: none;
		opacity: 1;
	}
	&.anim-exit-active {
	  opacity: 0;
	  transition: opacity ${DURATION.NORMAL}ms ease;
	}
`