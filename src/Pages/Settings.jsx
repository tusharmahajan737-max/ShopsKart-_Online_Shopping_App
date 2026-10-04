import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemesContext } from "../Components/ThemesContext";

const Settings = () => {

    const { state, dispatch } = useContext(ThemesContext);

    const handleThemeChange = (e) => {
        dispatch({ type: "setTheme", payload: e.target.value });
    };

    const [notifications, setNotifications] = useState({
        orders: true,
        offers: true,
        recommendations: true,
        newsletters: false,
    });

    const toggleNotification = (type) => {
        setNotifications((current) => ({ ...current, [type]: !current[type] }));
    };

    return (
        <section className="account-page settings-page">
            <div className="container-lg py-5">
                <div className="account-heading d-flex flex-column flex-sm-row align-items-sm-end justify-content-between gap-3 mb-4">
                    <div>
                        <p className="eyebrow">Your ShopKart space</p>
                        <h1>Settings</h1>
                        <p>Manage your account preferences and shopping experience.</p>
                    </div>
                    <NavLink className="account-shop-link" to="/account">
                        <i className="fa-solid fa-arrow-left" aria-hidden="true" />Back to account
                    </NavLink>
                </div>

                <div className="account-panel settings-panel p-4 mb-3">
                    <div className="account-panel-heading d-flex align-items-center justify-content-between gap-3 pb-3">
                        <div>
                            <h2>Appearance</h2>
                            <p>Choose how ShopKart looks on this device.</p>
                        </div>
                        <i className="fa-solid fa-circle-half-stroke settings-panel-icon" aria-hidden="true" />
                    </div>
                    <div className="theme-select row align-items-center g-3 mt-3">
                        <label className="col-12 col-md-7 fw-semibold" htmlFor="theme">Color theme</label>
                        <div className="col-12 col-md-5">
                            <select id="theme" value={state} onChange={handleThemeChange} className="form-select theme-select-control">
                                <option value="light">Light mode</option>
                                <option value="dark">Dark mode</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="account-panel settings-panel p-4">
                    <div className="account-panel-heading d-flex align-items-center gap-3 pb-3">
                        <i className="fa-solid fa-bell settings-panel-icon" aria-hidden="true" />
                        <div>
                            <h2>Notifications</h2>
                            <p>Choose what you want to be notified about.</p>
                        </div>
                    </div>

                    <div className="settings-notification-list">
                        <div className="row align-items-center g-3 py-3 settings-notification-row border-bottom">
                            <div className="col-auto"><i className="fa-solid fa-box settings-notification-icon" aria-hidden="true" /></div>
                            <div className="col">
                                <label className="settings-notification-label d-grid gap-1" htmlFor="notify-orders">
                                    <span>Order Updates</span>
                                    <small>Get updates about your orders.</small>
                                </label>
                            </div>
                            <div className="col-auto">
                                <div className="form-check form-switch m-0">
                                    <input className="form-check-input" type="checkbox" role="switch" id="notify-orders" checked={notifications.orders} onChange={() => toggleNotification("orders")} />
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center g-3 py-3 settings-notification-row border-bottom">
                            <div className="col-auto"><i className="fa-solid fa-tag settings-notification-icon" aria-hidden="true" /></div>
                            <div className="col">
                                <label className="settings-notification-label d-grid gap-1" htmlFor="notify-offers">
                                    <span>Offers &amp; Discounts</span>
                                    <small>Receive special offers and deals.</small>
                                </label>
                            </div>
                            <div className="col-auto">
                                <div className="form-check form-switch m-0">
                                    <input className="form-check-input" type="checkbox" role="switch" id="notify-offers" checked={notifications.offers} onChange={() => toggleNotification("offers")} />
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center g-3 py-3 settings-notification-row border-bottom">
                            <div className="col-auto"><i className="fa-solid fa-star settings-notification-icon" aria-hidden="true" /></div>
                            <div className="col">
                                <label className="settings-notification-label d-grid gap-1" htmlFor="notify-recommendations">
                                    <span>Product Recommendations</span>
                                    <small>Get personalized product suggestions.</small>
                                </label>
                            </div>
                            <div className="col-auto">
                                <div className="form-check form-switch m-0">
                                    <input className="form-check-input" type="checkbox" role="switch" id="notify-recommendations" checked={notifications.recommendations} onChange={() => toggleNotification("recommendations")} />
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center g-3 py-3 settings-notification-row">
                            <div className="col-auto"><i className="fa-solid fa-envelope settings-notification-icon" aria-hidden="true" /></div>
                            <div className="col">
                                <label className="settings-notification-label d-grid gap-1" htmlFor="notify-newsletters">
                                    <span>Newsletters</span>
                                    <small>Get the latest trends, deals, and more.</small>
                                </label>
                            </div>
                            <div className="col-auto">
                                <div className="form-check form-switch m-0">
                                    <input className="form-check-input" type="checkbox" role="switch" id="notify-newsletters" checked={notifications.newsletters} onChange={() => toggleNotification("newsletters")} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Settings;