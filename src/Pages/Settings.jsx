import { NavLink } from "react-router-dom";

export default function Settings() {
    return (
        <section className="account-page">
            <div className="container account-container">
                <div className="account-heading">
                    <div>
                        <p className="eyebrow">Your ShopKart space</p>
                        <h1>Settings</h1>
                        <p>Manage your account preferences and shopping experience.</p>
                    </div>
                    <NavLink className="account-shop-link" to="/account"><i className="fa-solid fa-arrow-left" aria-hidden="true" />Back to account</NavLink>
                </div>

                <div className="account-panel account-orders-panel">
                    <div className="account-panel-heading">
                        <div><h2>Account preferences</h2><p>Settings will be available here soon.</p></div>
                        <i className="fa-solid fa-gear account-empty-icon" aria-hidden="true" />
                    </div>
                </div>

                <div className="account-panel account-orders-panel mt-3">
                    <div className="account-panel-heading">
                        <div><h2>Theme Settings</h2><p>Choose your preferred theme mode.</p></div>
                        <i className="fa-solid fa-circle-half-stroke" aria-hidden="true" />
                    </div>
                    <div className="theme-select">
                        <label htmlFor="theme">Select Theme:</label>
                        <select id="theme">
                            <option value="system">System Default</option>
                            <option value="light">Light Mode</option>
                            <option value="dark">Dark Mode</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
}
