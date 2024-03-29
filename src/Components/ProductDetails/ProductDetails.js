import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase';
import './ProductsDetails.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
    const [product,setProduct]=useState({});
    const [quantity,setQuantity]=useState(0);
    const [stock,setStock]=useState(1);
    const {id}=useParams();
    const navigate=useNavigate();

    const [user, loading] = useAuthState(auth);
    const email = user?.email
   

    useEffect(()=>{
        fetch(`https://carsrus.onrender.com/readSingleCarsData/${id}`)
        .then(res=>res.json())
        .then(data=> {
            setProduct(data)
            setQuantity(data.quantity)
        });
    },[])
    const { _id, name, des, img, price, fuel_Type, year, make, body, mileage, transmission, supplier_name } = product;
    

    const deliverProduct=()=>{
        const token = localStorage.getItem('accessToken')
        fetch(`https://carsrus.onrender.com/deliverCarData/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json',
            accesstoken:`${email} ${token}`}
             }).then(res => res.json())
            .then((data) => {
                const { acknowledged, modifiedCount }=data
                if (acknowledged && modifiedCount == 1) {
                    setQuantity(parseInt(quantity)-1)
                    toast("Product Delivered Successfully")
                }
                else{
                    toast("Sorry Unexpected Error Occured or Unauthorize access")
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
        const token = localStorage.getItem('accessToken')
        e.preventDefault()
        fetch("https://carsrus.onrender.com/updateStock", {
            method: "POST",
            headers: { 'Content-Type': 'application/json',
            accesstoken:`${email} ${token}`
                },
          
            body: JSON.stringify({_id,stock:parseInt(stock)})
            }).then(res => res.json())
            .then((data) => {
                const { acknowledged, modifiedCount }=data
                if (acknowledged && modifiedCount == 1) {
                    setQuantity(parseInt(quantity)+parseInt(stock))
                    setStock(1)
                    toast("New Quantity Added Successfully")
                }
                else
                {
                    toast("Sorry Unexpected Error Occured or Unauthorize access")
                }
            })
    }



    return (
        <>
            <section className="inventory-details-area gray-lite-bg p-2 mt-5">
                <div className="container mt-4">
                    <div className="row g-2">
                        <div className="col-lg-8">
                        <div className="inventory-details-description mb-3">
                                <div className="inv-details-title">
                                    <h5>Description</h5>
                                </div>
                                <h4>{name}</h4>
                                <p>{des}</p>
                                <div className="inv-details-img">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="col-sm-6">
                                            <img src={img} alt="" />
                                        </div>
                                 </div>
                                </div>
                                <div className="">
                                
                                    <ul className='description-list'>
                                        <li><strong>Id: {_id}</strong></li>
                                        <li><strong>Supplier name: {supplier_name}</strong></li>
                                        <li><strong>Status: {quantity>0?'Stock Available':"Sold Out"}</strong></li>
                                    </ul>
                                </div>
                               
                            </div>
                            <div className="inventory-features mb-3">
                                <div className="inv-details-title">
                                    <h5>Inventory Features</h5>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 col-sm-4">
                                        <div className="inventory-features-item">
                                            <h6>Body Type :</h6>
                                            <span>{body}</span>
                                        </div>
                                        <div className="inventory-features-item">
                                            <h6>Make :</h6>
                                            <span>{make}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-4">
                                        <div className="inventory-features-item">
                                            <h6>Transmission :</h6>
                                            <span>{transmission}</span>
                                        </div>
                                        <div className="inventory-features-item">
                                            <h6>Year :</h6>
                                            <span>{year}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-4">
                                        <div className="inventory-features-item">
                                            <h6>Condition :</h6>
                                            <span>New</span>
                                        </div>
                                        <div className="inventory-features-item">
                                            <h6>Fuel Type :</h6>
                                            <span>{fuel_Type}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-4">
                                        <div className="inventory-features-item">
                                            <h6>Quantity</h6>
                                            <span>{quantity}</span>
                                        </div>
                                        <div className="inventory-features-item">
                                            <h6>Price :</h6>
                                            <span>${price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />                         

                        </div>
                        <div className="col-lg-4">
                            <aside className="inventory-sidebar">
                            <div className="widget inventory-widget mb-3">
                                    <div className="inv-widget-title mb-25">
                                        <h5 className="title">Manage Your Inventory</h5>
                                    </div>
                                    <div className="sidebar-find-car">
                                     <div>
                                     <button className='btn' onClick={()=>navigate('/manageproducts')}>Manage</button>
                                     </div>                                      
                                    </div>
                                </div>

                                <div className="widget inventory-widget mb-3">
                                    <div className="inv-widget-title mb-25">
                                        <h5 className="title">Deliver This Car</h5>
                                    </div>
                                    <div className="inv-widget-title mb-25">
                                        <h5 className="title">Total Quantity: {quantity}</h5>
                                    </div>
                                  
                                     <div  className="sidebar-find-car">
                                        {quantity==0?<>
                                            <button className='btn'disabled>Stock Out</button>
                                        </>:<>
                                        <button className='btn' onClick={deliverProduct}>Deliver One</button>
                                        </>}
                                     </div>
                                     
                                   
                                </div>

                                <div className="widget inventory-widget">
                                    <div className="inv-widget-title mb-25">
                                        <h5 className="title">Restock the Cars</h5>
                                    </div>
                                    <form action="#" onSubmit={handleFormsubmit} className="sidebar-find-car">
                                        <div className="form-grp search-box">
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