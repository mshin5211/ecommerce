import "./shopitem-module.css";
import { ShopContext } from "./shop-context";
import { useContext } from "react";

export default function ShopItem(props) {

  const { cart, addToCart } = useContext(ShopContext);
  //console.log(props);
  const cartItem = cart[props.product.id] || 0;
  return (
    <div id="--shop-item">
      <div id="--shop-item-header">
        <h2>{props.product.title}</h2>
        <p>{props.product.description}</p>
      </div>
      <div id="--shop-item-body">
        <img src={props.product.thumbnail} alt="Product" />
        <p>Price: ${props.product.price}</p>
        <p>Stock: {props.product.stock}</p>
        <button id="--shop-item-add" onClick={()=>addToCart(props.product.id)}>Add to Cart {cartItem > 0 && <> ({cartItem})</>}</button>
      </div>
    </div>
  );
}