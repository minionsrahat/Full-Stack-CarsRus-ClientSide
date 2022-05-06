import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { _id, name, des, img, price, fuel_Type, year, make, body, mileage, transmission, quantity, supplier_name } = props.product;
    const navigate = useNavigate('');
    const navigateToProductDetailspage = (id) => {
        navigate(`/productdetails/${id}`)
    }
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

                        <p className='product-des'>
                            {des}
                        </p>
                        <p class="">
                            <strong>Supplier:{supplier_name}</strong>
                        </p>
                    </div>

                    <div class="courses-info">
                        <button onClick={() => navigateToProductDetailspage(_id)} class="section-btn btn btn-primary btn-block"> View More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;