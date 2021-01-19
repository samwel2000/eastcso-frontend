import styled from 'styled-components'
import {Link as UrlLink} from 'react-router-dom'


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 99999;
    width: 100%;
    height: 100%;
    background: #2979FF;
    display: grid;
    align-items: center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity:${props => props.isOpen};
    top:${props => props.is0pen};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarLink = styled(UrlLink)`
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
    margin: 15px;
    font-size: 25px;
    font-weight: 500;
    text-decoration:none;
    transition: 0.2s all ease-in-out;
    cursor: pointer;

    &:hover {
        color: #000;
        transition: 0.2s all ease-in-out;
    }
`

export const SidebarMenu = styled.ul`
    display: flex;
    flex-direction: column;
`

export const SidebarlLinks = styled.div`
    display: flex;
    align-items: center;
`

export const Link = styled(UrlLink)`
    text-decoration:none;
    display: flex;
    align-items: center;
    color: #000;
    background: #fff;
    padding: 10px;
    margin-right: 10px;
    border-radius: 55px;
`