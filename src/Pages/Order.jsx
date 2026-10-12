import { NavLink } from 'react-router-dom';

const Order = () => {
    return (
        <section className="container py-4 py-md-5">
            <div className="card theme-card shadow-sm">
                <div className="card-body p-4 p-lg-5">
                    <NavLink className="btn btn-outline-primary d-inline-flex align-items-center gap-2 mb-4" to="/account">
                        <i className="fa-solid fa-arrow-left" aria-hidden="true" />
                        Back to account
                    </NavLink>
                    <h1 className="h2 mb-3">Welcome to ShopKart Order Page</h1>
                    <p className="text-body-secondary mb-0">Discover the latest products and best deals for your shopping needs.</p>
                </div>
            </div>
        </section>
    );
};

export default Order;
