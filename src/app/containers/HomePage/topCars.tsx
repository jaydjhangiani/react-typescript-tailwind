import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from '../../../typings/cars';
import { Car } from '../../components/cars';
import Carousel,{Dots, slidesToShowPlugin} from '@brainhubeu/react-carousel';
import "@brainhubeu/react-carousel/lib/style.css";
import { SCREENS } from '../../responsive';
import { useMediaQuery } from 'react-responsive';
import carServices from '../../services/carServices';
import { GetCars_cars } from '../../services/carServices/__generated__/GetCars';
import { setTopCars } from './slice';
import { Dispatch } from "redux";
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectTopCars } from './selectors';
import { createSelector } from 'reselect';
import MoonLoader from "react-spinners/MoonLoader";

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars:(cars: GetCars_cars[]) => dispatch(setTopCars(cars))
})

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
  topCars,
}));

const wait = (timeout: number) => new Promise((rs) => setTimeout(rs, timeout));

export default function TopCars() {
  const [current,setCurrent] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const isMobile = useMediaQuery({ maxWidth:  SCREENS.md})
  const {topCars} = useSelector(stateSelector)
  const {setTopCars} = actionDispatch(useDispatch())
  const fetchTopCars = async () => {
    setLoading(true);
    const cars = await carServices.getCars().catch(err => console.log(err))
    console.log(cars)
    if(cars){
      setTopCars(cars);
    }
    setLoading(false);
  }

    const isEmptyTopCars = !topCars || topCars.length === 0;

    const cars = !isEmptyTopCars && topCars.map((car) => <Car {...car} thumbnailSrc={car.thumbnailUrl}/>) || []


    useEffect(() => {
      fetchTopCars()
    },[])

    const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

    return (
        <TopCarsContainer>
            <Title>Explore Our Top Deals</Title>
            {isLoading && (
        <LoadingContainer>
          <MoonLoader loading size={20} />
        </LoadingContainer>
      )}
       {isEmptyTopCars && !isLoading && <EmptyCars>No Cars To Show!</EmptyCars>}
            {!isEmptyTopCars && !isLoading && (
            <CarsContainer>
           
            <Carousel value={current} onChange={setCurrent} 
            slides={cars}
          plugins={[
            "clickToChange",
            {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          }]}
          breakpoints={{
              640: {
                plugins:[{
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1
                  }
                }
              ]
              },
              900: {
                plugins:[{
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2
                  }
                }
                ]
              }
          }}
          >
            </Carousel>
            <Dots value={current} onChange={setCurrent} number={numberOfDots} />
            </CarsContainer>
            )}
        </TopCarsContainer>
    )
}

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;