import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../logo';
import NavItems from '../navbar/navItems'

export default function Navbar() {
    return (
        <NavbarContainer>
            <LogoContainer>
                <Logo/>
            </LogoContainer>
            <NavItems/>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
    min-height: 68px;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        flex-row
        items-center
        md: pl-10
        md: pr-10
        lg:pl-24
        lg:pr-24
        justify-between
    `}
`;

const LogoContainer = styled.div``;