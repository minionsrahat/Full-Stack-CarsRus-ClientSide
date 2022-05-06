import { useEffect, useState } from "react";

const useProdcuts=(limit)=>{
    const [product, setProduct]=useState([]);
    let url;
    if(limit){
        url=`http://localhost:5000/readCarsData?limit=${limit}`
    }
    else{
        url=`http://localhost:5000/readCarsData`;
    }
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=> setProduct(data));
    },[])

     return [product, setProduct];

}
export default useProdcuts;