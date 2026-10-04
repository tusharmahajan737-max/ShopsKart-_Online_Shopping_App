import { NavLink } from "react-router-dom";

const Account = () => {
    return (
        <section className="account-page">
            <div className="container-xl py-5">
                <div className="account-heading d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3 mb-4">
                    <div>
                        <p className="eyebrow">Your ShopKart space</p>
                        <h1>Account overview</h1>
                        <p>Manage your orders, saved items, and shopping preferences in one place.</p>
                    </div>
                    <div className="account-heading-actions d-grid d-sm-flex gap-2">
                        <NavLink className="account-settings-link" to="/settings">
                            <i className="fa-solid fa-gear" aria-hidden="true" />
                            Settings
                        </NavLink>
                        <NavLink className="account-shop-link" to="/product">
                            <i className="fa-solid fa-bag-shopping" aria-hidden="true" />
                            Continue shopping
                        </NavLink>
                    </div>
                </div>

                <div className="account-welcome d-flex align-items-center flex-wrap gap-3">
                    <div className="account-avatar" aria-hidden="true"><i className="fa-solid fa-user" /></div>
                    <div className="account-welcome-copy flex-grow-1">
                        <span className="account-welcome-label">Shopping made personal</span>
                        <h2>Welcome to your account</h2>
                        <p>Sign in to see your orders, track deliveries, and get a faster checkout.</p>
                    </div>
                    <NavLink className="account-action d-inline-flex align-items-center justify-content-center flex-grow-1 flex-md-grow-0 ms-md-auto" to="/register">Create account <i className="fa-solid fa-arrow-right" aria-hidden="true" /></NavLink>
                </div>

                <div className="account-section-heading d-flex align-items-baseline justify-content-between gap-3 mt-5 mb-3">
                    <h2>Quick access</h2>
                    <span>Everything you need, one tap away</span>
                </div>

                <div className="row g-3 account-shortcuts">
                    <div className="col-12 col-sm-6 col-lg-3">
                        <NavLink className="account-shortcut d-flex align-items-center gap-3 w-100 p-3" to="/your_order">
                            <span className="account-shortcut-icon account-icon-blue"><i className="fa-solid fa-box-open" aria-hidden="true" /></span>
                            <span className="flex-grow-1 d-grid gap-1"><strong>Your orders</strong><small>Track and manage purchases</small></span>
                            <i className="fa-solid fa-chevron-right account-chevron ms-auto" aria-hidden="true" />
                        </NavLink>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <NavLink className="account-shortcut d-flex align-items-center gap-3 w-100 p-3" to="/wishlist">
                            <span className="account-shortcut-icon account-icon-pink"><i className="fa-regular fa-heart" aria-hidden="true" /></span>
                            <span className="flex-grow-1 d-grid gap-1"><strong>Wishlist</strong><small>Save items for later</small></span>
                            <i className="fa-solid fa-chevron-right account-chevron ms-auto" aria-hidden="true" />
                        </NavLink>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <NavLink className="account-shortcut d-flex align-items-center gap-3 w-100 p-3" to="/user_address">
                            <span className="account-shortcut-icon account-icon-green"><i className="fa-solid fa-location-dot" aria-hidden="true" /></span>
                            <span className="flex-grow-1 d-grid gap-1"><strong>Saved addresses</strong><small>Speed up your checkout</small></span>
                            <i className="fa-solid fa-chevron-right account-chevron ms-auto" aria-hidden="true" />
                        </NavLink>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <NavLink className="account-shortcut d-flex align-items-center gap-3 w-100 p-3" to="/help_center">
                            <span className="account-shortcut-icon account-icon-orange"><i className="fa-solid fa-headset" aria-hidden="true" /></span>
                            <span className="flex-grow-1 d-grid gap-1"><strong>Help centre</strong><small>We are here to help</small></span>
                            <i className="fa-solid fa-chevron-right account-chevron ms-auto" aria-hidden="true" />
                        </NavLink>
                    </div>
                </div>

                <div className="row g-4 mt-4">
                    <div className="col-12 col-lg-7">
                        <div className="account-panel h-100 p-4">
                            <div className="account-panel-heading d-flex align-items-center justify-content-between gap-3 pb-3 border-bottom">
                                <div><h2>Recent orders</h2><p>Your latest shopping activity</p></div>
                                <NavLink className="link-primary fw-semibold text-decoration-none" to="/your_order">View all</NavLink>
                            </div>
                            <div className="account-empty-state d-flex align-items-center gap-3 pt-4">
                                <span className="account-empty-icon"><i className="fa-solid fa-receipt" aria-hidden="true" /></span>
                                <div className="flex-grow-1"><strong>No orders yet</strong><p>Your future purchases will appear here.</p></div>
                                <NavLink className="btn btn-sm btn-outline-primary" to="/product">Explore products</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="account-panel account-perks-panel h-100 p-4">
                            <span className="account-perks-icon"><i className="fa-solid fa-shield-heart" aria-hidden="true" /></span>
                            <h2 className="h5 mt-3">Shop with confidence</h2>
                            <p>Secure payments, reliable delivery, and support whenever you need it.</p>
                            <div className="account-perks-list d-grid gap-2 mt-3">
                                <span><i className="fa-solid fa-check" aria-hidden="true" /> Secure checkout</span>
                                <span><i className="fa-solid fa-check" aria-hidden="true" /> Easy order tracking</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Account;