import styled from 'styled-components'

const Button = styled.button `
    font-family: inherit;
    user-select: none;
    line-height: 1.5;
    background-color: var(--white-alpha-25);
    border: 1pz solid var(--white-alpha-40);
    padding: 10px 28px;
    display: inline-block;
    border-radius: 30px;
    color: var(--main-color);
    font-weight: 500;
    text-transform: capitalize;
    font-family: inherit;
    font-size: 16px;
    cursor: pointer;
    user-select: none;
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    transition: color 0.3s ease;

    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 0;
        background-color: var(--main-color);
        z-index: -1;
        transition: width 0.3s ease;
    }

    &:hover::before{
        width: 100%;
    }

    &:hover{
        color: var(--white);
    }
    
`

export default Button
