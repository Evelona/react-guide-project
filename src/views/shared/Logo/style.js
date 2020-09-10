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