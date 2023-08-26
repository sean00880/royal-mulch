import React from 'react';

const FaqSectionTwo = ({faq_area}) => {
    return (
        <div id="faq" className={` ${faq_area ? faq_area : 'faq-area style-3 pt-120 pb-60'}`}>
         <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-6">
                  <div className="faq-img mb-60">
                     <img src="/assets/img/about/faq-thumb.png" alt=""/>
                     <div className="faq-thumb">
                        <img src="/assets/img/logo/logo1.png" alt=""/>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="section-title style-2">
                     <span className="section-subtitle"> faq </span>
                     <h2 className="section-main-title mb-55">Here are some commonly asked questions</h2>
                  </div>
                  <div className="faq-wrapper mb-60">
                     <div className="gm-faq">
                        <div className="accordion" id="accordionExample-st-2">
                           <div className="gm-faq-group">
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="headingOne-st-2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseOne-st-2" aria-expanded="false"
                                       aria-controls="collapseOne-st-2">
                                       What is triple ground mulch?
                                    </button>
                                 </h2>
                                 <div id="collapseOne-st-2" className="accordion-collapse collapse"
                                    aria-labelledby="headingOne-st-2" data-bs-parent="#accordionExample-st-2">
                                    <div className="accordion-body">
                                    Triple ground mulch is a finely shredded and processed organic material that goes through three rounds of grinding. This results in a finer texture that is excellent for moisture retention, weed suppression, and enhancing soil quality in your garden.
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="headingTwo-st-2">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseTwo-st-2" aria-expanded="true"
                                       aria-controls="collapseTwo-st-2">
                                        How much mulch do I need for my garden?
                                    </button>
                                 </h2>
                                 <div id="collapseTwo-st-2" className="accordion-collapse collapse show"
                                    aria-labelledby="headingTwo-st-2" data-bs-parent="#accordionExample-st-2">
                                    <div className="accordion-body">
                                    The amount of mulch you need depends on the size of your garden and the depth you want to apply. As a general guideline, a 2-3 inch layer of mulch is recommended. 
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="headingThree-st-2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseThree-st-2" aria-expanded="false"
                                       aria-controls="collapseThree-st-2">
                                       Is dyed mulch safe for plants and the environment?
                                    </button>
                                 </h2>
                                 <div id="collapseThree-st-2" className="accordion-collapse collapse"
                                    aria-labelledby="headingThree-st-2" data-bs-parent="#accordionExample-st-2">
                                    <div className="accordion-body">
                                    Yes, our dyed mulch products are safe for plants and the environment. We use eco-friendly, non-toxic dyes that are carefully applied to the mulch. The dyes are water-based and won't harm your plants or leach harmful chemicals into the soil.
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="headingFour-st-2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseFour-st-2" aria-expanded="false"
                                       aria-controls="collapseFour-st-2">
                                       How often should I replenish my mulch?
                                    </button>
                                 </h2>
                                 <div id="collapseFour-st-2" className="accordion-collapse collapse"
                                    aria-labelledby="headingFour-st-2" data-bs-parent="#accordionExample-st-2">
                                    <div className="accordion-body">
                                    Mulch should be replenished annually or as needed. Over time, mulch can break down and decompose, losing some of its benefits. Reapplying a fresh layer every year helps maintain its weed suppression, moisture retention, and soil enrichment properties.
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-item">
                                 <h2 className="accordion-header" id="headingFour-st-2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseFour-st-2" aria-expanded="false"
                                       aria-controls="collapseFour-st-2">
                                        Can I use mulch for pathways and play areas?
                                    </button>
                                 </h2>
                                 <div id="collapseFour-st-2" className="accordion-collapse collapse"
                                    aria-labelledby="headingFour-st-2" data-bs-parent="#accordionExample-st-2">
                                    <div className="accordion-body">
                                    While mulch is commonly used in garden beds, it can also be used for pathways and play areas. However, for high-traffic areas, we recommend using a coarser mulch variety to ensure better durability. Make sure to regularly check and replenish mulch in these areas to maintain their effectiveness and appearance.
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
      </div>
    );
};

export default FaqSectionTwo;