/* eslint-disable no-magic-numbers */
import styled, { keyframes } from 'styled-components'

import { DURATION } from 'config'
import v0 from './statics/v0.webp'
import v1 from './statics/v1.webp'
import v2 from './statics/v2.webp'
import v3 from './statics/v3.webp'
import v4 from './statics/v4.webp'

const masks = [
	v0, v1, v2, v3, v4
]

const crossingVertical = keyframes`
    from { background-position: 0 25%; }
    to { background-position: 0 0px; }
`

const crossingHorizontal = keyframes`
    from { background-position: 300px 0; }
    to { background-position: 0 0; }
`

export const Corner = styled.div`
    width: 2500px;
    height: 1745px;
    background: ${({ path }) => `url(./statics/exhibits/${path}) no-repeat`};
    background-position: 0 0;
    background-size: cover;
    opacity: ${({ isMain }) => isMain ? 1 : 0.4};
    position: absolute;
    bottom: 0;
    right: 0;
    animation:
        ${({ direction }) => direction === 'vertical' ? crossingVertical : crossingHorizontal}
        ${DURATION.EXTRASLOW}ms
        linear;
    transition: opacity ${DURATION.NORMAL}ms ease-in;
`

export const Wrapper = styled.div`
    mask-image: url(${({ mask }) => masks[mask]});
    position: absolute;
    top: 0;
    width: 3840px;
    height: 2160px;
    overflow: hidden;

    &.enter {
		opacity: 0;
	}
	&.enter-active {
		opacity: 1;
        transition: opacity ${DURATION.SLOWER}ms;
    }
	&.exit {
		opacity: 1;
	}
	&.exit-active {
		opacity: 0;
        transition: opacity ${DURATION.SLOWER}ms;
	}
`

export const ExhibitTitle = styled.p`
    margin: 0;
    position: absolute;
    white-space: pre-line;
    // top: 1400px;
    bottom: 70px;
    right: 200px;
    text-align: right;

    // центрирование по середине маски
    max-width: 45vw;
    width: 100%;
    text-align: right;

    color: #fff;
    font-size: 124px;
    line-height: 90%;
`