import { DURATION } from 'config'
import logo from '../../statics/Logo.webp'
import styled from 'styled-components'

export const Logo = styled.div`
	background: url(${logo}) no-repeat 0 0;
	background-size: cover;
	position: absolute;
	width: 400px;
	height: 400px;
	top: 0;
	left: 0;
`

export const Text = styled.div`
	padding-left: 50px;
	font-size: 180px;
	color: #575555;
	text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
`

export const Mask = styled.div`
	width: 100%;
	height: 100%;
	mask-image: linear-gradient(
		${({ page }) => page !== 'room' ? 'to bottom, transparent, #000 10%, #000 90%, transparent' : null}
	);
	pointer-event: none;
`

export default styled.div`
	position: absolute;
	width: 3840px;
	height: 2160px;

	&.anim-enter {
		touch-action: none;
		pointer-events: none;
		opacity: 0;
	}
	&.anim-enter-active {
		opacity: 1;
		transition:
			opacity ${DURATION.SLOW}ms ease;
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
