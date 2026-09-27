import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-container">
                <div className="row gy-5 gx-lg-5">
                    <div className="col-12 col-lg-4">
                        <Link className="footer-brand" to="/">
                            <span className="footer-brand-mark"><i className="fa-solid fa-bag-shopping" aria-hidden="true"></i></span>
                            <span>ShopKart</span>
                        </Link>
                        <p className="footer-intro">Everyday essentials, thoughtfully chosen and delivered with care.</p>
                        <div className="footer-socials" aria-label="Social media links">
                            <a href="mailto:hello@shopkart.example" aria-label="Email ShopKart"><i className="fa-solid fa-envelope" aria-hidden="true"></i></a>
                            <a href="tel:+18005550199" aria-label="Call ShopKart"><i className="fa-solid fa-phone" aria-hidden="true"></i></a>
                            <a href="/" aria-label="ShopKart on Instagram"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a>
                            <a href="/" aria-label="ShopKart on Facebook"><i className="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
                        </div>
                    </div>

                    <div className="col-6 col-sm-4 col-lg-2">
                        <h2 className="footer-heading">Explore</h2>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/product">Products</Link></li>
                            <li><Link to="/category">Categories</Link></li>
                        </ul>
                    </div>

                    <div className="col-6 col-sm-4 col-lg-2">
                        <h2 className="footer-heading">Account</h2>
                        <ul className="footer-links">
                            <li><Link to="/account">My account</Link></li>
                            <li><Link to="/cart">Shopping cart</Link></li>
                            <li><Link to="/register">Create account</Link></li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-4 col-lg-4">
                        <h2 className="footer-heading">Need a hand?</h2>
                        <p className="footer-copy">Our support team is here Monday to Friday, 9:00 AM to 6:00 PM.</p>
                        <a className="footer-contact" href="mailto:hello@shopkart.example">hello@shopkart.example <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 ShopKart. All rights reserved.</p>
                    <div className="footer-legal">
                        <Link to="/">Privacy</Link>
                        <Link to="/">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}