import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact" className="pricing-cta pt-120 pb-120 fix">
         <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title style-2">
                     <span className="section-subtitle">Got Questions?</span>
                     <h2 className="section-main-title mb-45">Get in touch</h2>
                  </div>
               </div>
            </div>
            <div className="pricing-cta-wrapper wow fadeInUp" data-wow-delay=".3s">
               <div className="pricing-cta-inner">
                  <div className="row">
                     <div className="col-xl-8">
                        <div className="pricing-cta-form">
                           <form action="#">
                              <div className="row">
                                 <div className="col-md-6 col-sm-12">
                                    <div className="single-input-field field-name">
                                       <label htmlFor="name">full name</label>
                                       <input type="text" placeholder="enter here..." name="name" id="name"/>
                                    </div>
                                 </div>
                                 <div className="col-md-6 col-sm-12">
                                    <div className="single-input-field field-email">
                                       <label htmlFor="email">email address</label>
                                       <input type="email" placeholder="enter here..." name="email" id="email"/>
                                    </div>
                                 </div>
                                 <div className="col-md-6 col-sm-12">
                                    <div className="single-input-field field-number">
                                       <label htmlFor="number">phone number</label>
                                       <input type="text" placeholder="enter here..." name="number" id="number"/>
                                    </div>
                                 </div>
                                 <div className="col-md-6 col-sm-12">
                                    <div className="single-input-field field-address">
                                       <label htmlFor="address">address</label>
                                       <input type="text" placeholder="enter here..." name="address" id="address"/>
                                    </div>
                                 </div>
                                 <div className="col-md-12 col-sm-12">
                                    <div className="select-service-button">
                                       <div className="single-input-field field-service">
                                          <label htmlFor="select-service">Your Detailed Message</label>
                                          <input type="text" className="select-service" name="select-service" >
                                    
                                          </input>
                                       </div>
                                       <a href="#" className="fill-btn">Get in Touch<i
                                             className="fal fa-long-arrow-right"></i></a>
                                    </div>
                                 </div>
                                 
                              </div>
                           </form>
                        </div>
                     </div>
                     <div className="col-xl-4">
                        <div className="pricing-cta-img">
                           <img src="/assets/img/bg/pricing-cta-img.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
};

export default ContactSection;