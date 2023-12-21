import React from 'react'
import Cards from './Cards'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

const Section2 = () => {
    return (
        <div>
            <Container className='pt-4'>
                <Card.Header className='color-black fw-medium fs-xl ff-poppins'>You can buy the Nike Air Max 97 Men's Shoe - White here:</Card.Header>
                <Cards />
            </Container>
        </div >
    )
}

export default Section2