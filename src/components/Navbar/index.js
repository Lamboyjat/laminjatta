import React from 'react'
// import { NavLink } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        EL-BOY-BO
                    </NavLogo>

                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'>Sign up</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav> 
        </>
    )
}

export default Navbar