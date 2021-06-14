import React from 'react'
import styled, {css} from 'styled-components';
import tw from 'twin.macro';
import {slide as Menu} from 'react-burger-menu';
import {useMediaQuery} from 'react-responsive'
import { SCREENS } from '../../responsive';
import menuStyles from './menuStyles';


export default function NavItems() {

    const isMobile = useMediaQuery({ maxWidth:  SCREENS.sm})

    if(isMobile) {
        return( 
                <Menu right styles={menuStyles}>
                  <ListContainer>
                    <NavItem menu>
                    <span>Home</span>
                    </NavItem>
                    <NavItem menu>
                    <span>Cars</span>
                    </NavItem>
                    <NavItem menu>
                    <span>Services</span>
                    </NavItem>
                    <NavItem menu>
                    <span>Contact Us</span>
                    </NavItem>
                  </ListContainer>
                </Menu>
        )
    }

    return (
        <ListContainer>
            <NavItem>
                <span>Home</span>
            </NavItem>
            <NavItem>
                <span>Cars</span>
            </NavItem>
            <NavItem>
                <span>Services</span>
            </NavItem>
            <NavItem>
                <span>Contact Us</span>
            </NavItem>
        </ListContainer>
    )
}

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `};
`;

const NavItem = styled.li<{menu?:any}>`
${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-2
    md:mr-6
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `};
  ${({ menu }) =>
    menu && css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `};
    `};
`;