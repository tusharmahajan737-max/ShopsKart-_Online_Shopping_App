import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Show_Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        setProduct(null);
        setError('');

        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Product not found');
                }

                return response.json();
            })
            .then((data) => setProduct(data))
            .catch((fetchError) => setError(fetchError.message));
    }, [id]);

    if (error) {
        return (
            <main className="container my-5 text-center">
                <p className="alert alert-danger">{error}</p>
                <Link className="btn btn-primary" to="/product">
                    Back to products
                </Link>
            </main>
        );
    }

    if (product === null) {
        return (
            <main className="container my-5">
                <p className="alert alert-info">Loading product...</p>
            </main>
        );
    }

    return (
        <main className="container product-detail-page my-4 my-lg-5">
            <nav aria-label="Breadcrumb">
                <ol className="breadcrumb small">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/product">Products</Link>
                    </li>
                    <li className="breadcrumb-item active text-capitalize" aria-current="page">
                        {product.category}
                    </li>
                </ol>
            </nav>

            <div className="row g-4 g-lg-5 align-items-start">
                <section className="col-12 col-lg-7" aria-label="Product images">
                    <div className="product-main-image rounded bg-white p-4 d-flex align-items-center justify-content-center">
                        <img className="img-fluid" src={product.thumbnail} alt={product.title} />
                    </div>
                </section>

                <section className="col-12 col-lg-5 product-information">
                    <p className="small fw-semibold text-body-secondary text-uppercase mb-2">{product.category}</p>
                    <h1 className="h2 mb-3">{product.title}</h1>

                    <div className="d-flex flex-wrap align-items-baseline gap-2 mb-3">
                        <strong className="h3 mb-0">₹{product.price}</strong>
                    </div>

                    <p className="d-flex align-items-center gap-2 text-body-secondary mb-4">
                        <span className="badge text-bg-success">{product.rating} ★</span>
                    </p>

                    <p className="text-body-secondary lh-lg">{product.description}</p>

                    <div className="border-top py-3">
                        <strong>Delivery details</strong>
                        <p className="text-body-secondary mt-2 mb-1">{product.shippingInformation}</p>
                        <p className="text-body-secondary mb-0">{product.availabilityStatus}</p>
                    </div>

                    <div className="border-top py-3">
                        <h2 className="h5 mb-3">Product details</h2>
                        <dl className="row gy-2 mb-0">
                            <dt className="col-4 text-body-secondary fw-normal">Brand</dt>
                            <dd className="col-8 mb-0">{product.brand}</dd>
                            <dt className="col-4 text-body-secondary fw-normal">Category</dt>
                            <dd className="col-8 mb-0 text-capitalize">{product.category}</dd>
                        </dl>
                    </div>

                    <div className="d-grid d-sm-flex gap-2 my-3">
                        <button className="btn btn-primary flex-fill" type="button">
                            Add to Cart
                        </button>
                        <button className="btn btn-outline-primary flex-fill" type="button">
                            Buy Now
                        </button>
                    </div>
                    <Link className="link-primary text-decoration-none" to="/product">
                        Back to products
                    </Link>
                </section>
            </div>
        </main>
    );
};

export default Show_Product;
