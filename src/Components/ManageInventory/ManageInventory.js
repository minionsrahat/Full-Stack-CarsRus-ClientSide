import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import useProdcuts from '../Hooks/ProductData';
import './ManageInventory.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageInventory = () => {
    const [product, setProduct] = useProdcuts();
    const navigate = useNavigate();

    const [user, loading] = useAuthState(auth);
    const email = user?.email

    const navigateToProductDetailsPage = (id) => {
        navigate(`/productdetails/${id}`)
    }
    const deleteCar = async (id) => {
        const token = localStorage.getItem('accessToken')
        let isExecuted = window.confirm("Are you sure to delete this car data");
        if (isExecuted) {
            fetch(`http://localhost:5000/deleteCarData/${id}`, {
                method: "DELETE",
                headers: {
                    accesstoken: `${email} ${token}`
                }
            })
                .then(res => res.json())
                .then((data) => {
                    const { acknowledged, deletedCount } = data
                    const { error } = data
                    if (acknowledged && deletedCount == 1) {
                        const newproductlist = product.filter((element) => {
                            return element._id !== id;
                        })
                        setProduct(newproductlist)
                        toast("Delete SuccessFull!!")
                    }
                    else if (error) {
                        toast(error)
                    }
                })
        }



    }
    return (
        <>
            <div class="container mt-5">
                <div class="section-heading text-center">
                    <h2>
                        Manage Inventory
                    </h2>
                </div>
                <div class="sidebar-find-car w-25 mx-auto my-2">
                            <div>
                                <button className='btn' onClick={() => navigate('/addproducts')}>Add New Car</button>
                            </div>
                        </div>
                <div class="row mt-5">
                    <div class="col-md-12 mx-auto p-2">
                       
                        <div className='table-responsive'>
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
                            <table class="table table-hover table-bordered  text-center">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        product.map((product) => {
                                            return <>
                                                <tr>
                                                    <td className='table-img d-flex align-items-center justify-content-center'><img src={product.img} alt="" srcset="" /></td>
                                                    <td>{product.name}</td>
                                                    <td>{product.price}</td>
                                                    <td>{product.quantity}</td>
                                                    <td>
                                                        <div className='action-btn-group'>
                                                            <button onClick={() => navigateToProductDetailsPage(product._id)} className='mb-2'>Details</button>
                                                            <button onClick={() => deleteCar(product._id)}>Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </>

                                        })
                                    }


                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default ManageInventory;