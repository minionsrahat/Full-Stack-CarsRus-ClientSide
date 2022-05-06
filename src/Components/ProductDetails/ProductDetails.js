import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductsDetails.css'
const ProductDetails = () => {
    const [product,setProduct]=useState({});
    const [quantity,setQuantity]=useState(0);
    const [stock,setStock]=useState(1);
    const {id}=useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/readSingleCarsData/${id}`)
        .then(res=>res.json())
        .then(data=> {
            setProduct(data)
            setQuantity(data.quantity)
        });
    },[])
    const { _id, name, des, img, price, fuel_Type, year, make, body, mileage, transmission, supplier_name } = product;
    

    const deliverProduct=()=>{
        fetch(`http://localhost:5000/deliverCarData/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json',
            // accesstoken:`${email} ${token}`},
            }}).then(res => res.json())
            .then(({ acknowledged, modifiedCount }) => {
                if (acknowledged && modifiedCount == 1) {
                    setQuantity(parseInt(quantity)-1)
                }
              })
        
    }
    const handleInputStock=(e)=>{
        if(parseInt(e.target.value)>0)
        {
            setStock(e.target.value)
        }
          
    }

    const handleFormsubmit=(e)=>{
        e.preventDefault()
        fetch("http://localhost:5000/updateStock", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            // accesstoken:`${email} ${token}`},
            body: JSON.stringify({_id,stock:parseInt(stock)})
            }).then(res => res.json())
            .then(({ acknowledged, modifiedCount }) => {
                if (acknowledged && modifiedCount == 1) {
                    setQuantity(parseInt(quantity)+parseInt(stock))
                    setStock(1)
                }
            })
    }



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
                                <p>{des}</p>
                                <div class="inv-details-img">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <img src={img} alt="" />
                                        </div>
                                        <div class="col-sm-6">
                                            <img src={img} alt="" />
                                        </div>
                                 </div>
                                </div>
                                <div class="">
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
                                            <span>{body}</span>
                                        </div>
                                        <div class="inventory-features-item">
                                            <h6>Make :</h6>
                                            <span>{make}</span>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-4">
                                        <div class="inventory-features-item">
                                            <h6>Transmission :</h6>
                                            <span>{transmission}</span>
                                        </div>
                                        <div class="inventory-features-item">
                                            <h6>Year :</h6>
                                            <span>{year}</span>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-4">
                                        <div class="inventory-features-item">
                                            <h6>Condition :</h6>
                                            <span>New</span>
                                        </div>
                                        <div class="inventory-features-item">
                                            <h6>Fuel Type :</h6>
                                            <span>{fuel_Type}</span>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-4">
                                        <div class="inventory-features-item">
                                            <h6>Quantity</h6>
                                            <span>{quantity}</span>
                                        </div>
                                        <div class="inventory-features-item">
                                            <h6>Price :</h6>
                                            <span>${price}</span>
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
                                    <div class="inv-widget-title mb-25">
                                        <h5 class="title">Total Quantity: {quantity}</h5>
                                    </div>
                                  
                                     <div  class="sidebar-find-car">
                                     <button className='btn' onClick={deliverProduct}>Deliver One</button>
                                     </div>

                                   
                                </div>

                                <div class="widget inventory-widget">
                                    <div class="inv-widget-title mb-25">
                                        <h5 class="title">Restock the Cars</h5>
                                    </div>
                                    <form action="#" onSubmit={handleFormsubmit} class="sidebar-find-car">
                                        <div class="form-grp search-box">
                                            <input  onChange={handleInputStock} placeholder='Enter Stock' value={stock} type="number" />
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