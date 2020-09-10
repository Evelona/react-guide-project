import bg from '../../../statics/background.webp'
import styled from 'styled-components'

export const StyledBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${bg}) no-repeat 0 0;
    background-size: cover;
`