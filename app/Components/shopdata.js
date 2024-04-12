
import { useState, useEffect } from "react";

export default function ShopData() {
    const [productData, setProductData] = useState([]);
   
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("//dummyjson.com/products");
            const data = await response.json();
            setProductData(data.products);
        }
        fetchData();
    }, []);
    
    
    return productData;
}