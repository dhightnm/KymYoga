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
            {/* <div className="mat-image">  */}
            <div className="about-yoga">
              <p>These are great reasons to start yoga now. You do not need to be flexible, 
                athletic or spiritual to practice yoga. Yoga is here to help you gain strength, 
                flexibility, coordination and connection. 
                If you have a busy schedule then it is even more critical that you make time for your health. 
                If you are recovering from an injury or a personal crisis, 
                the science and art of yoga can help you heel. 
                If you love to participate in challenging and active sports, 
                then yoga will help you improve every facet of your athletic abilities as well as protect you from injury, 
                teach you correct breathing and how to use and conserve your energy in the most efficient way. 
                Yoga is introspective, opening a window of connection between your body, your mind and your beautiful soul. 
                In addition, it is always challenging, is never dull and is an endless pool of knowledge</p>
            </div>
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
