import { NavLink } from "react-router-dom";

const Order = () => {
    return(
        <section className="container my-5 home-page">
            <h1>Welcome to ShopKart Order Page</h1>
            <p>Discover the latest products and best deals for your shopping needs.</p><br />
            <NavLink to="/account">Go to Account</NavLink>
        </section>
    )
}

export default Order;