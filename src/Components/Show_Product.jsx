import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../Styles/Show_Product.css'

const Show_Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        setProduct(null)
        setError('')

        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Product not found')
                }

                return response.json()
            })
            .then((data) => setProduct(data))
            .catch((fetchError) => setError(fetchError.message))
    }, [id])

    if (error) {
        return (
            <main className="product-detail-state">
                <p>{error}</p>
                <Link to="/product">Back to products</Link>
            </main>
        )
    }

    if (product === null) {
        return <main className="product-detail-state">Loading product...</main>
    }

    return (
        <main className="product-detail-page">
            <nav className="product-breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <Link to="/product">Products</Link>
                <span>/</span>
                <span>{product.category}</span>
            </nav>

            <div className="product-detail-layout">
                <section className="product-gallery" aria-label="Product images">
                    <div className="product-main-image">
                        <img src={product.thumbnail} alt={product.title} />
                    </div>
                </section>

                <section className="product-information">
                    <p className="product-category-label">{product.category}</p>
                    <h1>{product.title}</h1>

                    <div className="product-price-block">
                        <strong>₹{product.price}</strong>
                    </div>

                    <p className="product-rating">
                        <span>{product.rating} ★</span>
                    </p>

                    <p className="product-description">{product.description}</p>

                    <div className="product-delivery">
                        <strong>Delivery details</strong>
                        <p>{product.shippingInformation}</p>
                        <p>{product.availabilityStatus}</p>
                    </div>

                    <div className="product-highlights">
                        <h2>Product details</h2>
                        <dl>
                            <dt>Brand</dt>
                            <dd>{product.brand}</dd>
                            <dt>Category</dt>
                            <dd>{product.category}</dd>
                        </dl>
                    </div>

                    <div className="product-detail-actions">
                        <button type="button">Add to cart</button>
                        <Link to="/cart">Go to cart</Link>
                    </div>
                    <Link className="back-to-products" to="/product">Back to products</Link>
                </section>
            </div>
        </main>
    )
}

export default Show_Product