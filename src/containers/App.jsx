import React, { useState, useEffect } from 'react'

// Components import 
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

import '../assets/styles/App.scss';


const App = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then(data => setVideos(data))
    }, [])
    console.log('=>JHS ', videos)

    return (
        <div className="App">
            <Header></Header>
            <Search />
                {!!videos.mylist && videos.mylist.length > 0 && 
                    <Categories>
                        <Carousel>
                             <CarouselItem></CarouselItem>
                        </Carousel>
                    </Categories>
                }
                <Categories title="Tendencias">
                    <Carousel>
                    { !!videos.trends && videos.trends.map (item => 
                        <CarouselItem key={item.id} {...item}/>
                    )}
                    </Carousel>
                    
                </Categories>

            <Footer />
        </div>
    )
}

export default App;