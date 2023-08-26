import Link from 'next/link';
import React from 'react';

const ServiceDetailsArea = ({ item }) => {
    return (
        <>
            <section className="page-title-area" style={{ background: "url(/assets/img/bg/page-title-bg.jpg)", backgroundSize:"cover" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-title-wrapper">
                                <p>Royal Mulch - Providing the finest mulch in Central Ohio</p>
                                <h1 className="page-title mb-10">Mulch Selection</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="breadcrumb-menu">
                            <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                                <ul className="trail-items">
                                    <li className="trail-item trail-begin"><Link href="/"><a><span>Home</span></a></Link></li>
                                    <li className="trail-item trail-end"><span>Selection Details</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-details pt-120 pb-60">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        <div >
                            <div className="service-details-main mb-60">
                                <div className="service-image">
                                    <img src={item.serviceImg} alt="" />
                                </div>
                                <h3 className="mb-15">{item.serviceTitle}</h3>
                                <p className="mb-15">{item.para1}</p>
                                <p className="mb-15">{item.para2}</p>
                                <p className="mb-15">{item.para3}</p>
                                <p className="mb-15">{item.para4}</p>
                                <p className="mb-15">{item.para5}</p>
                              
                                <hr />

                                <p className="mb-55"><h4>Ready to Transform Your Landscape? Choose Royal Mulch Today! </h4><br />
                               <br />
                                Experience the difference that our high-quality mulch can make for your Central Ohio landscape. Elevate your curb appeal, reduce maintenance, and create a stunning environment that reflects your style.
                                <br />
                                Browse our range of mulch options and find the perfect fit for your vision. Contact us now to place your order and take the first step towards a more vibrant and thriving outdoor oasis. Let Royal Mulch be your partner in achieving a landscape you'll love.
                                </p>

                               
                                
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetailsArea;