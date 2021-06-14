import React from 'react'
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components'
import tw from 'twin.macro';
import BookCard from '../../components/bookCard';
import { Marginer } from '../../components/marginer';
import Navbar from '../../components/navbar';
import { SCREENS } from '../../responsive';
import AboutUs from './aboutUs';
import BookingSteps from './bookingSteps';
import TopCars from './topCars';
import { TopSection } from './topSection';
import Footer from '../../components/footer'


export default function HomePage() {
    const isMobile = useMediaQuery({ maxWidth:  SCREENS.md})
    return (
        <PageContainer>
            <Navbar/>
            <TopSection/>
            <Marginer direction="vertical" margin={isMobile ? "2em":"4em"} />
            <BookCard/>
            <Marginer direction="vertical" margin={isMobile ? "2em":"8em"} />
            <BookingSteps/>
            <Marginer direction="vertical" margin={isMobile ? "2em":"8em"} />
            <AboutUs/>
            <Marginer direction="vertical" margin={isMobile ? "2em":"8em"} />
            <TopCars/>
            <Footer/>
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
