import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const Product_Card = ({ id, title, price, image, category }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id,
            title,
            price,
        });
    };

    return (
        <div className="col d-flex">
            <article className="card product-card h-100 w-100">
                <Link className="product-card-media" to={`/show_product/${id}`} aria-label={`View ${title}`}>
                    <img className="product-card-image" src={image} alt={title} loading="lazy" />
                    <span className="product-card-category text-capitalize">{category}</span>
                </Link>
                <div className="card-body d-flex flex-column text-start">
                    <Link className="product-card-title-link" to={`/show_product/${id}`}>
                        <h2 className="product-card-title">{title}</h2>
                    </Link>
                    <p className="product-card-price mb-0">Rs. {price}</p>
                    <div className="product-actions d-grid gap-2 mt-auto pt-3">
                        <button
                            className="btn btn-sm add-to-cart d-inline-flex align-items-center justify-content-center gap-2"
                            type="button"
                            onClick={handleAddToCart}>
                            <i className="fa-solid fa-cart-plus" aria-hidden="true" />
                            Add to Cart
                        </button>
                        <Link className="btn btn-sm product-details-link" to={`/show_product/${id}`}>
                            View details
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Product_Card;
