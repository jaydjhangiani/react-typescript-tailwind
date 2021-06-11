import React from 'react'
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components'
import tw from 'twin.macro';
import BookCard from '../../components/bookCard';
import { Marginer } from '../../components/marginer';
import Navbar from '../../components/navbar';
import { SCREENS } from '../../responsive';
import { TopSection } from './topSection';


export default function HomePage() {
    const isMobile = useMediaQuery({ maxWidth:  SCREENS.md})
    return (
        <PageContainer>
            <Navbar/>
            <TopSection/>
            <Marginer direction="vertical" margin={isMobile ? "2em":"4em"} />
            <BookCard/>
        </PageContainer>
    )
}


const PageContainer = styled.div`
 ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;
