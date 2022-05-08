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
         <div className="col-md-4 col-sm-4">
                <div className="courses-thumb courses-thumb-secondary">
                    <div className="courses-top">
                        <div className="courses-image">
                            <img
                                src={img}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="courses-date">
                            <span title="Author"><BsSpeedometer className='me-1'></BsSpeedometer>{mileage}</span>
                            <span title="Author"><FaCube className='me-1'></FaCube>{fuel_Type}</span>
                            <span title="Views"><FaCog className='me-1'></FaCog>{body}</span>
                        </div>
                    </div>

                    <div className="courses-detail">
                        <h3>
                            {name}
                        </h3>

                        <p className="lead">

                            <strong>${price}</strong>
                        </p>

                        <p className='product-des'>
                            {des}
                        </p>
                        
                        <p className='product-des'>
                           Quantity: {quantity}
                        </p>
                        <p className="">
                            <strong>Supplier: {supplier_name}</strong>
                        </p>
                    </div>

                    <div className="courses-info">
                        <button onClick={() => navigateToProductDetailspage(_id)} className="section-btn btn btn-primary btn-block">Update Stock</button>
                    </div>
                </div>
            </div>
           
        </>
    );
};

export default Product;