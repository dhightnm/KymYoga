import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import flower from '../cyclamen.png'
import flower2 from '../cyclamen2.png'


export const HomeCards = () => {
    return (
        <div className="cardGroup">
        <CardGroup >
            <Card>
               <div className="cyclamen"><Card.Img  variant="top" src={flower2} /></div> 
                <Card.Body className="cardBody">
                <Card.Title>Learn From Passionate Teachers</Card.Title>
                <Card.Text>
                    Kyma is like 100% the best ever.  We commit to guide you each step of the way.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
               <div className="cyclamen"><Card.Img  variant="top" src={flower2} /></div>
               <Card.Body className="cardBody">                <Card.Title>Develop A Consistent Practice</Card.Title>
                <Card.Text>
                Each class is an opportunity to grow in your practice. Learn yoga principles you can apply on and off the mat..{' '}
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
            <div className="cyclamen"><Card.Img  variant="top" src={flower2} /></div> 
            <Card.Body className="cardBody">                <Card.Title>No Flexibility Required</Card.Title>
                <Card.Text>
                We work with students of all ages and body types. We meet you wherever you are in your practice. 
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
            
        </div>
    )
}
