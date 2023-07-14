import { useEffect, useState } from "react";

const useProdcuts=(limit)=>{
    const [product, setProduct]=useState([]);
    let url;
    if(limit){
        url=`https://carsrus.onrender.com/readCarsData?limit=${limit}`
    }
    else{
        url=`https://carsrus.onrender.com/readCarsData`;
    }
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=> setProduct(data));
    },[])

     return [product, setProduct];

}
export default useProdcuts;