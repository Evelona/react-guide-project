import about from '../../statics/About.webp'
import events from '../../statics/Events.webp'
import price from '../../statics/price.webp'
import styled from 'styled-components'

const icons = {
	'about': about,
	'events': events,
	'price': price
}

export const Title = styled.div`
	position: relative;
	top: 204px;
	height: 192px;
	width: 100%;
	display: flex;
	justify-content: center;
	:first-child {
		margin-left: ${({ page }) => page === 'price' ? '100px' : '0px'}};
	}
`

export const Icon = styled.div`
	height: 192px;
	width: 200px;
	background: ${({ page }) => `url(${icons[page]}) no-repeat 0 0`}};
	background-size: cover;
`

export const Text = styled.div`
	padding-left: 50px;
	font-size: 180px;
	color: #575555;
	text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
`