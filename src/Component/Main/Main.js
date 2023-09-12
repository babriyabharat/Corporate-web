import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../Image/Logo.png';
import Button from '../../Image/Button.png';
import './style.css'
import { ArrowUpRight, Facebook, Instagram, Twitter } from 'react-bootstrap-icons';
import Dot from '../../Image/Dot.png';
import Banner3 from '../../Image/Banner3.png';
import Banner2 from '../../Image/Banner2.png';
import Banner1 from '../../Image/Banner1.png';
import Arrow from '../../Image/Arrow.png';
import Icon1 from '../../Image/Icon1.png';
import Icon2 from '../../Image/Icon2.png';
import Icon3 from '../../Image/Icon3.png';
import About1 from '../../Image/About1.png';
import About2 from '../../Image/About2.png';
import Work from '../../Image/Work.png';
import Gallery1 from '../../Image/Gallery1.png';
import Gallery2 from '../../Image/Gallery2.png';
import Count1 from '../../Image/Count1.png';
import Count2 from '../../Image/Count2.png';
import Count3 from '../../Image/Count3.png';
import Improve from '../../Image/Improve.png';
import Check from '../../Image/Check.png';
import ReactPlayer from 'react-player';
import Team1 from '../../Image/Team1.png';
import Team2 from '../../Image/Team2.png';
import Team3 from '../../Image/Team3.png';
import Team4 from '../../Image/Team4.png';
import Testimonials from '../../Image/Testimonials.png';
import Client1 from '../../Image/Client1.png';
import Client2 from '../../Image/Client2.png';
import Client3 from '../../Image/Client3.png';
import Client4 from '../../Image/Client4.png';
import Client5 from '../../Image/Client5.png';
import Blog1 from '../../Image/Blog1.png';
import Blog2 from '../../Image/Blog2.png';
import Blog3 from '../../Image/Blog3.png';
import Footerlogo from '../../Image/Footerlogo.png';



