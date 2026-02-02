
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { useState } from 'react';
import Popup from "../contact/Popup";

const ContactSection = () => {
   const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_w8gp96m', 'template_oq447lw', form.current, 'jUn1z-vodKfQLijZ7 asdasd')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
  const [buttonPopup, setButtonPopup] = useState(false);
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
                           <form ref={form} onSubmit={sendEmail} >
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
                                       <input type="text" placeholder="enter here..." name="text" id="number"/>
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
                                          <textarea type="text" className="select-service" name="message" >
                                    
                                          </textarea>
                                       </div>
                                       <button className="fill-btn" onClick={()=>setButtonPopup(true)}>Get in Touch<i
                                             className="fal fa-long-arrow-right"></i></button>
                                       
                                    </div>
                                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Your message has been sent. We will reach out to you shortly.</h3>
        </Popup>
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