import React from 'react';

const AddProducts = () => {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <div class="inventory-sidebar">
                            <div class="widget inventory-widget">
                                <div class="inv-widget-title mb-25">
                                    <h5 class="title">Find Perfect Vehicles</h5>
                                </div>
                                <form action="#" class="sidebar-find-car">
                                    <div class="form-grp search-box">
                                        <input type="text" placeholder="Name" />
                                        <button><i class="fas fa-search"></i></button>
                                    </div>
                                    <div class="form-grp">
                                        <i class="flaticon-placeholder-1"></i>
                                        <input type="text" placeholder="Description" />
                                    </div>
                                    <div class="form-grp search-box">
                                        <input type="text" placeholder="Image" />
                                        <button><i class="fas fa-search"></i></button>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-grp">
                                                <i class="flaticon-gasoline-pump"></i>
                                                <input type="text" placeholder="Fuel Type" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-grp">
                                                <i class="far fa-clock"></i>
                                                <input type="text" value="Year" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-grp">
                                                <i class="far fa-clock"></i>
                                                <input type="text" value="Make" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-grp">
                                                <i class="far fa-clock"></i>
                                                <input type="text" value="mileage" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-grp">
                                                <i class="far fa-clock"></i>
                                                <input type="text" value="Body" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-grp">
                                                <i class="far fa-clock"></i>
                                                <input type="text" value="Transmission" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-grp">
                                                <i class="far fa-clock"></i>
                                                <input type="text" value="Price" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-grp">
                                                <i class="far fa-clock"></i>
                                                <input type="text" value="Quantity" />
                                            </div>
                                        </div>

                                    </div>
                                    <button class="btn">Find New Vehicles</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AddProducts;