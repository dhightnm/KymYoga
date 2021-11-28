import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'

import image3 from '../assets/WhatsApp Image 2021-11-26 at 10.25.54 PM.jpeg'

const Home = () => {

    return (

        <div className="carousel-div">
            <Carousel id="carousel-main" fade>
                <Carousel.Item interval={5000}>
                    <img
                    id="carousel-item"
                    className="d-block w-100"
                    src="https://scontent.flas1-1.fna.fbcdn.net/v/t1.6435-9/90510645_10219465591287943_1990438306260713472_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=zRQ086YfNMMAX9YvGtJ&_nc_ht=scontent.flas1-1.fna&oh=800f063b91fe6987a6a15adcf0cb5cc4&oe=61C74CA7"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    id="carousel-item"
                    className="d-block w-100"
                    src="https://scontent.flas1-1.fna.fbcdn.net/v/t31.18172-8/18489551_884006568403898_3884585394511737975_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=19026a&_nc_ohc=iBk-xWCvLE8AX_XZdfg&_nc_ht=scontent.flas1-1.fna&oh=733a11114c02ccf6b48bf638ce3ce6ae&oe=61C8E396"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    id="carousel-item"
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home
