import React from "react";
import { useState, useEffect, useContext } from "react";
import { ShopContext } from "./shop-context";
import CartItem from "./cartitem";
import { useNavigate } from "react-router-dom";

export default function Cart() {

    const { cart, getCartTotal, clearCart } = useContext(ShopContext);
    const [productData, setProductData] = useState([]);
    const total = getCartTotal();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("//dummyjson.com/products");
            const data = await response.json();
            setProductData(data.products);
        }
        fetchData();
    }, []);

    return (
        <div id="--cart">
            <div id="--cart-header">
                <h1>Cart Items</h1>
            </div>
            {total > 0 ? (
            <div id="--cart-body">
                {productData.map((product) => {
                    if (cart[product.id] > 0) {
                        return <CartItem key={product.id} product={product} />
                    }
                })}
                <p>Total: ${total}</p>
                <button id="--cart-clear-button" onClick={clearCart}>Clear Cart</button>
                <button id="--cart-continue-shopping" onClick={() => navigate('/shop')}>Continue Shopping</button>
                <button id="--cart-checkout-button">Checkout</button>
            </div>
            ) : (
                <div id="--cart-empty">
                    <p>Your cart is empty.</p>
                    <button id="--cart-empty-continue-shopping" onClick={() => navigate('/shop')}>Continue Shopping</button>
                </div>
            )}
            <div id="--cart-checkout">
                
            </div>
        </div>
    );
}