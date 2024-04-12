import ShopItem from './shopitem';
import { useState, useEffect } from 'react';
import "./shop-module.css";
// import ShopData from './shopdata';
import SearchForm from './searchForm';

export default function Shop() {

    // const [productData, setProductData] = useState([]);
    
    // useEffect(() => {
    //     async function fetchData() {
    //         const data = await ShopData();
    //         setProductData(data);
    //     }
    //     fetchData();
    // }, []);
    const [productData, setProductData] = useState([]);
    const [categoriesData, setCategoriesData] = useState([]);
    const [formData, setFormData] = useState({});

    function getDefaultCategoriesData(categData) {
        console.log("adsfj");
        console.log(categData);
        const categories = {};
        for (let i = 0; i < categData.length; i++) {
            categories[categData[i]] = false;
        }
        categories["search"] = "";
        console.log("categories");
        console.log(categories);
        return categories;
    }

    function handleChange(event) {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        console.log(value);
        const name = event.target.name;
        console.log(name);
        
        setFormData(prevFormData => {
            const updatedFormData = {
                ...prevFormData,
                [name]: value
            };
            console.log("updatedFormData");
            console.log(updatedFormData);
            return updatedFormData;
        });
        console.log("formdata");
        console.log(formData);
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("//dummyjson.com/products");
            const data = await response.json();
            setProductData(data.products);
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchCategories() {
            const response = await fetch('https://dummyjson.com/products/categories')
            const data = await response.json();
            console.log(data);
            setCategoriesData(data);
            setFormData(getDefaultCategoriesData(data));
            console.log("set");
            console.log(formData);
        }
        fetchCategories();
    }, []);

    useEffect(() => {
        setFormData(getDefaultCategoriesData(categoriesData));
    }, [categoriesData]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://dummyjson.com/products/search?q=${formData.search}`);
            const data = await response.json();
            setProductData(data.products);
        }
        fetchData();
    }, [formData.search]);


    const products = productData.map((product) => {
        return <ShopItem key={product.id} product={product} />;
    });
    

    return (
        <div id="--shop">
        <div id="--shop-header">
            <h1>Shop</h1>
            <SearchForm categoriesData={categoriesData} formData={formData} handleChange={handleChange}/>
        </div>
        <div id="--shop-body">
            {products}
        </div>
        </div>
    );
}