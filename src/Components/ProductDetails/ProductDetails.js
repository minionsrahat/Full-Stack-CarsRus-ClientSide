import React from 'react';
import './ProductsDetails.css'
const ProductDetails = () => {
    return (
        <>
            <section class="inventory-details-area gray-lite-bg p-2 mt-5">
                <div class="container mt-4">
                    <div class="row g-2">
                        <div class="col-lg-8">
                        <div class="inventory-details-description mb-3">
                                <div class="inv-details-title">
                                    <h5>Description</h5>
                                </div>
                                <p><span>Aouda was anxious</span> though she said nothing. As for Passepartout thought Mr. Fogg’s manovre simply glorious. The captain
                                    had said “betwen eleven and twve knots,” and the Henrietta said the confirmed his she said nothing prediction. There are
                                    many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                                    injected.</p>
                                <div class="inv-details-img">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <img src="img/images/inv_details_img01.jpg" alt="" />
                                        </div>
                                        <div class="col-sm-6">
                                            <img src="img/images/inv_details_img02.jpg" alt="" />
                                        </div>
                                 </div>
                                </div>
                                <div class="inv-details-list">
                                    <ul>
                                        <li>Sapien auctor tortoris vulputate sapien ?</li>
                                        <li>Curabitr lacus vitae tellus lacinia pretium vulputate ?</li>
                                        <li>Tellus orci auctor augue mauris ?</li>
                                    </ul>
                                </div>
                               
                            </div>
                            <div class="inventory-features mb-3">
                                <div class="inv-details-title">
                                    <h5>Inventory Features</h5>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 col-sm-4">
                                        <div class="inventory-features-item">
                                            <h6>Body Type :</h6>
                                            <span>Coupe</span>
                                        </div>
                                        <div class="inventory-features-item">
                                            <h6>Make :</h6>
                                            <span>BMW</span>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-4">
                                        <div class="inventory-features-item">
                                            <h6>Transmission :</h6>
                                            <span>Automatic</span>
                                        </div>
                                        <div class="inventory-features-item">
                                            <h6>Year :</h6>
                                            <span>2020</span>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-4">
                                        <div class="inventory-features-item">
                                            <h6>Condition :</h6>
                                            <span>New</span>
                                        </div>
                                        <div class="inventory-features-item">
                                            <h6>Fuel Type :</h6>
                                            <span>Petrol</span>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-4">
                                        <div class="inventory-features-item">
                                            <h6>Drive Type :</h6>
                                            <span>Front Wheel Drive</span>
                                        </div>
                                        <div class="inventory-features-item">
                                            <h6>Doors :</h6>
                                            <span>5-door</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         

                        </div>
                        <div class="col-lg-4">
                            <aside class="inventory-sidebar">
                            <div class="widget inventory-widget mb-3">
                                    <div class="inv-widget-title mb-25">
                                        <h5 class="title">Manage Your Inventory</h5>
                                    </div>
                                    <form action="#" class="sidebar-find-car">
                                     <div>
                                     <button className='btn'>Manage</button>
                                     </div>                                      
                                    </form>
                                </div>

                                <div class="widget inventory-widget mb-3">
                                    <div class="inv-widget-title mb-25">
                                        <h5 class="title">Deliver This Car</h5>
                                    </div>
                                    <form action="#" class="sidebar-find-car">
                                     <div>
                                     <button className='btn'>Deliver</button>
                                     </div>

                                        {/* <button class="btn">Find New Vehicles</button> */}
                                    </form>
                                </div>

                                <div class="widget inventory-widget">
                                    <div class="inv-widget-title mb-25">
                                        <h5 class="title">Restock the Cars</h5>
                                    </div>
                                    <form action="#" class="sidebar-find-car">
                                        <div class="form-grp search-box">
                                            <input type="number" />
                                            
                                        </div>
                                     <div>
                                     <button className='btn'>Update Stock</button>
                                     </div>
                                    </form>
                                </div>
                               
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetails;