import { Link } from "react-router-dom";

const Product_Card = ({ id, title, price, image, category }) => {
    return (
        <div className="product-card-container">
            <div className="card product-card">
                <Link to={`/show_product/${id}`} aria-label={`View ${title}`}>
                    <img className="card-img-top" src={image} alt={title} />
                </Link>
                <div className="card-body">
                    <Link className="product-card-title-link" to={`/show_product/${id}`}>
                        <h4 className="card-title">{title}</h4>
                    </Link>
                    <p className="card-text">Rs. {price}</p>
                    <p className="card-text">{category}</p>
                    <div className="product-actions">
                        <button className="add-to-cart" type="button">Add to Cart</button>
                        <button className="buy-now" type="button">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product_Card;