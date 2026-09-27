import { Link } from "react-router-dom";

export default function Password_Help () {
    return (
        <>
            <section className="container my-5 password-help-page">
                <h1>Welcome to ShopKart Password_Helper Page</h1>
                <p>Discover the latest products and best deals for your shopping needs.</p>
                <Link to='/register'>Create account</Link>
            </section>
        </>
    );
}