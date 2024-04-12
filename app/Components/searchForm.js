import React from "react";
import { useState, useEffect } from "react";

export default function SearchForm({categoriesData, formData, handleChange}) {
    //const [search, setSearch] = useState([""]);
    // const [categoriesData, setCategoriesData] = useState([]);
    // const [formData, setFormData] = useState({});

    // useEffect(() => {
    //     setFormData({
    //         search: "",
    //         categories: {}
    //     });
    // }, [categoriesData]);
    // useEffect(() => {
    //     setFormData(getDefaultCategoriesData(categoriesData));
    // }, [categoriesData]);
    
    // useEffect(() => {
    //     async function fetchCategories() {
    //         const response = await fetch('https://dummyjson.com/products/categories')
    //         const data = await response.json();
    //         console.log(data);
    //         setCategoriesData(data);
    //         setFormData(getDefaultCategoriesData(data));
    //         console.log("set");
    //         console.log(formData);
    //     }
    //     fetchCategories();
    // }, []);

    // useEffect(() => {
    //     console.log(formData);
    // }, [formData]);

    
    // function getDefaultCategoriesData(categData) {
    //     console.log("adsfj");
    //     console.log(categData);
    //     const categories = {};
    //     for (let i = 0; i < categData.length; i++) {
    //         categories[categData[i]] = false;
    //     }
    //     categories["search"] = "";
    //     console.log("categories");
    //     console.log(categories);
    //     return categories;
    // }


    const categories = categoriesData.map((categoryData) => {
        return (
            <div key={categoryData}>
                <input 
                    type="checkbox" 
                    id={categoryData} 
                    checked={formData.categoryData}
                    onChange={handleChange}
                    name={categoryData}
                />
                <label htmlFor={categoryData}>{categoryData}</label>
                <br />
            </div>
        );
    });

    return (
        <form>
            <label htmlFor="search">Search:</label>
            <input type="text" value={formData.search} onChange={handleChange} name="search"/>
            {/* {categories} */}
        </form>
    )
}