import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header sticky-top">
            <div className="container-fluid header-inner d-flex flex-wrap align-items-center gap-3 px-3 px-lg-5 py-2">
                <div className="brand navbar-brand d-flex align-items-center gap-2 m-0 text-nowrap">
                    <img className="brand-mark" src={`${import.meta.env.BASE_URL}Logo.png`} alt="ShopKart logo" />
                    <h2 className="Logo mb-0">ShopKart</h2>
                </div>
                <label className="search-box input-group flex-grow-1">
                    <span className="input-group-text search-icon"><i className="fa-solid fa-magnifying-glass" aria-hidden="true" /></span>
                    <input className="form-control" type="search" placeholder="Search products..." aria-label="Search products" />
                </label>
                <nav className="Navbar nav nav-pills align-items-center ms-auto gap-1" aria-label="Main navigation">
                    <NavLink className="nav-link d-inline-flex align-items-center justify-content-center gap-2" to="/"><i className="fa-solid fa-house" aria-hidden="true" /><span>Home</span></NavLink>
                    <NavLink className="nav-link d-inline-flex align-items-center justify-content-center gap-2" to="/product"><i className="fa-solid fa-box" aria-hidden="true" /><span>Product</span></NavLink>
                    <NavLink className="nav-link d-inline-flex align-items-center justify-content-center gap-2" to="/category"><i className="fa-solid fa-layer-group" aria-hidden="true" /><span>Category</span></NavLink>
                    <NavLink className="nav-link d-inline-flex align-items-center justify-content-center gap-2" to="/account"><i className="fa-solid fa-user" aria-hidden="true" /><span>Account</span></NavLink>
                    <NavLink className="nav-link d-inline-flex align-items-center justify-content-center gap-2" to="/cart"><i className="fa-solid fa-cart-shopping" aria-hidden="true" /><span>Cart</span></NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;