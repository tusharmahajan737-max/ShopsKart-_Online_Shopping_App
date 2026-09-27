import { NavLink } from "react-router-dom";

export default function Account () {
    return (
        <section className="account-page">
            <div className="container account-container">
                <div className="account-heading">
                    <div>
                        <p className="eyebrow">Your ShopKart space</p>
                        <h1>Account overview</h1>
                        <p>Manage your orders, saved items, and shopping preferences in one place.</p>
                    </div>
                    <div className="account-heading-actions">
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

                <div className="account-welcome">
                    <div className="account-avatar" aria-hidden="true"><i className="fa-solid fa-user" /></div>
                    <div className="account-welcome-copy">
                        <span className="account-welcome-label">Shopping made personal</span>
                        <h2>Welcome to your account</h2>
                        <p>Sign in to see your orders, track deliveries, and get a faster checkout.</p>
                    </div>
                    <NavLink className="account-action" to="/register">Create account <i className="fa-solid fa-arrow-right" aria-hidden="true" /></NavLink>
                </div>

                <div className="account-section-heading">
                    <h2>Quick access</h2>
                    <span>Everything you need, one tap away</span>
                </div>

                <div className="row g-3 account-shortcuts">
                    <div className="col-12 col-sm-6 col-lg-3">
                        <NavLink className="account-shortcut" to="/cart">
                            <span className="account-shortcut-icon account-icon-blue"><i className="fa-solid fa-box-open" aria-hidden="true" /></span>
                            <span><strong>Your orders</strong><small>Track and manage purchases</small></span>
                            <i className="fa-solid fa-chevron-right account-chevron" aria-hidden="true" />
                        </NavLink>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <NavLink className="account-shortcut" to="/cart">
                            <span className="account-shortcut-icon account-icon-pink"><i className="fa-regular fa-heart" aria-hidden="true" /></span>
                            <span><strong>Wishlist</strong><small>Save items for later</small></span>
                            <i className="fa-solid fa-chevron-right account-chevron" aria-hidden="true" />
                        </NavLink>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <NavLink className="account-shortcut" to="/cart">
                            <span className="account-shortcut-icon account-icon-green"><i className="fa-solid fa-location-dot" aria-hidden="true" /></span>
                            <span><strong>Saved addresses</strong><small>Speed up your checkout</small></span>
                            <i className="fa-solid fa-chevron-right account-chevron" aria-hidden="true" />
                        </NavLink>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <a className="account-shortcut" href="mailto:hello@shopkart.example">
                            <span className="account-shortcut-icon account-icon-orange"><i className="fa-solid fa-headset" aria-hidden="true" /></span>
                            <span><strong>Help centre</strong><small>We are here to help</small></span>
                            <i className="fa-solid fa-chevron-right account-chevron" aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <div className="row g-4 account-lower-grid">
                    <div className="col-12 col-lg-7">
                        <div className="account-panel account-orders-panel">
                            <div className="account-panel-heading">
                                <div><h2>Recent orders</h2><p>Your latest shopping activity</p></div>
                                <NavLink to="/cart">View all</NavLink>
                            </div>
                            <div className="account-empty-state">
                                <span className="account-empty-icon"><i className="fa-solid fa-receipt" aria-hidden="true" /></span>
                                <div><strong>No orders yet</strong><p>Your future purchases will appear here.</p></div>
                                <NavLink className="account-outline-action" to="/product">Explore products</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="account-panel account-perks-panel">
                            <span className="account-perks-icon"><i className="fa-solid fa-shield-heart" aria-hidden="true" /></span>
                            <h2>Shop with confidence</h2>
                            <p>Secure payments, reliable delivery, and support whenever you need it.</p>
                            <div className="account-perks-list">
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