import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemesContext } from "../Components/ThemesContext";

const Settings = () => {
    
    const { state, dispatch } = useContext(ThemesContext);

    const handleThemeChange = (e) => {
        dispatch({ type: "setTheme", payload: e.target.value });
    };

    return (
        <section className="account-page settings-page">
            <div className="container account-container">
                <div className="account-heading">
                    <div>
                        <p className="eyebrow">Your ShopKart space</p>
                        <h1>Settings</h1>
                        <p>Manage your account preferences and shopping experience.</p>
                    </div>
                    <NavLink className="account-shop-link" to="/account">
                        <i className="fa-solid fa-arrow-left" aria-hidden="true" />Back to account
                    </NavLink>
                </div>

                <div className="account-panel settings-panel">
                    <div className="account-panel-heading">
                        <div>
                            <h2>Appearance</h2>
                            <p>Choose how ShopKart looks on this device.</p>
                        </div>
                        <i className="fa-solid fa-circle-half-stroke" aria-hidden="true" />
                    </div>
                    <div className="theme-select">
                        <label htmlFor="theme">Color theme</label>
                        <div className="theme-select-control-wrap">
                            <select id="theme" value={state} onChange={handleThemeChange} className="theme-select-control">
                                <option value="light">Light mode</option>
                                <option value="dark">Dark mode</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Settings;