import React, { useEffect, useState } from 'react'
import { HomeCards } from './homecards'
import { Carousel } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

import image4 from '../b$w.png'
import image3 from '../assets/WhatsApp Image 2021-11-26 at 10.25.54 PM.jpeg'
import kymBack from '../kym.jpeg'

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
                {/* </div> */}
            </div>
        </div>
    </>
    )
}

export default Home
