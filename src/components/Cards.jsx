import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import footlocker from '../assets/images/footlocker.png'
import slidesite from '../assets/images/slidesite.png'

const card1 = [
    {
        image: footlocker,
        heading: 'Price:',
        para: '€179,99',
        paragraph: 'Size:',
        paragraph2: 'View this product as:',
        paragraph3: 'Foot Locker NL',
    },
    {
        image: slidesite,
        heading: 'Price:',
        para: '€179,99',
        paragraph: 'Size:',
        paragraph2: 'View this product as:',
        paragraph3: 'Foot Locker NL',
    },
    {
        image: footlocker,
        heading: 'Price:',
        para: '€179,99',
        paragraph: 'Size:',
        paragraph2: 'View this product as:',
        paragraph3: 'Foot Locker NL',
    },
    {
        image: slidesite,
        heading: 'Price:',
        para: '€179,99',
        paragraph: 'Size:',
        paragraph2: 'View this product as:',
        paragraph3: 'Foot Locker NL',
    },
]

const Cards = () => {
    const list = card1.map((card1) => (
        <Col xl={3} lg={4} md={6}>
            <Card className='card1 mt-4 mt-xl-0'>
                <img src={card1.image} alt="img-1" />
                <div className='pe-3 ps-3 pt-4'>
                    <div className='d-flex align-items-center justify-content-between '>
                        <div className='d-flex align-items-center'>
                            <Card.Title className='ff-poppins fw-mormal op-8 fs-s color-black mb-0'>{card1.heading}</Card.Title>
                            <Card.Title className='ff-poppins fw-semibold fs-sm color-black ps-2 mb-0'>{card1.para}</Card.Title>
                        </div>
                        <button className='greenbtn color-white fs-xxs fw-normal ff-poppins'>Best Price</button>
                    </div>
                    <Card.Title className='ff-poppins fw-normal fs-s color-black op-8 pt-2'>{card1.paragraph}</Card.Title>
                    <div className='d-flex align-items-center gap-3'>
                        <button className='sizebtn ff-poppins color-black3 fs-s fw-medium'>41</button>
                        <button className='sizebtn ff-poppins color-black3 fs-s fw-medium'>42</button>
                        <button className='sizebtn ff-poppins color-black3 fs-s fw-medium'>43</button>
                    </div>
                    <div className='d-flex align-items-center gap-3 pt-2'>
                        <button className='sizebtn ff-poppins color-black3 fs-s fw-medium'>44</button>
                        <button className='sizebtn ff-poppins color-black3 fs-s fw-medium'>45</button>
                        <button className='sizebtn ff-poppins color-black3 fs-s fw-medium'>46</button>
                    </div>
                    <Card.Title className='ff-poppins fw-normal fs-s op-8 pt-3 color-greygreen mb-0'>{card1.paragraph2}</Card.Title>
                    <Card.Title className='ff-poppins fw-semibold fs-s pt-2 color-blue pb-3'>{card1.paragraph3}</Card.Title>
                </div>
            </Card>
        </Col>
    ))
    return (
        <div>
            <Row className='pt-4 justify-content-center'>
                {list}
            </Row >
        </div>
    )
}

export default Cards

