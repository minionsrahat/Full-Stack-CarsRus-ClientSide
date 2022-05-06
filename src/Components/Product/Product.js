import React from 'react';

const Product = (props) => {
    const {name,des,img,price,fuel_Type,year,make,body,mileage,transmission,quantity,supplier_name}=props.product
    return (
        <>
            <div class="col-md-4 col-sm-4">
                <div class="courses-thumb courses-thumb-secondary">
                    <div class="courses-top">
                        <div class="courses-image">
                            <img
                                src={img}
                                class="img-fluid"
                                alt=""
                            />
                        </div>
                        <div class="courses-date">
                            <span title="Author"
                            ><i class="fa fa-dashboard"></i> 130 000km</span
                            >
                            <span title="Author"
                            ><i class="fa fa-cube"></i> 1800cc</span
                            >
                            <span title="Views"><i class="fa fa-cog"></i> {body}</span>
                        </div>
                    </div>

                    <div class="courses-detail">
                        <h3>
                           {name}
                        </h3>

                        <p class="lead">
                          
                            <strong>${price}</strong>
                        </p>

                        <p>
                            {mileage} km &nbsp;&nbsp;/&nbsp;&nbsp; {fuel_Type}
                            &nbsp;&nbsp;/&nbsp;&nbsp; {year} &nbsp;&nbsp;/&nbsp;&nbsp;
                            {transmission}
                        </p>
                    </div>

                    <div class="courses-info">
                        <a
                            href="car-details.html"
                            class="section-btn btn btn-primary btn-block"
                        >View More</a
                        >
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;