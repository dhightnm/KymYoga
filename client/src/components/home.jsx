import React from 'react'
import { HomeCards } from './homecards'
import { Carousel } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

import image4 from '../park 5.png'
import image3 from '../team.png'
import image2 from '../hanging.png'

import kymBack from '../kym.jpeg'

const Home = () => {

    const images = [image2, image3, image4];

    return (
    <>
        <div className="carousel-container">
          <div className="carousel-image">

            <Carousel id="carousel-main" fade>
              {images.map((image, idx) => (
                <Carousel.Item key={idx}interval={5000}>
                    <img
                      id="carousel-item"
                      className="d-block w-100"
                      src={image}
                      alt="First slide"
                    />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div>
            <HomeCards/>
          </div>
          <div className="intro-container">
            <div className="mat-image"> 
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
