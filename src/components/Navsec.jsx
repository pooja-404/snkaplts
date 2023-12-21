import React from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import logo from '../assets/images/logo.png'
import logocard from '../assets/images/logocard.png'
import Nav from 'react-bootstrap/Nav';


const Navsec = () => {
  const [data, setData] = useState(false)
  function nav() {
    setData(!data)
    if (data === false) {
      document.body.classList.add("overflow-hidden");
    }
    else {
      document.body.classList.remove("overflow-hidden");
    }
  }
  return (
    <nav className='nav-shadow'>
      <Container className='py-3'>
        <div className='d-flex align-items-center justify-content-between'>
          <img src={logo} alt="logo" className='d-none d-lg-block cursor-pointer' />
          <img src={logocard} alt="navimg" className='d-none d-lg-block' />
        </div>
      </Container>
      <div className='shadow1'>
        <Container className='py-3'>
          <div className='d-flex align-items-center justify-content-between'>
            <img src={logo} alt="logo" className='d-block d-lg-none cursor-pointer' />
            <label className='menu' onClick={nav}>
              <span></span>
              <span></span>
              <span></span>
            </label>
            <Nav className={`d-flex align-items-center justify-content-center gap-3 justify-content-lg-end mobile ${data ? "end-0" : "right-100"}`}>
              <Nav.Item>
                <Nav.Link href="/home" className='ff-roboto fs-sm fw-normal color-black nav-stock'>HOME</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/home" className='ff-roboto fs-sm fw-normal color-black nav-stock'>SNEAKERS KOPEN
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/home" className='ff-roboto fs-sm fw-normal color-black nav-stock'>INTERVIEWS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/home" className='ff-roboto fs-sm fw-normal color-black nav-stock'>SALE
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/home" className='ff-roboto fs-sm fw-normal color-black nav-stock'>SNEAKER VAN DE DAG
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/home" className='ff-roboto fs-sm fw-normal color-black nav-stock'>SNEAKER FORUM
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/home" className='ff-roboto fs-sm fw-normal color-black nav-stock'>BLOG
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Container>
      </div>
    </nav>

  )
}

export default Navsec