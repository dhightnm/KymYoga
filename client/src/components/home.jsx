import React, { useEffect, useState } from 'react'
import { HomeCards } from './homecards'
import { Carousel } from 'react-bootstrap'

import image4 from '../b$w.png'

import image3 from '../assets/WhatsApp Image 2021-11-26 at 10.25.54 PM.jpeg'

const Home = () => {

    return (
    <>
        <div className="carousel-div">
            <Carousel id="carousel-main" fade>
                <Carousel.Item interval={5000}>
                    <img
                    id="carousel-item"
                    className="d-block w-100"
                    src="https://scontent.flas1-1.fna.fbcdn.net/v/t1.6435-9/90510645_10219465591287943_1990438306260713472_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=zRQ086YfNMMAX9YvGtJ&_nc_ht=scontent.flas1-1.fna&oh=800f063b91fe6987a6a15adcf0cb5cc4&oe=61C74CA7"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    id="carousel-item"
                    className="d-block w-100"
                    src={image4}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    id="carousel-item"
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            {/* <div className='sample'>This is a sample text</div> */}
        </div>
        
        <div>
            <HomeCards/>
        </div>
        <div className="mat-image"> 
        </div>
    </>
    )
}

export default Home
