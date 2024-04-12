import React from "react";
import "./cartitem-module.css";
import { ShopContext } from "./shop-context";
import { useContext } from "react";

export default function CartItem(props) {

    const { cart, addToCart, removeFromCart, updateCart } = useContext(ShopContext);

    return (
        <div id="--cart-item">
            <div id="--cart-item-image">
                <img src={props.product.thumbnail} alt={props.product.title} />
            </div>
            <div id="--cart-item-details">
                <h3>{props.product.title}</h3>
                <p>{props.product.description}</p>
                <p>${props.product.price}</p>
            </div>
            <div id="--cart-item-quantity">
                <button onClick={() => removeFromCart(props.product.id)}>-</button>
                <input 
                    value={cart[props.product.id]} 
                    onChange={(e) => {
                        updateCart(props.product.id, Number(e.target.value));
                    }}
                    onFocus={(e) => e.target.select()}
                />
                <button onClick={() => addToCart(props.product.id)}>+</button>
            </div>
        </div>
    )
}