import React, { useRef } from 'react';

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
            supplier_name:'rahat'
        }
        e.preventDefault();
        fetch("http://localhost:5000/addCarsData", {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newCar)
           }).then(res => res.json())
            .then(({ acknowledged, insertedId }) => {
              if (acknowledged) {
                alert("Success")
              }
              else{
                alert("Error")
            }
            })
       
    }
    return (
        <>
            <div class="container mt-5">
                <div class="row mt-5">
                    <div class="col-md-8 mx-auto">
                        <div class="inventory-sidebar">
                            <div class="widget inventory-widget">
                                <div class="inv-widget-title mb-25">
                                    <h5 class="title text-center">Add New Car To Inventory</h5>
                                </div>
                                <form action="#"onSubmit={handleFormsubmit} class="sidebar-find-car">
                                    <div class="form-grp search-box">
                                        <input required ref={name} type="text" placeholder="Name" />
                                        <button><i class="fas fa-search"></i></button>
                                    </div>
                                    <div class="form-grp">
                                        <i class="flaticon-placeholder-1"></i>
                                        <input type="text" required ref={des} placeholder="Description" />
                                    </div>
                                    <div class="form-grp search-box">
                                        <input type="text" required ref={img} placeholder="Image Url" />
                                        <button><i class="fas fa-search"></i></button>
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