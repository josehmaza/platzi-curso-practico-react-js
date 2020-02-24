import React, { useState, useEffect } from 'react'

// Components import 
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState'

const API = 'http://localhost:3000/initalState'
const Home = () => {

    const initialState = useInitialState(API);


    return (
        <>
            <Search />
            {!!initialState.mylist && initialState.mylist.length > 0 &&
                <Categories>
                    <Carousel>
                        {!!initialState.mylist && initialState.mylist.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>
            }
            <Categories title="Tendencias">
                <Carousel>
                    {!!initialState.trends && initialState.trends.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>

            </Categories>

            <Categories title="Originales de PLatzi video">
                <Carousel>
                    {!!initialState.originals && initialState.originals.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>

            </Categories>
        </>
    )
}

export default Home;