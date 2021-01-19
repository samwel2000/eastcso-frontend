import React, {useState} from 'react';
// import Logo from '../../assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa';
import {Nav, NavLink, NavMenu, Bars,Header,TextLogo } from './NavBarElements';
import SideBar from '../SideBar';

function NavBar() {

    const [ isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    const handleHamburgerClick = () => {
        setIsOpen(!isOpen);
    };
    const humberger = isOpen ? <FaTimes size="30px" color="#fff"/> : <FaBars  size="30px"/>

    const sidebar = isOpen ? <SideBar toggle={toggle} /> : ""
    return (
        <>
            <Header>
                <div className="container">
                    <Nav>
                        <NavLink to='/'>
                            <TextLogo>eastcso</TextLogo>
                        </NavLink>
                        <Bars onClick={handleHamburgerClick}>{humberger}</Bars>
                        <NavMenu >
                            <NavLink to='/' menuitem="true">
                                Home
                            </NavLink>
                            <NavLink to='/About' menuitem="true">
                                About
                            </NavLink>
                            <NavLink to='/Blog' menuitem="true">
                                Blog
                            </NavLink>
                            <NavLink to='/Contact-us' menuitem="true">
                                Contact us
                            </NavLink>
                        </NavMenu>
                    </Nav>
                </div>
            </Header>
            {sidebar}
        </>
    )
}

export default NavBar
