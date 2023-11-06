import Link from 'next/link';
import React from 'react';

const FooterOne = () => {
    return (
        <footer className="footer1-bg">
            <section className="footer-area footer-area1 footer-area1-bg pt-95 pb-55">
                <div className="footer-bg-shape">
                    <img src="/assets/img/shape/pattern.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget footer1-widget1 mb-40">
                                <div className="footer-widget-title">
                                    <h4>about us</h4>
                                </div>
                                <p className="mb-35">Welcome to Royal Mulch, your trusted source for premium mulch solutions in Central Ohio. With a commitment to quality, sustainability, and customer satisfaction, we're here to help you transform your landscape into a beautiful and thriving outdoor haven. Explore our range of mulch options and experience the Royal Mulch advantage today.</p>
                                <div className="footer-support">
                                    <div className="irc-item support-meta">
                                        <div className="irc-item-icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div className="irc-item-content">
                                            <p>Call Us</p>
                                            <div className="support-number"><a href="tel:6145820234">(614) 582-0234</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget footer1-widget2 mb-40">
                                <div className="footer-widget-title">
                                    <h4>main pages</h4>
                                </div>
                                <ul>
                                    <li><Link href="/"><a>Home</a></Link></li>
                                    <li><Link href="/#about"><a>about</a></Link></li>
                                    <li><Link href="/#mulch-selection"><a>mulch selection</a></Link></li>
                                    <li><Link href="/#gallery"><a>gallery</a></Link></li>
                                    <li><Link href="/#faq"><a>FAQ</a></Link></li>
                                    <li><Link href="/#blog"><a>Blog</a></Link></li>
                                    <li><Link href="/#contact"><a>Contact</a></Link></li>
                                </ul>
                                
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget footer1-widget3 mb-40 ">
                                <div className="footer-widget-title">
                                    <h4>our Selection</h4>
                                </div>
                                <ul>
                                    <li><Link href="/service-details/black-mulch"><a>Black Mulch</a></Link></li>
                                    <li><Link href="/service-details/brown-mulch"><a>Brown Mulch</a></Link></li>
                                    <li><Link href="/service-details/natural-mulch"><a>Natural Mulch</a></Link></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget footer1-widget4 mb-40 ">
                                <div className="footer-widget-title">
                                    <h4>get in touch</h4>
                                </div>
                                <div className="footer-contact">
                                    <ul>
                                        <li>
                                            <div className="single-contact">
                                                <div className="contact-icon">
                                                    <i className="fas fa-phone"></i>
                                                </div>
                                                <p><a href="tel:1-800-700-600">(614) 582-0234</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="single-contact">
                                                <div className="contact-icon">
                                                    <i className="fas fa-envelope-open"></i>
                                                </div>
                                                <p><a href="mailto:royalmulchllc@gmail.com">royalmulchllc@gmail.com</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="single-contact">
                                                <div className="contact-icon">
                                                    <i className="fas fa-map-marked-alt"></i>
                                                </div>
                                                <p><a href="#">Lancaster, OH 43130</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="copyright-area copyright1-area">
                <div className="container">
                    <div className="copyright1-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-4">
                                <div className="footer-logo">
                                    <Link href="/"><a><img src="/assets/img/logo/logo1.png" style={{width:"100px"}} alt="" /></a></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="copyright-text copyright1-text">
                                    Copyright & Website By <a href="https://www.sitedominion.com/">Site Dominion, LLC</a> - 2023
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2">
                                <div className="go-top-btn">
                                    <a className="go-top" href="#"><i className="fal fa-long-arrow-up"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterOne;