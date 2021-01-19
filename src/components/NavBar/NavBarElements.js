import styled , { css } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';


export const Nav = styled.nav`
    display: flex;
    padding: 5px;
    justify-content:space-between;
`

export const Header = styled.header`
    background:#fff;
    height: 50px;
`
export const LogoImg = styled.img`
    width: 50px;
    background:#fff;
`
export const TextLogo = styled.h1`
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 2px;
`

export const NavLink = styled(Link)`
    text-decoration:none;
    color:#2979FF;
    font-size: 18px;
    font-weight:500;

    ${props => props.menuitem && css`
        margin-left:40px;
  `}
`
export const NavMenu = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    @media screen and (max-width:768px){
        display:none;
    }
`
export const Bars = styled.div`
    display:none;

    @media screen and (max-width:768px){
        display:flex;
        color:#2979FF;
        font-weight:700;
    }
`