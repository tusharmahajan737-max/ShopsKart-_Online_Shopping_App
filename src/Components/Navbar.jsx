import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header">
            <div className="brand">
                <img className="brand-mark" src={`${import.meta.env.BASE_URL}Logo.png`} alt="ShopKart logo" />
                <h2 className="Logo">ShopKart</h2>
            </div>
            <label className="search-box">
                <i className="fa-solid fa-magnifying-glass search-icon" aria-hidden="true" ></i>
                <input type="search" placeholder="Search products..." aria-label="Search products" />
            </label>
            <nav className="Navbar" aria-label="Main navigation">
                <NavLink to="/"><i className="fa-solid fa-house"></i><span>Home</span></NavLink>
                <NavLink to="/product"><i className="fa-solid fa-box"></i> <span>Product</span></NavLink>
                <NavLink to="/category"><i className="fa-solid fa-layer-group"></i><span>Category</span></NavLink>
                <NavLink to="/account"><i className="fa-solid fa-user"></i><span>Account</span></NavLink>
                <NavLink to="/cart"><i className="fa-solid fa-cart-shopping"></i><span>Cart</span></NavLink>
            </nav>
        </header>
    );
}

export default Navbar;