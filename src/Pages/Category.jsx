import { useEffect, useState } from 'react'
import Products_Card from '../Components/Products_Card'
import '../Styles/Category.css'

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
        return <main className="category-browser">Loading categories...</main>
    }

    return (
        <main className="category-browser">
            <div className="category-heading">
                <h1>Shop by category</h1>
                <p>Choose a category to find the products you need.</p>
            </div>

            {error && <p className="category-message">{error}</p>}

            {categories.length > 0 && (
                <>
                    <nav className="category-tabs" aria-label="Product categories">
                        {categories.map((category) => (
                            <button
                                className={selectedCategory === category ? 'selected' : ''}
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                type="button"
                                aria-pressed={selectedCategory === category}
                            >
                                {formatCategory(category)}
                            </button>
                        ))}
                    </nav>

                    <section className="category-results" aria-live="polite">
                        <div className="category-results-heading">
                            <h2>{formatCategory(selectedCategory)}</h2>
                            {!loadingProducts && !error && (
                                <p>{products.length} products</p>
                            )}
                        </div>

                        {loadingProducts && <p className="category-message">Loading products...</p>}

                        {!loadingProducts && !error && products.length === 0 && (
                            <p className="category-message">No products found in this category.</p>
                        )}

                        {!loadingProducts && products.length > 0 && (
                            <div className="Products category-products">
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