import React from 'react'
import {FaTwitter,FaFacebookF,FaSkype,FaLinkedinIn} from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr';
import {RiArrowRightCircleFill} from 'react-icons/ri';
import {Futer,FooterInfo,Copyright,Address,UsefulLinks,SocialLinks,Link,Newsletter,Subscribe,Form,Input,InputLabel} from './FooterElements'

function Footer() {
    return (
        <>
            <Futer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <FooterInfo>
                                <Address>
                                    <h5><strong>Eastern Africa statistical Training centre<br />
                                    Students organisation</strong></h5>

                                    <p>Dar es salaam, Ubungo<br />
                                    Changanyikeni<br />
                                    P.O.Box 19921 <br /></p>

                                    <p><strong>Phone:</strong> +255652068080 <br />
                                    <strong>Email:</strong> eastcso@eastc.ac.tz</p>
                                </Address>
                                <SocialLinks>
                                    <Link to='/' social="true"><FaTwitter/></Link>
                                    <Link to='/' social="true"><FaFacebookF/></Link>
                                    <Link to='/' social="true"><GrInstagram/></Link>
                                    <Link to='/' social="true"><FaSkype/></Link>
                                    <Link to='/' social="true"><FaLinkedinIn/></Link>
                                </SocialLinks>
                            </FooterInfo>
                        </div>
                        <div className="col-md-3">
                            <UsefulLinks>
                                <h5><strong>Useful Links</strong></h5>
                                <br />
                                <p><RiArrowRightCircleFill size="30px" style={{marginRight:5}}/><Link to='/'>Students By laws</Link></p>
                                <p><RiArrowRightCircleFill size="30px" style={{marginRight:5}}/><Link to='/'>Examination regulation</Link></p>
                                <p><RiArrowRightCircleFill size="30px" style={{marginRight:5}}/><Link to='/'>SIS</Link></p>
                                <p><RiArrowRightCircleFill size="30px" style={{marginRight:5}}/><Link to='/'>Students Mail</Link></p>
                            </UsefulLinks>
                        </div>
                        <div className="col-md-4">
                            <Newsletter>
                                <h5><strong>Our Newsletter</strong></h5>
                                <Subscribe>Subscribe to our news letter to get updated with our news</Subscribe>
                                <Form>
                                    <Input type="email"/>
                                    <InputLabel type="submit" value="Subscribe" className="btn"/>
                                </Form>
                            </Newsletter>
                        </div>
                    </div>
                </div>
            </Futer>
            <Copyright>
                <div className="container">
                    <div className="row">
                        <p>© 2020 Copyright <i>Eastern Africa Statistical Training Centre Students Organizations</i>.
                        All Rights Reserved  <br /> Designed by <strong>samwel.godfrey@eastc.ac.tz</strong></p>
                    </div>
                </div>
            </Copyright>
        </>
    )
}

export default Footer
