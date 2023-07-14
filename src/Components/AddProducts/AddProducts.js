import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../Spinner/Spinner';

const AddProducts = () => {
    const name = useRef('');
    const des = useRef('');
    const supplier_name = useRef('');
    const img = useRef('');
    const price = useRef(0);
    const year = useRef(0);
    const fuel_Type = useRef('');
    const make = useRef('');
    const mileage = useRef('');
    const body = useRef('');
    const transmission = useRef('');
    const quantity = useRef(1);
    const navigate=useNavigate()
    const [spinnerloading, setSpinnerLoading] = useState(false);


    const [user, loading] = useAuthState(auth);
    const email = user?.email

    const handleFormsubmit = (e) => {
        const token = localStorage.getItem('accessToken')
      
        const newCar = {
            name: name.current.value,
            des: des.current.value,
            img: img.current.value,
            price: price.current.value,
            fuel_Type: fuel_Type.current.value,
            year: year.current.value,
            make: make.current.value,
            mileage: mileage.current.value,
            body: body.current.value,
            transmission: transmission.current.value,
            quantity: quantity.current.value,
            supplier_name: supplier_name.current.value,
            email:email
        }
        e.preventDefault();
        fetch("https://fancy-beret-dog.cyclic.app/addCarsData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                accesstoken: `${email} ${token}`
            },
            body: JSON.stringify(newCar)
        }).then(res => res.json())
            .then((data) => {
                const { acknowledged, insertedId } = data;
                const { error } = data

                if (acknowledged) {
                    document.getElementById("car-form").reset();
                    toast("Added SuccessFully!!")
                }
                else {
                    toast("Unexpected Error Occured!! Please Fill Up form carefully")
                }
            })
           
            // if (spinnerloading) {
            //     return <Spinner></Spinner>;
            // }

    }
    return (
        <>
            <div className="container mt-5">
           
                <div className="row mt-5">
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
                    <div className="col-md-8 mx-auto">
                        <div className="inventory-sidebar">
                            <div className="widget inventory-widget">
                                <div className="inv-widget-title mb-25">
                                    <h5 className="title text-center">Add New Car To Inventory</h5>
                                </div>
                                <form action="#" id="car-form" onSubmit={handleFormsubmit} className="sidebar-find-car">
                                    <div className="form-grp">
                                        <input required ref={name} type="text" placeholder="Name" />
                                    </div>
                                    <div className="form-grp">
                                        <input type="text" required ref={des} placeholder="Description" />
                                    </div>
                                    <div className="form-grp">
                                        <input type="text" required ref={supplier_name} placeholder="Supplier Name" />
                                    </div>
                                    <div className="form-grp">
                                        <input type="text" required ref={img} placeholder="Image Url" />
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-grp">

                                                <input type="text" required ref={fuel_Type} placeholder="Fuel Type" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-grp">

                                                <input required ref={year} type="text" placeholder="Year" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-grp">

                                                <input required ref={make} type="text" placeholder="Make" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-grp">

                                                <input required ref={mileage} type="text" placeholder="mileage" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-grp">

                                                <input required ref={body} type="text" placeholder="Body" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-grp">
                                                <input required ref={transmission} type="text" placeholder="Transmission" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-grp">

                                                <input required ref={price} type="number" placeholder="Price" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-grp">

                                                <input required ref={quantity} type="number" placeholder="Quantity" />
                                            </div>
                                        </div>

                                    </div>
                                    <button type='submit' className="btn">Add New Car</button>
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