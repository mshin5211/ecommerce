import { createContext } from 'react';
// import ShopData from './shopdata';
import { useState, useEffect } from 'react';

export const ShopContext = createContext(null);

export default function ShopContextProvider(props) {

    function getDefaultCart(productData) {
        console.log(productData);
        let cart = {};
        for (let i = 1; i < productData.length + 1; i++) {
            cart[i] = 0;
        }
        console.log(cart);
        return cart;
    }

    const [productData, setProductData] = useState([]);
   
    useEffect(() => {
        async function fetchData() {
            console.log("fetch");
            const response = await fetch("//dummyjson.com/products");
            const data = await response.json();
            setProductData(data.products);
        }
        fetchData();
    }, []);

    const [cart, setCart] = useState({});

    useEffect(() => {
        setCart(getDefaultCart(productData));
    }, [productData]);

    function addToCart(id) {
        console.log("add");
        setCart((prevCart) => {
            return { ...prevCart, [id]: prevCart[id] + 1 };
        });
    }

    function removeFromCart(id) {
        console.log("remove");
        setCart((prevCart) => {
            return { ...prevCart, [id]: prevCart[id] - 1 };
        });
    }

    function updateCart(id, quantity) {
        console.log("update");
        setCart((prevCart) => {
            return { ...prevCart, [id]: quantity };
        });
    }

    function getCartTotal() {
        let total = 0;
        for (const cartItem in cart) {
            if (cartItem > 0) {
                let itemInfo = productData.find((product) => product.id == Number(cartItem));
                total += itemInfo.price * cart[cartItem];
            }
        }
        return total;
    }

    function clearCart() {
        setCart(getDefaultCart(productData));
    }

    const contextValue = { cart, addToCart, removeFromCart, updateCart, getCartTotal, clearCart };
    console.log(cart);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}