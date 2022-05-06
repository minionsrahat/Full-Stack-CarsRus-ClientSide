import { useEffect, useState } from "react";

const useProdcuts=()=>{
    const [product, setProduct]=useState([]);
    useEffect(()=>{
        fetch('cardata.json')
        .then(res=>res.json())
        .then(data=> setProduct(data));
    },[])

     return [product, setProduct];

}
export default useProdcuts;