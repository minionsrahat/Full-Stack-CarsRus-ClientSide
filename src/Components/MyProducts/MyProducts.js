import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase';

const MyProducts = () => {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const email = user?.email

    useEffect(() => {
        fetch(`http://localhost:5000/readmyCarsData?email=${email}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

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
                .then(({ acknowledged, deletedCount }) => {
                    if (acknowledged && deletedCount == 1) {
                        const newproductlist = product.filter((element) => {
                            return element._id !== id;
                        })
                        setProduct(newproductlist)
                    }
                    else {
                        alert("Error")
                    }
                })
        }
    }


    return (
        <div class="container my-5">
            <div class="section-heading text-center">
                <h2>
                    My Products
                </h2>
            </div>
            <div class="sidebar-find-car w-25 mx-auto my-2">
                <div>
                    <button className='btn' onClick={() => navigate('/addproducts')}>Add New Car</button>
                </div>
            </div>
            <div class="row my-5">
                <div class="col-md-12 mx-auto p-2">
                    <div className='table-responsive'>
                        {product.length > 0 ? <>
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
                        </> : <>
                            <h3 className='text-center my-5'>Sorry Your Inventory is Empty</h3>
                        </>}

                    </div>

                </div>

            </div>
        </div>
    );
};

export default MyProducts;