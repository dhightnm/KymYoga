import React, { useEffect, useState } from 'react'
import { HomeCards } from './homecards'
import { Carousel } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

import image4 from '../park 5.png'
import image3 from '../team.png'
import image2 from '../hanging.png'
import kymBack from '../kym.jpeg'

const Home = () => {

    return (
    <>
        <div className="carousel-container">
            <div className="carousel-image">

            <Carousel id="carousel-main" fade>
                <Carousel.Item interval={5000}>
                    <img
                    id="carousel-item"
                    className="d-block w-100"
                    src={image2}
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
        <div className="intro-container">
            <div className="mat-image"> 
                {/* <div > */}
                    <Card className="kym-intro">
                        <Card.Img className="kymage" variant="top" src={kymBack} />
                        <Card.Body>
                        <Card.Text>
                            <h1>Kym Ben-Yaakov</h1>
                            "You know, I was just like, be awesome and it happens. Kicking Iyengar ass and taking names is my game, yo!"
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
            </div>
        </div>
    </>
    )
}

export default Home
