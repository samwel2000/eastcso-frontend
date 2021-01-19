import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import {FaLongArrowAltRight} from 'react-icons/fa'
import Ramani from '../assets/Ramani.jpg'
import President from '../assets/president.JPG'

function Home() {
    return (
        <>
            <section className="hero__container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="hero__text">
                                <h1>EASTERN AFRICA STATISTICAL TRAINING CENTRE <span className="hero__span">STUDENT ORGANIZATION</span></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="btn_container">
                                <button className="btn hero_button"><Link className="hero__link" to="/About">More about us <FaLongArrowAltRight /></Link></button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img className="hero__image img-fluid" src={Ramani} alt="Africa map showing EASTC countries" width="100%"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section className="president__container">
                <div className="container">
                    <div className="row">
                    <h1 className="text-center">PRESIDENT's message</h1>
                        <div className="col-md-6 offset-md-3">
                            <div className="president__section">
                                <div className="president__welcome">
                                    <div className="president__photo">
                                        <img src={President} alt="The president of Eastern africa statistical training centre student organization"/>
                                    </div>
                                    <div className="president__note">
                                        <div  className="president__name">
                                            <h2>Falles John Tagaya</h2>
                                            <p>President of EASTC student organization</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="president_text">
                                    <h3>Welcome aboard !!!</h3>
                                    <p>Thank you for visiting our website, I am delighted to welcome you to EASTCSO. On behalf of the student organization, I would like to invite you to browse our website to see our strengths and advantages.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ministries__container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <a href="#ministry1">Mininstry one</a><br />
                            <a href="#ministry2">Mininstry two</a><br />
                            <a href="#ministry3">Mininstry three</a>
                        </div>
                        <div className="col-md-8">
                            <div id="ministry1">
                                <h1>I am ministry one</h1>
                                <h1>I am ministry one</h1>
                            </div>
                            <div id="ministry2">
                                <h1>I am ministry two</h1>
                                <h1>I am ministry two</h1>
                            </div>
                            <div id="ministry3">
                                <h1>I am ministry three</h1>
                                <h1>I am ministry three</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
