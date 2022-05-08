import React from 'react';
import './FAQ.css'

const FAQ = () => {
    return (
        <>
            <div class="faq-area position-relative my-5 fix pt-120 pb-120">
                <div class="container my-5">
                    <div className="section-heading text-center">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div class="row gy-3 gx-4">
                        <div class="col-lg-6 order-0 order-lg-2">
                            <div class="faq-img">
                                <img src="https://themebeyond.com/html/carnation/carnation/img/images/faq_img.jpg" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="accordion" id="accordionPanelsStayOpenExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                            Do You Offer Any Warranty?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                        <div class="accordion-body">
                                            A manufacturer warranty is offered to car buyers as a promise that the seller backs its vehicle against design defects. Auto dealers are bound by the manufacturer warranty (also known as the factory warranty) to repair, replace, or reimburse customers for damages that occur — to a certain extent.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            What Is Auto Detailing?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                        <div class="accordion-body">
                                            Auto detailing is an activity that keeps the vehicle in its best possible condition, especially cosmetic, as opposed to mechanical. This is achieved by removing both visible and invisible contaminants from the vehicle's interior, and polishing the exterior to its original blemish-free finish. The most basic detail options include an exterior wash and wax, interior vacuuming, window cleaning and surface polishing.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            Is It Urgent To Fix An Oil Leak?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                        <div class="accordion-body">
                                            Leaking rings or valve seals can also be contributing to your car losing oil. However, if there are no holes in your gaskets, the oil will not make it outside the engine, so you won’t notice it, as it will get burned up in the combustion process.Regardless of the specific cause, it is urgent to stop an oil leak, so take your vehicle to the Meineke shop immediately. Following the oil leak, you may encounter the smell of burnt oil, followed by blue smoke and ultimately some major damage to your engine. Do not delay in addressing this issue.                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                            How Do I Check My Tire Pressure?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                                        <div class="accordion-body">
                                            Remove the cap from the air valve on the tire, and put it somewhere you won't lose it.
                                            Press the tire gauge against the open valve stem for a second or two. It's normal to hear a hiss of air.
                                            Read the air pressure gauge. For manual gauges, a dial points to the pressure or a bar indicates the pressure by how far it was pushed out. The pressure will appear onscreen on a digital tire gauge.
                                            Compare this number with the recommended tire pressure.
                                            Replace the tire's air valve cap. (Hold off on this step if you need to adjust the air pressure.)
                                            Repeat this process for each tire.                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQ;