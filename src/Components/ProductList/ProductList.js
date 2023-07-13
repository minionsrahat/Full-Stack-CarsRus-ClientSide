import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProdcuts from '../Hooks/ProductData';
import Product from '../Product/Product';
import './ProductList.css'
import Spinner from '../Spinner/Spinner';

const ProductList = () => {
    const [product, setProduct] = useState([]);
    const [spinnerloading, setSpinnerLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setSpinnerLoading(true)
        fetch(`https://carsrus-minionsrahat.vercel.app/readCarsData?limit=6`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .finally(()=>{
                       setSpinnerLoading(false)
            })
    }, [])

    if (spinnerloading) {
        return <Spinner></Spinner>;
    }
    return (
        <>
            <section>
                <div className="container mt-3">
                    <div className="row my-3">
                        <div className="col-md-12 col-sm-12">
                            <div className="section-heading text-center">
                                <h2>
                                    Featured Cars
                                </h2>
                            </div>
                        </div>

                        {product.map((product) => {

                            return <Product key={product._id} product={product}></Product>

                        })}
                    </div>
                </div>
                <div className="sidebar-find-car w-25 mx-auto">
                    <div>
                        <button className='btn' onClick={() => navigate('/manageproducts')}>Manage Inventories</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductList;