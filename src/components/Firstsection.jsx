import React from 'react'
import bigshoe from '../assets/images/bigshoe.png'
import small1 from '../assets/images/small1.png'
import small2 from '../assets/images/small2.png'
import small3 from '../assets/images/small3.png'
import small4 from '../assets/images/small4.png'
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'

function Firstsection() {
    const [count, setcount] = useState(0);
    return (
        <div>
            <Container className='pt-lg-4 mt-5'>
                <Row className='pb-5 pt-lg-5'>
                    <Col xl={6}>
                        <img src={bigshoe} alt="shoes" className='w-100' />
                        <Row className='pt-4 justify-content-center'>
                            <Col lg={3} md={4} className='col-6 text-center'>
                                <img src={small1} alt="bigshoe" className='pt-3' />
                            </Col>
                            <Col lg={3} md={4} className='col-6 text-center'>
                                <img src={small2} alt="shoes" className='pt-3' />
                            </Col>
                            <Col lg={3} md={4} className='col-6 text-center'>
                                <img src={small3} alt="shoes" className='pt-3' />
                            </Col>
                            <Col lg={3} md={4} className='col-6 text-center'>
                                <img src={small4} alt="shoes" className='pt-3' />
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={6} className='mt-4 pt-4 pt-xl-0 ps-xl-5 '>
                        <h2 className='color-black ff-poppins fw-semibold fs-2xl' >PREMIUM MENS SPORTS LATHER KEDS</h2>
                        <div className='d-flex pt-2 gap-1 align-items-center'>
                            <svg width="103" height="18" viewBox="0 0 103 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z"
                                    fill="#FBB03B" />
                                <path
                                    d="M39.3859 6.33831L33.6901 5.51709L31.1439 0.396152C31.0743 0.255944 30.9599 0.142442 30.8186 0.0734507C30.4642 -0.100141 30.0334 0.0445188 29.8562 0.396152L27.31 5.51709L21.6142 6.33831C21.4572 6.36057 21.3136 6.43401 21.2037 6.54529C21.0708 6.68079 20.9975 6.86309 21.0001 7.05213C21.0026 7.24117 21.0807 7.42149 21.2171 7.55345L25.3381 11.5394L24.3645 17.1677C24.3417 17.2987 24.3563 17.4333 24.4067 17.5564C24.4571 17.6795 24.5412 17.7862 24.6496 17.8643C24.7579 17.9424 24.8862 17.9887 25.0198 17.9982C25.1534 18.0077 25.287 17.9798 25.4054 17.9177L30.5 15.2605L35.5947 17.9177C35.7337 17.9912 35.8953 18.0157 36.0501 17.989C36.4404 17.9222 36.7029 17.555 36.6356 17.1677L35.662 11.5394L39.783 7.55345C39.8951 7.4444 39.9692 7.30197 39.9916 7.14618C40.0522 6.75671 39.7785 6.39618 39.3859 6.33831Z"
                                    fill="#FBB03B" />
                                <path
                                    d="M60.3859 6.33831L54.6901 5.51709L52.1439 0.396152C52.0743 0.255944 51.9599 0.142442 51.8186 0.0734507C51.4642 -0.100141 51.0334 0.0445188 50.8562 0.396152L48.31 5.51709L42.6142 6.33831C42.4572 6.36057 42.3136 6.43401 42.2037 6.54529C42.0708 6.68079 41.9975 6.86309 42.0001 7.05213C42.0026 7.24117 42.0807 7.42149 42.2171 7.55345L46.3381 11.5394L45.3645 17.1677C45.3417 17.2987 45.3563 17.4333 45.4067 17.5564C45.4571 17.6795 45.5412 17.7862 45.6496 17.8643C45.7579 17.9424 45.8862 17.9887 46.0198 17.9982C46.1534 18.0077 46.287 17.9798 46.4054 17.9177L51.5 15.2605L56.5947 17.9177C56.7337 17.9912 56.8953 18.0157 57.0501 17.989C57.4404 17.9222 57.7029 17.555 57.6356 17.1677L56.662 11.5394L60.783 7.55345C60.8951 7.4444 60.9692 7.30197 60.9916 7.14618C61.0522 6.75671 60.7785 6.39618 60.3859 6.33831Z"
                                    fill="#FBB03B" />
                                <path
                                    d="M81.3859 6.33831L75.6901 5.51709L73.1439 0.396152C73.0743 0.255944 72.9599 0.142442 72.8186 0.0734507C72.4642 -0.100141 72.0334 0.0445188 71.8562 0.396152L69.31 5.51709L63.6142 6.33831C63.4572 6.36057 63.3136 6.43401 63.2037 6.54529C63.0708 6.68079 62.9975 6.86309 63.0001 7.05213C63.0026 7.24117 63.0807 7.42149 63.2171 7.55345L67.3381 11.5394L66.3645 17.1677C66.3417 17.2987 66.3563 17.4333 66.4067 17.5564C66.4571 17.6795 66.5412 17.7862 66.6496 17.8643C66.7579 17.9424 66.8862 17.9887 67.0198 17.9982C67.1534 18.0077 67.287 17.9798 67.4054 17.9177L72.5 15.2605L77.5947 17.9177C77.7337 17.9912 77.8953 18.0157 78.0501 17.989C78.4404 17.9222 78.7029 17.555 78.6356 17.1677L77.662 11.5394L81.783 7.55345C81.8951 7.4444 81.9692 7.30197 81.9916 7.14618C82.0522 6.75671 81.7785 6.39618 81.3859 6.33831Z"
                                    fill="#FBB03B" />
                                <path
                                    d="M102.386 6.33831L96.6901 5.51709L94.1439 0.396152C94.0743 0.255944 93.9599 0.142442 93.8186 0.0734507C93.4642 -0.100141 93.0334 0.0445188 92.8562 0.396152L90.31 5.51709L84.6142 6.33831C84.4572 6.36057 84.3136 6.43401 84.2037 6.54529C84.0708 6.68079 83.9975 6.86309 84.0001 7.05213C84.0026 7.24117 84.0807 7.42149 84.2171 7.55345L88.3381 11.5394L87.3645 17.1677C87.3417 17.2987 87.3563 17.4333 87.4067 17.5564C87.4571 17.6795 87.5412 17.7862 87.6496 17.8643C87.7579 17.9424 87.8862 17.9887 88.0198 17.9982C88.1534 18.0077 88.287 17.9798 88.4054 17.9177L93.5 15.2605L98.5947 17.9177C98.7337 17.9912 98.8953 18.0157 99.0501 17.989C99.4404 17.9222 99.7029 17.555 99.6356 17.1677L98.662 11.5394L102.783 7.55345C102.895 7.4444 102.969 7.30197 102.992 7.14618C103.052 6.75671 102.778 6.39618 102.386 6.33831Z"
                                    fill="#FBB03B" />
                            </svg>
                            <p className='mb-0 fw-normal lh-134 light-black fs-md ff-poppins'>( 5 Customer Review )</p>
                        </div>
                        <p className='fs-md ff-poppins lh-185 color-black op-6 fw-normal pt-4 pb-5 max-w-610'>Sed nec ultricies felis,
                            vitae
                            facilisis
                            ipsum. Morbi id turpis euismod, rhoncus tortor quis,
                            lobortis sapien. Sed
                            imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis finibus
                            neque. In vel dolor ac
                            augue pretium</p>
                        <div className='d-flex align-items-center gap-3'>
                            <p className='color-black ff-poppins lh-125 fw-medium fs-md mb-0'>Qty:</p>
                            <div className='small-btn d-flex align-items-center justify-content-center gap-3'>
                                <button className='color-grey ff-josefin fs-md lh-125 fw-normal border-none bg-transparent'
                                    onClick={() => setcount(count - 1)}>-</button>
                                <p class="fs-md ff-josefin color-grey fw-normal lh-125 mb-0" >{count}</p>
                                <button class="color-grey ff-josefin fs-md lh-125 fw-normal border-none bg-transparent"
                                    onClick={() => setcount(count + 1)}>+</button>
                            </div>
                            <a href="" class="text-white cart-btn ff-poppins lh-125 fw-medium fs-md text-nowrap">Add to Cart</a>
                        </div>
                        <div class="d-flex align-items-center gap-3 pt-4">
                            <p class="color-black ff-poppins lh-125 fw-medium fs-md mb-0 ">Size:</p>
                            <div class="small-btn d-flex align-items-center justify-content-center">
                                <div class="color-grey ff-josefin fs-20 lh-125 fw-normal bg-transparent border-none">
                                    <label for="cars" hidden>S</label>
                                    <select name="cars" id="cars" class="border-none outline-none pe-4  gap-2 cursor-pointer">
                                        <option value="s">S</option>
                                        <option value="L">L</option>
                                        <option value="M">M</option>
                                        <option value="XL">XL</option>
                                        <option value=" XXL">XXL</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center  gap-2 pt-4">
                            <p class="color-black ff-poppins lh-125 fw-medium fs-md mb-0 pt-2 pe-3">Color:</p>
                            <div class="color-border mt-2">
                                <div class="red-box"></div>
                            </div>
                            <div class="color-border mt-2">
                                <div class="mustard-box"></div>
                            </div>
                            <div class="color-border mt-2">
                                <div class="black-box"></div>
                            </div>
                            <div class="color-border mt-2">
                                <div class="gry-box"></div>
                            </div>
                        </div>
                        <div class="d-flex gap-5 pt-4 align-items-center">
                            <div class="d-flex">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.6"
                                        d="M6.00977 2C4.07977 2 2.50977 3.57 2.50977 5.5C2.50977 7.08 3.56977 8.403 5.00977 8.837V15.997C5.00877 16.176 5.03677 17.778 6.18377 18.928C6.89177 19.64 7.83977 20 8.99977 20V22L12.9998 19L8.99977 16V18C7.17677 18 7.01577 16.466 7.00977 16V8.837C8.44977 8.403 9.50977 7.08 9.50977 5.5C9.50977 3.57 7.93877 2 6.00977 2ZM6.00977 7C5.18277 7 4.50977 6.327 4.50977 5.5C4.50977 4.673 5.18277 4 6.00977 4C6.83677 4 7.50977 4.673 7.50977 5.5C7.50977 6.327 6.83677 7 6.00977 7ZM19.0098 15.163V7.997C19.0048 6.391 17.9328 4 14.9998 4V2L10.9998 5L14.9998 8V6C16.8288 6 17.0008 7.539 17.0098 8V15.163C15.5698 15.597 14.5098 16.92 14.5098 18.5C14.5098 20.43 16.0798 22 18.0098 22C19.9398 22 21.5098 20.43 21.5098 18.5C21.5098 16.92 20.4498 15.597 19.0098 15.163ZM18.0098 20C17.1828 20 16.5098 19.327 16.5098 18.5C16.5098 17.673 17.1828 17 18.0098 17C18.8368 17 19.5098 17.673 19.5098 18.5C19.5098 19.327 18.8368 20 18.0098 20Z"
                                        fill="black" />
                                </svg>
                                <div className='d-flex align-items-center'>
                                    <p class="fs-s lh-125 fw-light mb-0 light-black ff-poppins">Compare</p>
                                </div>
                            </div>
                            <div class="d-flex cursor-pointer like">
                                <svg width="29" height="29" viewBox="0 0 29 29" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" >
                                    <path opacity="0.6"
                                        d="M14.5006 23.0258L14.1526 22.7358C6.67062 16.6458 4.64062 14.4998 4.64062 11.0198C4.64062 8.1198 6.96062 5.7998 9.86062 5.7998C12.2386 5.7998 13.5726 7.1338 14.5006 8.1778C15.4286 7.1338 16.7626 5.7998 19.1406 5.7998C22.0406 5.7998 24.3606 8.1198 24.3606 11.0198C24.3606 14.4998 22.3306 16.6458 14.8486 22.7358L14.5006 23.0258ZM9.86062 6.9598C7.59862 6.9598 5.80062 8.7578 5.80062 11.0198C5.80062 13.9778 7.65662 15.9498 14.5006 21.5178C21.3446 15.9498 23.2006 13.9778 23.2006 11.0198C23.2006 8.7578 21.4026 6.9598 19.1406 6.9598C17.1106 6.9598 16.0086 8.1778 15.1386 9.1638L14.5006 9.9178L13.8626 9.1638C12.9926 8.1778 11.8906 6.9598 9.86062 6.9598Z"
                                        fill="black" />
                                </svg>
                                <div className='d-flex align-items-center'>
                                    <p class="fs-s lh-125 fw-light light-black ff-poppins mb-0">Wishlist</p>
                                </div>
                            </div>
                        </div>
                        <div class="line my-4"></div>
                        <div class="d-flex gap-4 ">
                            <a href="" className=' pe-3'>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.4">
                                        <path
                                            d="M5.04231 13.7499C5.84408 13.7475 6.61551 13.4431 7.20289 12.8974L12.9412 16.1763C12.749 16.9276 12.8337 17.723 13.18 18.417C13.5262 19.1109 14.1109 19.6569 14.8268 19.955C15.5427 20.2531 16.342 20.2834 17.0785 20.0404C17.8149 19.7973 18.4392 19.2971 18.837 18.6314C19.2348 17.9657 19.3795 17.179 19.2447 16.4153C19.1098 15.6516 18.7045 14.962 18.1027 14.4727C17.501 13.9835 16.7432 13.7273 15.9681 13.7511C15.1929 13.7749 14.4523 14.0771 13.8817 14.6024L8.14339 11.3235C8.20389 11.0943 8.23689 10.8569 8.24239 10.6195L13.8799 7.39741C14.4227 7.89128 15.1189 8.18345 15.8516 8.2249C16.5843 8.26634 17.309 8.05454 17.904 7.62503C18.4991 7.19552 18.9283 6.57442 19.1198 5.86595C19.3112 5.15748 19.2531 4.40472 18.9553 3.73398C18.6575 3.06323 18.1381 2.51531 17.4842 2.18212C16.8304 1.84893 16.0818 1.75076 15.3641 1.90406C14.6464 2.05737 14.0033 2.45283 13.5426 3.0241C13.0819 3.59537 12.8317 4.3077 12.834 5.04157C12.8376 5.30557 12.8734 5.56866 12.9412 5.82349L7.73089 8.79991C7.42874 8.33246 7.01018 7.95167 6.51633 7.69493C6.02248 7.4382 5.47033 7.31436 4.91414 7.33558C4.35795 7.3568 3.81684 7.52235 3.34399 7.81597C2.87114 8.10959 2.48281 8.52117 2.21715 9.01028C1.95149 9.49938 1.81765 10.0492 1.82877 10.6057C1.83989 11.1622 1.99559 11.7062 2.28057 12.1843C2.56556 12.6624 2.97002 13.0581 3.45422 13.3326C3.93843 13.6071 4.48571 13.7509 5.04231 13.7499Z"
                                            fill="black" />
                                    </g>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/login/" target="_blank" className='icon'>
                                <svg width="23" height="24" viewBox="0 0 23 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_776_648)">
                                        <path
                                            d="M21.4958 23.7477C22.1892 23.7477 22.7515 23.1855 22.7515 22.492V2.25178C22.7515 1.55822 22.1892 0.996094 21.4958 0.996094H1.25569C0.562034 0.996094 0 1.55822 0 2.25178V22.492C0 23.1855 0.562034 23.7477 1.25569 23.7477H21.4958Z"
                                            fill="#395185" />
                                        <path
                                            d="M15.6983 23.7479V14.9373H18.6557L19.0985 11.5037H15.6983V9.3114C15.6983 8.31726 15.9744 7.63978 17.4 7.63978L19.2183 7.63898V4.56797C18.9036 4.52611 17.8244 4.43262 16.5688 4.43262C13.9472 4.43262 12.1525 6.03278 12.1525 8.97146V11.5037H9.1875V14.9373H12.1525V23.7479H15.6983Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_776_648">
                                            <rect width="22.7515" height="22.7515" fill="white"
                                                transform="translate(0 0.996094)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a href="https://twitter.com/i/flow/login" target="_blank" className='icon'>
                                <svg width="24" height="19" viewBox="0 0 24 19" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_776_651)">
                                        <path
                                            d="M23.5035 2.6541C22.6663 3.02532 21.7667 3.27621 20.8225 3.38908C21.7864 2.8114 22.5264 1.89663 22.8749 0.806694C21.9586 1.35041 20.9562 1.73349 19.9109 1.93938C19.0594 1.03225 17.8463 0.465332 16.5037 0.465332C13.9259 0.465332 11.8359 2.55527 11.8359 5.13295C11.8359 5.49884 11.8772 5.85504 11.9567 6.19676C8.07741 6.00204 4.63802 4.14379 2.33576 1.31976C1.93405 2.00915 1.70387 2.81105 1.70387 3.66636C1.70387 5.28581 2.52799 6.71445 3.78039 7.55154C3.03915 7.52833 2.31421 7.32812 1.6661 6.96764C1.66584 6.9872 1.66584 7.00675 1.66584 7.02639C1.66584 9.28794 3.27479 11.1745 5.41006 11.6034C4.7227 11.7903 4.00171 11.8176 3.30217 11.6833C3.89611 13.5378 5.61998 14.8872 7.66246 14.925C6.06497 16.1769 4.05226 16.9231 1.86544 16.9231C1.48862 16.9231 1.11713 16.901 0.751953 16.8579C2.81763 18.1823 5.27115 18.955 7.90713 18.955C16.4929 18.955 21.1878 11.8424 21.1878 5.67427C21.1878 5.47182 21.1833 5.27052 21.1743 5.07038C22.0881 4.40977 22.8768 3.59155 23.5035 2.6541Z"
                                            fill="#55ACEE" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_776_651">
                                            <rect width="22.7515" height="18.5745" fill="white"
                                                transform="translate(0.751953 0.392578)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a href="https://in.pinterest.com/" target="_blank" className='icon'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_776_653)">
                                        <path
                                            d="M0.503906 12.372C0.503906 17.0302 3.30501 21.032 7.31328 22.7914C7.28128 21.9971 7.30759 21.0435 7.51128 20.1792C7.73 19.2557 8.97503 13.9805 8.97503 13.9805C8.97503 13.9805 8.61162 13.2541 8.61162 12.1806C8.61162 10.4948 9.58869 9.2357 10.8055 9.2357C11.8403 9.2357 12.3402 10.0129 12.3402 10.9436C12.3402 11.9837 11.6768 13.5396 11.3356 14.9807C11.0506 16.1874 11.9406 17.1717 13.1311 17.1717C15.2864 17.1717 16.7381 14.4034 16.7381 11.1235C16.7381 8.63021 15.0588 6.76405 12.0045 6.76405C8.55377 6.76405 6.40402 9.33746 6.40402 12.212C6.40402 13.2031 6.69623 13.902 7.15393 14.4432C7.36438 14.6918 7.39362 14.7918 7.31745 15.0772C7.26288 15.2865 7.13757 15.7904 7.08567 15.9901C7.00995 16.2783 6.77648 16.3813 6.51608 16.2749C4.92668 15.626 4.18645 13.8854 4.18645 11.9288C4.18645 8.6973 6.91184 4.82244 12.3167 4.82244C16.66 4.82244 19.5186 7.96535 19.5186 11.3391C19.5186 15.8016 17.0376 19.1355 13.3805 19.1355C12.1523 19.1355 10.9971 18.4717 10.6013 17.7176C10.6013 17.7176 9.9409 20.3386 9.80101 20.8447C9.55981 21.7218 9.08772 22.5985 8.65606 23.2817C9.70277 23.5912 10.7886 23.7483 11.8801 23.7482C18.162 23.7482 23.2555 18.655 23.2555 12.372C23.2555 6.08932 18.162 0.996094 11.8801 0.996094C5.59758 0.996094 0.503906 6.08932 0.503906 12.372Z"
                                            fill="#CB1F27" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_776_653">
                                            <rect width="22.7515" height="22.7515" fill="white"
                                                transform="translate(0.503906 0.996094)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a href="https://www.google.com/" target="_blank" className='icon'>
                                <svg width="30" height="29" viewBox="0 0 30 29" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M26.3856 12.034H25.4202V11.9843H14.6345V16.7779H21.4073C20.4193 19.5684 17.7642 21.5716 14.6345 21.5716C10.6636 21.5716 7.44404 18.352 7.44404 14.3811C7.44404 10.4102 10.6636 7.19062 14.6345 7.19062C16.4675 7.19062 18.1351 7.88211 19.4048 9.01161L22.7945 5.6219C20.6541 3.62714 17.7911 2.39697 14.6345 2.39697C8.01628 2.39697 2.65039 7.76287 2.65039 14.3811C2.65039 20.9993 8.01628 26.3652 14.6345 26.3652C21.2528 26.3652 26.6186 20.9993 26.6186 14.3811C26.6186 13.5776 26.536 12.7932 26.3856 12.034Z"
                                        fill="#FFC107" />
                                    <path
                                        d="M4.0332 8.80309L7.97059 11.6907C9.03598 9.05296 11.6162 7.19062 14.6356 7.19062C16.4685 7.19062 18.1361 7.88211 19.4058 9.01161L22.7956 5.6219C20.6552 3.62714 17.7922 2.39697 14.6356 2.39697C10.0325 2.39697 6.04054 4.99573 4.0332 8.80309Z"
                                        fill="#FF3D00" />
                                    <path
                                        d="M14.6357 26.365C17.7312 26.365 20.5438 25.1804 22.6704 23.2539L18.9613 20.1153C17.7177 21.0611 16.1981 21.5726 14.6357 21.5714C11.5186 21.5714 8.8719 19.5838 7.87482 16.8101L3.9668 19.8211C5.95017 23.7021 9.97803 26.365 14.6357 26.365Z"
                                        fill="#4CAF50" />
                                    <path
                                        d="M26.3858 12.0341H25.4205V11.9844H14.6348V16.778H21.4076C20.9349 18.1061 20.0836 19.2666 18.9586 20.1162L18.9604 20.115L22.6695 23.2536C22.4071 23.4921 26.6189 20.3733 26.6189 14.3812C26.6189 13.5777 26.5362 12.7933 26.3858 12.0341Z"
                                        fill="#1976D2" />
                                </svg>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Firstsection