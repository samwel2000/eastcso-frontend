import React from 'react'
import {FaTimes,FaTwitter,FaFacebookF} from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr';
import {SidebarContainer,Icon,SidebarMenu,SidebarLink,Link} from './SideBarElements'

function SideBar({toggle}){
    
    return (
        <>
            <SidebarContainer>
                <Icon onClick={toggle}>
                    <FaTimes size="30px" color="#fff"/>
                </Icon>
                <SidebarMenu>
                    <SidebarLink to='/' onClick={toggle}>
                        Home
                    </SidebarLink >
                    <SidebarLink to='/About' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='/Blog' onClick={toggle}>
                        Blog
                    </SidebarLink>
                    <SidebarLink to='/Contact-us' onClick={toggle}>
                        Contact us
                    </SidebarLink>
                </SidebarMenu>
                <SidebarLink>
                    <Link to='/'><FaTwitter/></Link>
                    <Link to='/'><FaFacebookF/></Link>
                    <Link to='/'><GrInstagram/></Link>
                </SidebarLink>
            </SidebarContainer>
        </>
    )
}

export default SideBar
