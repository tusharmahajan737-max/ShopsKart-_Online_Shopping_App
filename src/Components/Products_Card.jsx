export default function Product_Card ({ title, price, image, category }) {
    return (
        <div className="product-card-container">
            <div className="card product-card">
                <img className="card-img-top" src={image} alt="product" />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
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