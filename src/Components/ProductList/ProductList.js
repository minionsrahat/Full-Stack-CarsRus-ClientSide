import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProdcuts from '../Hooks/ProductData';
import Product from '../Product/Product';
import './ProductList.css'

const ProductList = () => {
    const [product, setProduct] = useProdcuts(6);
    const navigate=useNavigate();
    return (
        <>
            <section>
                <div class="container mt-3">
                    <div class="row my-3">
                        <div class="col-md-12 col-sm-12">
                            <div class="section-heading text-center">
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
                <div class="sidebar-find-car w-25 mx-auto">
                    <div>
                        <button className='btn' onClick={() => navigate('/manageproducts')}>Manage Inventories</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductList;