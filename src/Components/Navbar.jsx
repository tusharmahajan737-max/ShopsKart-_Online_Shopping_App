import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="header">
            <div className="brand">
                <img className="brand-mark" src="/Logo.png" alt="ShopKart logo" />
                <h2 className="Logo">ShopKart</h2>
            </div>
            <label className="search-box">
                <i className="fa-solid fa-magnifying-glass search-icon" aria-hidden="true"></i>
                <input type="search" placeholder="Search products..." aria-label="Search products" />
            </label>
            <nav className="Navbar" aria-label="Main navigation">
                <NavLink to="/"><i className="fa-solid fa-house" aria-hidden="true"></i><span>Home</span></NavLink>
                <NavLink to="/product"><i className="fa-solid fa-box" aria-hidden="true"></i><span>Product</span></NavLink>
                <NavLink to="/category"><i className="fa-solid fa-layer-group" aria-hidden="true"></i><span>Category</span></NavLink>
                <NavLink to="/account"><i className="fa-solid fa-user" aria-hidden="true"></i><span>Account</span></NavLink>
                <NavLink to="/cart"><i className="fa-solid fa-cart-shopping" aria-hidden="true"></i><span>Cart</span></NavLink>
            </nav>
        </header>
    );
}