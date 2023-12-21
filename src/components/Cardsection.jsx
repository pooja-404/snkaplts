import React from 'react'
import Cardshoe from './Cardshoe'
import { Button, Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

const Cardsection = () => {
    return (
        <div>
            <Container className=' py-5'>
                <Card.Header className='color-black fw-semibold fs-2xl ff-poppins  mt-3'>RELATED PRODUCT</Card.Header>
                <Cardshoe />
                <div class="d-flex justify-content-end align-items-center gap-3 pt-4 pb-lg-5 mb-3">
                    <a href="" class="numbtn fs-lg ff-poppins  lh-125 fw-semibold">1</a>
                    <a href="" class="numbtn fs-lg ff-poppins  lh-125 fw-semibold">2</a>
                    <a href="" class="numbtn fs-lg ff-poppins  h-125 fw-semibold">3</a>
                    <div className='gap-1 d-flex'>
                        <a href="" class="nxt-btn ff-poppins fs-s fw-normal color-grey ">Next &gt;&gt;
                        </a>
                    </div>
                </div>
            </Container>

        </div >
    )
}

export default Cardsection