import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Contact extends Component {
    render() {
        return (
            <div>
                {/*<!-- banner-2 -->*/}
                <div className="page-head_agile_info_w3l">

                </div>
                {/*<!-- //banner-2 -->*/}
                {/* <!-- page -->*/}
                <div className="services-breadcrumb">
                    <div className="agile_inner_breadcrumb">
                        <div className="container">
                            <ul className="w3_short">
                                <li>
                                    <Link to="/">Home</Link>
                                    <i>|</i>
                                </li>
                                <li>contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- //page -->*/}
                {/*<!-- contact page -->*/}
                <div className="contact-w3l">
                    <div className="container">
                        {/* <!-- tittle heading -->*/}
                        <h3 className="tittle-w3l">Contact Us
                        <span className="heading-style">
                                <i></i>
                                <i></i>
                                <i></i>
                            </span>
                        </h3>
                        {/* <!-- //tittle heading -->*/}
                        {/* <!-- contact -->*/}
                        <div className="contact agileits">
                            <div className="contact-agileinfo">
                                <div className="contact-form wthree">
                                    <form action="#" method="post">
                                        <div className="">
                                            <input type="text" name="name" placeholder="Name" required="" />
                                        </div>
                                        <div className="">
                                            <input className="text" type="text" name="subject" placeholder="Subject"
                                                required="" />
                                        </div>
                                        <div className="">
                                            <input className="email" type="email" name="email" placeholder="Email"
                                                required="" />
                                        </div>
                                        <div className="">
                                            <textarea placeholder="Message" name="message" required="" >
                                            </textarea>
                                    </div>
                                    <input type="submit" value="Submit" />
                                </form>
                            </div>
                            <div className="contact-right wthree">
                                <div className="col-xs-7 contact-text w3-agileits">
                                    <h4>GET IN TOUCH :</h4>
                                    <p>
                                        <i className="fa fa-map-marker"></i> 123 Sebastian, NY 10002, USA.</p>
                                    <p>
                                        <i className="fa fa-phone"></i> Telephone : 333 222 3333</p>
                                    <p>
                                        <i className="fa fa-fax"></i> FAX : +1 888 888 4444</p>
                                    <p>
                                        <i className="fa fa-envelope-o"></i> Email :
                                        <a href="mailto:example@mail.com">mail@example.com</a>
                                    </p>
                                </div>
                                <div className="col-xs-5 contact-agile">
                                    <img src="images/contact2.jpg" alt="" />
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- //contact -->*/}
                </div>
            </div>
       {/* <!-- map -->*/ }
        <div className="map w3layouts">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55565170.29301636!2d-132.08532758867793!3d31.786060306224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sin!4v1512365940398"
                allowfullscreen></iframe>
        </div>
        {/* <!-- //map -->*/ }
        {/* <!-- newsletter -->*/ }
        <div className="footer-top">
            <div className="container-fluid">
                <div className="col-xs-8 agile-leftmk">
                    <h2>Get your Groceries delivered from local stores</h2>
                    <p>Free Delivery on your first order!</p>
                    <form action="#" method="post">
                        <input type="email" placeholder="E-mail" name="email" required=""/>
                            <input type="submit" value="Subscribe"/>
                        </form>
                            <div className="newsform-w3l">
                                <span className="fa fa-envelope-o" aria-hidden="true"></span>
                            </div>
                    </div>
                        <div className="col-xs-4 w3l-rightmk">
                            <img src="images/tab3.png" alt=" "/>
                    </div>
                            <div className="clearfix"></div>
                        </div>
            </div>
                </div>
                )
            }
        }
