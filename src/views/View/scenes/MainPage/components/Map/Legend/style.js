import styled from 'styled-components'

export const Legend = styled.div`
    opacity: 0.4;
    transition: opacity 300ms
`

export const LegendSvg = styled.svg`
    position: absolute;
    top: 1002px;
    left: 1031px;
    transition: opacity 0.8s ease-in;
    z-index: 10;
    pointer-events: none;
    
    path {
       cursor: pointer;
    }
`

export const Label = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
    color: ${({ theme }) => theme.color.enterIconEnabled};
    cursor: pointer;

`
export const LabelText = styled.p`
    font-weight: normal;
    font-size: 64px;
    line-height: 100%;
    margin: 0;
    align-items: center;
    text-align: right;
    margin: 0 15px;
    color: ${({ theme }) => theme.color.enterIconEnabled};
`