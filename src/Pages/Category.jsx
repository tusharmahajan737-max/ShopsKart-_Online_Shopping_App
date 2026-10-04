import { useEffect, useState } from 'react'
import Products_Card from '../Components/Products_Card'

const Category = () => {
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [products, setProducts] = useState([])
    const [loadingCategories, setLoadingCategories] = useState(true)
    const [loadingProducts, setLoadingProducts] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Could not load categories.')
                }

                return response.json()
            })
            .then((data) => {
                setCategories(data)
                if (data.length > 0) {
                    setSelectedCategory(data[0])
                }
            })
            .catch((fetchError) => setError(fetchError.message))
            .finally(() => setLoadingCategories(false))
    }, [])

    useEffect(() => {
        if (selectedCategory === '') {
            return
        }

        setProducts([])
        setError('')
        setLoadingProducts(true)

        fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Could not load products.')
                }

                return response.json()
            })
            .then((data) => setProducts(data.products))
            .catch((fetchError) => setError(fetchError.message))
            .finally(() => setLoadingProducts(false))
    }, [selectedCategory])

    const formatCategory = (category) => {
        return category
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    }

    if (loadingCategories) {
        return <main className="container py-4"><p className="alert alert-info mb-0">Loading categories...</p></main>
    }

    return (
        <main className="container py-4">
            <div className="border-bottom pb-3">
                <h1 className="h2 mb-1">Shop by category</h1>
                <p className="text-body-secondary mb-0">Choose a category to find the products you need.</p>
            </div>

            {error && <p className="alert alert-danger mt-3">{error}</p>}

            {categories.length > 0 && (
                <>
                    <nav className="nav nav-pills flex-nowrap gap-2 overflow-x-auto border-bottom py-3" aria-label="Product categories">
                        {categories.map((category) => (
                            <button
                                className={`btn btn-sm rounded-pill flex-shrink-0 ${selectedCategory === category ? 'btn-primary' : 'btn-outline-secondary'}`}
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                type="button"
                                aria-pressed={selectedCategory === category}
                            >
                                {formatCategory(category)}
                            </button>
                        ))}
                    </nav>

                    <section className="mt-4" aria-live="polite">
                        <div className="d-flex flex-wrap gap-2 align-items-baseline justify-content-between">
                            <h2 className="h4 mb-0">{formatCategory(selectedCategory)}</h2>
                            {!loadingProducts && !error && (
                                <p className="small text-body-secondary mb-0">{products.length} products</p>
                            )}
                        </div>

                        {loadingProducts && <p className="alert alert-info mt-3">Loading products...</p>}

                        {!loadingProducts && !error && products.length === 0 && (
                            <p className="alert alert-secondary mt-3">No products found in this category.</p>
                        )}

                        {!loadingProducts && products.length > 0 && (
                            <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3 g-lg-4 mt-1 justify-content-center">
                                {products.map((product) => (
                                    <Products_Card
                                        key={product.id}
                                        id={product.id}
                                        title={product.title}
                                        price={product.price}
                                        image={product.thumbnail}
                                        category={product.category}
                                    />
                                ))}
                            </div>
                        )}
                    </section>
                </>
            )}
        </main>
    );
}

export default Category;