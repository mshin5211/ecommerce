import { NavLink } from 'react-router-dom';
import './shopnav-module.css';

export default function ShopNav() {



    return (
        <nav id="--shop-nav">
            <ul id="--shop-nav-list">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/shop">Shop</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">Cart</NavLink>
                </li>
            </ul>
        </nav>
    )
}