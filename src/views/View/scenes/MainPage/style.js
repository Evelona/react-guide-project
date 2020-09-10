import styled from 'styled-components'

export const FloorTitle = styled.h2`
    position: absolute;
    min-width: 542px;
    height: 144px;
    right: 470px;
    text-align: right;
    top: 0;
    color: ${({ theme }) => theme.color.title};
    text-shadow: ${({ theme }) => theme.effect.exhibitElement}
    font-size: 144px;
    font-weight: 400;
`
