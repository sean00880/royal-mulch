import React from 'react';
import Image from 'next/image';

const AboutSectionThree = () => {
    return (
        <div className="about-area d-flex flex-row justify-content-center" id="about">
            <div className="container">
                <div className="about-tab-wrapper">

                    <div className="about-tab-content wow fadeInUp" data-wow-delay=".3s">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab">
                                <div className="about-service-wrapper">
                                    <div className="about-service-bg">
                                        <img src="/assets/img/bg/about-service-bg.png" alt="" />
                                    </div>
                                    <div className="row gx-0 align-items-center">
                                        <div className="col-lg-6">
                                            <div className="service-tab-content">
                                                <div className="section-title style-3">
                                                    
                                                    <h2 className="section-main-title mb-20">Premium Quality Residential & Commercial Mulch Solutions!</h2>
                                                    <span className="section-subtitle">Serving Lancaster, Ohio and Surrounding Regions</span>
                                                </div>
                                                <p>Our commitment to excellence drives us to provide the finest mulch products, carefully curated to suit your specific needs. Whether you're aiming for a vibrant burst of color or seeking a natural look, we have mulch varieties that cater to your preferences. </p>
                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="service-tab-img">
                                                <img src="/assets/img/service/residential.jpeg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSectionThree;