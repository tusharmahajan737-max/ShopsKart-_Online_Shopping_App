import { Link } from "react-router-dom";

const Product_Card = ({ id, title, price, image, category }) => {
    return (
        <div className="col d-flex">
            <div className="card product-card h-100 w-100">
                <Link to={`/show_product/${id}`} aria-label={`View ${title}`}>
                    <img className="card-img-top" src={image} alt={title} />
                </Link>
                <div className="card-body d-flex flex-column text-start">
                    <Link className="product-card-title-link" to={`/show_product/${id}`}>
                        <h2 className="card-title h6">{title}</h2>
                    </Link>
                    <p className="card-text fw-semibold">Rs. {price}</p>
                    <p className="card-text text-capitalize">{category}</p>
                    <div className="product-actions d-grid gap-2 mt-auto pt-3">
                        <button className="btn btn-sm add-to-cart d-inline-flex align-items-center justify-content-center gap-2" type="button">
                            <i className="fa-solid fa-cart-plus" aria-hidden="true" />Add to Cart
                        </button>
                        <button className="btn btn-sm buy-now d-inline-flex align-items-center justify-content-center gap-2" type="button">
                            <i className="fa-solid fa-bag-shopping" aria-hidden="true" />Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product_Card;