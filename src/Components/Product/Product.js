import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
import { FaCube, FaCog } from 'react-icons/fa';
import { BsSpeedometer } from 'react-icons/bs';
import { GiFuelTank } from 'react-icons/gi';

const Product = (props) =>{
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
                            <span title="Author"><BsSpeedometer className='me-1'></BsSpeedometer>{mileage}</span>
                            <span title="Author"><FaCube className='me-1'></FaCube>{fuel_Type}</span>
                            <span title="Views"><FaCog className='me-1'></FaCog>{body}</span>
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
                            <strong>Supplier: {supplier_name}</strong>
                        </p>
                    </div>

                    <div class="courses-info">
                        <button onClick={() => navigateToProductDetailspage(_id)} class="section-btn btn btn-primary btn-block">Update Stock</button>
                    </div>
                </div>
            </div>
           
        </>
    );
};

export default Product;