import React from 'react';
import useProdcuts from '../Hooks/ProductData';
import Product from '../Product/Product';

const ProductList = () => {
    const [product, setProduct]=useProdcuts(4);
    return (
        <>
            <section>
                <div class="container mt-3">
                    <div class="row my-3">
                        <div class="col-md-12 col-sm-12">
                            <div class="section-title text-center">
                                <h2>
                                    Featured Cars
                                </h2>
                            </div>
                        </div>

                        {product.map((product)=>{

                            return <Product key={product._id} product={product}></Product>

                        })}



                     
                       
                       

                    
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductList;