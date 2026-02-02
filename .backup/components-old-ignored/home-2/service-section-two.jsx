import Link from 'next/link';
import React from 'react';
import ServicesList from '../../data/services-data';

const ServiceSectionTwo = () => {
    return (
        <section className="services-area pt-50 pb-60" id="mulch-selection">
            <div className="services-title-bg">
                <img src="/assets/img/bg/services-title-bg.jpg" alt="" />
            </div>
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-8">
                        <div className="section-title style-2 text-center services-title-style-2">
                            <span className="section-subtitle"><span>Our Mulch Selection</span> </span>
                            <h2 className="section-main-title mb-45">Premium Triple Ground Mulch in Bulk</h2>
                        </div>
                    </div>
                </div>
                <div className="services-wrapper wow fadeInUp" data-wow-delay=".3s">
            {ServicesList &&
               <div className="row">
                {ServicesList.slice(7, 10).map((item, num) => (
                  <div className="col-lg-4 col-md-6" key={num}>
                     <div className="single-service style-3 mb-40">
                        <div className="service-img">
                           <img src={item.serviceImg} alt="service icon"/>
                        </div>
                        <div className="single-service-content">
                           <div className="service-icon" style={{background:`url(${item.bg})`, backgroundSize:"contain"}}>
                              
                           </div>
                           <h4 className="service-title"><Link href={`/service-details/${item.id}`}><a>{item.serviceTitle}</a></Link></h4>
                           <p>{item.serviceDesc}</p>
                            <Link href={`/service-details/${item.id}`}><a className="text-btn"><i className="fal fa-long-arrow-right"></i>{item.serviceBtn}<i className="fal fa-long-arrow-right"></i></a></Link>
                        </div>
                     </div>
                  </div>
                  ))}
               </div>
            }
            </div>
                <div className="services-action-wrapper style-2 wow fadeInUp" data-wow-delay=".3s">
                    <div className="service-action-bg-shape">
                        <img src="/assets/img/shape/pattern-1270.png" alt="" />
                    </div>
                    <h3><i className="flaticon-house"></i>Experience the Excellence of Royal Mulch's Triple Ground Mulch: Unmatched Quality for Your Landscape Transformation!</h3>
                    <Link href="#contact"><a className="fill-btn-rounded"><i className="fal fa-farm"></i><span>Get a Quote</span></a></Link>
                </div>
            </div>
        </section>
    );
};

export default ServiceSectionTwo;