function Main() {
    return (
        <>
            <section className='header '>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <div className='container header-menu d-flex'>
                        <Navbar.Brand href="#home"><img src={Logo} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className='text-end'>
                            <Nav className="menu me-auto">
                                <Nav.Link href="#home" className='fs-6 a'>Home</Nav.Link>
                                <Nav.Link href="#About" className='fs-6 a'>About Us</Nav.Link>
                                <Nav.Link href="#Service" className='fs-6 a'>Service</Nav.Link>
                                <Nav.Link href="#Project" className='fs-6 a'>Project</Nav.Link>
                                <Nav.Link href="#Contact" className='fs-6 a'>Contact Us</Nav.Link>
                            </Nav>
                            <div className='header-btn'>
                                <img src={Button} />
                            </div>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </section>
            <section className='banner'>
                <div className='container d-flex'>
                    <div className='banner-contant col-6'>
                        <h4><span>I </span>Ninad Creative Agency</h4>
                        <h1>Creative <span>Mind</span> With<br />
                            Creative People</h1>
                        <p>It is a long established fact that a reader will be distracted by the<br /> readable content of a page when at its layout.</p>
                        <div className='btn'>Read More <ArrowUpRight /></div>
                        <img className='img2' src={Arrow} />

                    </div>
                    <div className='banner-image col-6 text-end'>
                        <img className='img1' src={Banner1} alt='banner1' />
                        <img className='img2' src={Banner2} alt='banner2' />
                        <img className='img4' src={Dot} />
                        <img className='img3' src={Banner3} alt='banner3' />
                    </div>
                </div>
            </section>
            <section className='service'>
                <div className='container'>
                    <div className='service-title text-center'>
                        <h1>Explore Service</h1>
                        <p>The sky was cloudless and of a deep dark blue<br /> spectacle before us was indeed sublime.</p>
                    </div>
                    <div className='service-contant d-flex text-center  '>
                        <div className='service-info col-4'>
                            <img src={Icon1} alt='Icon1' />
                            <h4>Product Management</h4>
                            <p>Stay on top of your task lists and stay<br /> in touch with what's happening</p>
                        </div>
                        <div className='service-info col-4'>
                            <img src={Icon2} alt='Icon2' />
                            <h4>Design & Vreatives</h4>
                            <p>Stay on top of your task lists and stay<br /> in touch with what's happening</p>
                        </div>
                        <div className='service-info col-4'>
                            <img src={Icon3} alt='Icon3' />
                            <h4>Markething & Commuication</h4>
                            <p>Stay on top of your task lists and stay<br /> in touch with what's happening</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='about'>
                <div className='container d-flex'>
                    <div className='about-image col-6'>
                        <img className='img1' src={About1} alt='About1' />
                        <img className='img2' src={About2} alt='About2' />
                    </div>
                    <div className='about-contant col-6'>
                        <span>ABOUT</span>
                        <h1>Creating,<br />Communicating <br />& Delivering</h1>
                        <span>Web designers plan, create and code internet sites and <br />web pages, many of which combine text with sounds,<br /> pictures, graphics and video clips. </span>
                        <p>Learn More</p>
                    </div>
                </div>
            </section>
            <section className='work'>
                <div className='container'>
                    <div className='work-title text-center'>
                        <h1>Discover Our Work</h1>
                        <p>Web designer is responsible for creating the<br /> design and layout of a website.</p>
                    </div>
                </div>
            </section>
            <section className='work-info'>
                <div className='container d-flex'>
                    <div className='work-contant col-6'>
                        <span>User Interface</span>
                        <h4>Creative Agency<br /> & Portfolio</h4>
                        <span>Web designers plan, create and code internet<br /> sites and web pages, text with sounds.</span>
                    </div>
                    <div className='work-image col-6'>
                        <img src={Work} alt='Work' />
                    </div>
                </div>
            </section>
            <section className='gallery'>
                <div className='container '>
                    <div className='gallery-image d-flex'>
                        <img className='col-6' src={Gallery1} alt='Gallery1' />
                        <img className='col-6' src={Gallery2} alt='Gallery2' />
                    </div>
                </div>
            </section>
            <section className='count'>
                <div className='container'>
                    <div className='count-info d-flex text-center'>
                        <div className='img col-4'>
                            <img src={Count1} alt='Count1' />
                        </div>
                        <div className='img col-4'>
                            <img src={Count2} alt='Count2' />
                        </div>
                        <div className='img col-4'>
                            <img src={Count3} alt='Count3' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='improve'>
                <div className='container'>
                    <div className='improve-info d-flex'>
                        <div className='improve-contant col-6'>
                            <h1>Analyze<br />& Improve</h1>
                            <p>Web designer is responsible for creating the design and<br /> layout of a website or web pages. It and can mean working<br /> on a brand new website.</p>
                            <div className='check d-flex'>
                                <img src={Check} alt='Check' />
                                <p>Well Planned Architecture</p>
                            </div>
                            <div className='check d-flex'>
                                <img src={Check} alt='Check' />
                                <p>Accessible to All Users</p>
                            </div>
                            <div className='check d-flex'>
                                <img src={Check} alt='Check' />
                                <p>Mobile Compatibility</p>
                            </div>
                        </div>
                        <div className='improve-image col-6'>
                            <img src={Improve} alt='improve' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='video'>
                <div className='container'>
                    <div className='video-info'>
                        <div className='video-sec'>
                            <ReactPlayer url='https://youtu.be/cLRztK1zE6s?si=WIv5jweqvG2q4piR' />
                        </div>
                        <div className='video-contant d-flex'>
                            <h4 className='col-6 text-center'>How We Work</h4>
                            <p className='col-6'>Web designers plan, create and code internet sites and<br /> web pages, many of which combine text with sounds,<br /> pictures, graphics and video clips.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='team'>
                <div className='container'>
                    <div className='team-info'>
                        <div className='team-title text-center'>
                            <h1>Team Members</h1>
                            <p>Combine text with sounds, pictures, graphics<br /> and video clips.</p>
                        </div>
                        <div className='team-member d-flex'>
                            <div className='team-member-info col-3'>
                                <img src={Team1} alt='Team1' />
                                <h4>Bernarr Dominik</h4>
                                <p>Founder</p>
                            </div>
                            <div className='team-member-info col-3'>
                                <img src={Team2} alt='Team2' />
                                <h4>Fabiana Capmany</h4>
                                <p>Account Manager</p>
                            </div>
                            <div className='team-member-info col-3'>
                                <img src={Team3} alt='Team3' />
                                <h4>Alicia Stanger</h4>
                                <p>Designer</p>
                            </div>
                            <div className='team-member-info col-3'>
                                <img src={Team4} alt='Team4' />
                                <h4>Anton Brownstein</h4>
                                <p>Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='testimonial'>
                <div className='container'>
                    <div className='testimonial-title text-center'>
                        <h1>Our Testimonials</h1>
                        <p>Read some awesome feedback from our students all over<br /> the world. We are giving the best to our students</p>
                    </div>
                    <div className='testimonial-info d-flex text-center'>
                        <div className='testimonial-image col-4'>
                            <img src={Testimonials} alt='testimonials' />
                        </div>
                        <div className='testimonial-image col-4'>
                            <img src={Testimonials} alt='testimonials' />
                        </div>
                        <div className='testimonial-image col-4'>
                            <img src={Testimonials} alt='testimonials' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='client'>
                <div className='container'>
                    <div className='client-title text-center'>
                        <h4>Our Famous Clients</h4>
                    </div>
                    <div className='client-image text-center'>
                        <img src={Client1} alt='Client1' />
                        <img src={Client2} alt='Client2' />
                        <img src={Client3} alt='Client3' />
                        <img src={Client4} alt='Client4' />
                        <img src={Client5} alt='Client5' />
                    </div>
                </div>
            </section>
            <section className='blog'>
                <div className='container'>
                    <div className='blog-title text-center'>
                        <h1>Latest From Blog</h1>
                    </div>
                    <div className='blog-info d-flex text-center'>
                        <div className='blog-contant col-4'>
                            <img src={Blog1} alt='Blog1' />
                        </div>
                        <div className='blog-contant col-4'>
                            <img src={Blog2} alt='Blog2' />
                        </div>
                        <div className='blog-contant col-4'>
                            <img src={Blog3} alt='Blog3' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='footer'>
                <div className='container'>
                    <div className='footer-info d-flex'>
                        <div className='footer-logo col-3'>
                            <img src={Footerlogo} alt='Footerlogo' />
                        </div>
                        <div className='footer-menu col-3'>
                            <ul>
                                <li><a>Menu</a></li>
                                <li><a>About</a></li>
                                <li><a>Portfolio</a></li>
                                <li><a>Blog</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </div>
                        <div className='footer-menu col-3'>
                            <ul>
                                <li><a>Service</a></li>
                                <li><a>User Experience</a></li>
                                <li><a>User Interface</a></li>
                                <li><a>Logotype</a></li>
                                <li><a>See More</a></li>
                            </ul>
                        </div>
                        <div className='footer-icon-sec d-flex col-3'>
                            <div className='footer-icon'>
                                <Facebook />
                            </div>
                            <div className='footer-icon'>
                                <Twitter />
                            </div>
                            <div className='footer-icon'>
                                <Instagram />
                            </div>


                        </div>
                    </div>
                    <div className='footer-end d-flex'>
                        <span>Copyright © 2020 Laaqiq. All Rights Reserved.</span>
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main
