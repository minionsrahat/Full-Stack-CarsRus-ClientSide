import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProducts = () => {
    const name=useRef('');
    const des=useRef('');
    const img=useRef('');
    const price=useRef(0);
    const year=useRef(0);
    const fuel_Type=useRef('');
    const make=useRef('');
    const mileage=useRef('');
    const body=useRef('');
    const transmission=useRef('');
    const quantity=useRef(1);

    const [user, loading] = useAuthState(auth);
    const email = user?.email
    const token = localStorage.getItem('accessToken')

    const handleFormsubmit = (e) => {
        const newCar={
            name:name.current.value,
            des:des.current.value,
            img:img.current.value,
            price:price.current.value,
            fuel_Type:fuel_Type.current.value,
            year:year.current.value,
            make:make.current.value,
            mileage:mileage.current.value,
            body:body.current.value,
            transmission:transmission.current.value,
            quantity:quantity.current.value,
            supplier_name:email
        }
        e.preventDefault();
        fetch("http://localhost:5000/addCarsData", {
            method: "POST",
            headers: { 'Content-Type': 'application/json',
            accesstoken: `${email} ${token}`
        },
            body: JSON.stringify(newCar)
           }).then(res => res.json())
            .then((data) => {
                const { acknowledged, insertedId }=data;
                const {error}=data

              if (acknowledged) {
              e.reset();
              toast("Added SuccessFully!!")
              }
              else{
                toast("Unexpected Error Occured!! Please Fill Up form carefully")
            }
            })
       
    }
    return (
        <>
            <div class="container mt-5">
                <div class="row mt-5">
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
                    <div class="col-md-8 mx-auto">
                        <div class="inventory-sidebar">
                            <div class="widget inventory-widget">
                                <div class="inv-widget-title mb-25">
                                    <h5 class="title text-center">Add New Car To Inventory</h5>
                                </div>
                                <form action="#"onSubmit={handleFormsubmit} class="sidebar-find-car">
                                    <div class="form-grp search-box">
                                        <input required ref={name} type="text" placeholder="Name" />
                                        
                                    </div>
                                    <div class="form-grp">
                                        <i class="flaticon-placeholder-1"></i>
                                        <input type="text" required ref={des} placeholder="Description" />
                                    </div>
                                    <div class="form-grp search-box">
                                        <input type="text" required ref={img} placeholder="Image Url" />
                                        
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-grp">
                                                <i class="flaticon-gasoline-pump"></i>
                                                <input type="text" required ref={fuel_Type} placeholder="Fuel Type" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-grp">
                                                <i class="far fa-clock"></i>
                                                <input required ref={year} type="text" placeholder="Year" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-grp">
                                                <i class="far fa-clock"></i>
                                                <input required ref={make} type="text" placeholder="Make" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-grp">
                                                <i class="far fa-clock"></i>
                                                <input required ref={mileage} type="text" placeholder="mileage" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-grp">
                                                <i class="far fa-clock"></i>
                                                <input required ref={body} type="text" placeholder="Body" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-grp">
                                                <i class="far fa-clock"></i>
                                                <input required ref={transmission} type="text" placeholder="Transmission" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-grp">
                                                <i class="far fa-clock"></i>
                                                <input required ref={price} type="number" placeholder="Price" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-grp">
                                                <i class="far fa-clock"></i>
                                                <input required ref={quantity} type="number" placeholder="Quantity" />
                                            </div>
                                        </div>

                                    </div>
                                    <button type='submit' class="btn">Add New Car</button>
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