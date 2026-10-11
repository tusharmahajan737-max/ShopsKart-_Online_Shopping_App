import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Products_Card from '../Components/Products_Card';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [activeSlide, setActiveSlide] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [retry, setRetry] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        setError('');

        fetch('https://dummyjson.com/products?limit=30&select=id,title,price,category,thumbnail,rating,discountPercentage', {
            signal: controller.signal,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Products could not be loaded. Please try again.');
                }

                return response.json();
            })
            .then((data) => setProducts(data.products))
            .catch((fetchError) => {
                if (fetchError.name !== 'AbortError') {
                    setError(fetchError.message || 'Something went wrong while loading products.');
                }
            })
            .finally(() => {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            });

        return () => controller.abort();
    }, [retry]);

    const slides = products.slice(0, 5);
    const categories = [...new Set(products.map((product) => product.category))].slice(0, 8);
    const topPicks = [...products].sort((first, second) => second.rating - first.rating).slice(0, 12);
    const bestDeals = [...products].sort((first, second) => second.discountPercentage - first.discountPercentage).slice(0, 12);

    useEffect(() => {
        if (slides.length < 2) {
            return undefined;
        }

        const timer = window.setInterval(() => {
            setActiveSlide((current) => (current + 1) % slides.length);
        }, 5500);

        return () => window.clearInterval(timer);
    }, [slides.length]);

    const moveSlide = (direction) => {
        setActiveSlide((current) => (current + direction + slides.length) % slides.length);
    };

    const scrollShelf = (shelfId, direction) => {
        document.getElementById(shelfId)?.scrollBy({ left: direction * 520, behavior: 'smooth' });
    };

    const formatCategory = (category) =>
        category
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

    return (
        <main className="home-page container py-3 py-md-4">
            <nav className="home-categories" aria-label="Shop product categories">
                {categories.map((category) => (
                    <Link key={category} to="/category" className="home-category-link">
                        <span className="home-category-icon" aria-hidden="true">
                            <i className="fa-solid fa-bag-shopping" />
                        </span>
                        <span>{formatCategory(category)}</span>
                    </Link>
                ))}
                {loading && <span className="home-category-loading">Finding categories...</span>}
            </nav>

            {error && (
                <div className="home-error" role="alert">
                    <span>{error}</span>
                    <button className="btn btn-sm btn-outline-primary" onClick={() => setRetry((count) => count + 1)} type="button">
                        Try again
                    </button>
                </div>
            )}

            <section className="home-hero" aria-label="Featured offers" aria-roledescription="carousel">
                {slides.length > 0 ? (
                    <>
                        {slides.map((product, index) => (
                            <div
                                className={`home-hero-slide ${index === activeSlide ? 'is-active' : ''}`}
                                key={product.id}
                                aria-hidden={index !== activeSlide}>
                                <div className="home-hero-copy">
                                    <span className="home-hero-kicker">ShopKart special · {formatCategory(product.category)}</span>
                                    <h1>{product.title}</h1>
                                    <p>Fresh finds, standout prices. Make room for something you’ll love.</p>
                                    <div className="home-hero-offer">
                                        <strong>{Math.round(product.discountPercentage)}% off</strong>
                                        <span>Starting at Rs. {product.price}</span>
                                    </div>
                                    <Link className="home-hero-cta" to={`/show_product/${product.id}`}>
                                        Shop this deal <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                                    </Link>
                                </div>
                                <Link
                                    className="home-hero-art"
                                    to={`/show_product/${product.id}`}
                                    tabIndex={index === activeSlide ? 0 : -1}
                                    aria-label={`Shop ${product.title}`}>
                                    <img src={product.thumbnail} alt={product.title} />
                                </Link>
                            </div>
                        ))}
                        <div className="home-hero-controls">
                            <button className="home-carousel-arrow" onClick={() => moveSlide(-1)} type="button" aria-label="Previous offer">
                                <i className="fa-solid fa-chevron-left" aria-hidden="true" />
                            </button>
                            <div className="home-hero-dots" aria-label="Choose featured offer">
                                {slides.map((product, index) => (
                                    <button
                                        className={`home-hero-dot ${index === activeSlide ? 'is-active' : ''}`}
                                        key={product.id}
                                        onClick={() => setActiveSlide(index)}
                                        type="button"
                                        aria-label={`Show offer ${index + 1}`}
                                        aria-current={index === activeSlide ? 'true' : undefined}
                                    />
                                ))}
                            </div>
                            <button className="home-carousel-arrow" onClick={() => moveSlide(1)} type="button" aria-label="Next offer">
                                <i className="fa-solid fa-chevron-right" aria-hidden="true" />
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="home-hero-loading" aria-live="polite">
                        {loading ? 'Loading today’s finds...' : 'Featured offers will appear here.'}
                    </div>
                )}
            </section>

            <div className="home-promise-strip" aria-label="Shopping benefits">
                <span>
                    <i className="fa-solid fa-truck-fast" aria-hidden="true" /> Fast delivery
                </span>
                <span>
                    <i className="fa-solid fa-shield-halved" aria-hidden="true" /> Secure checkout
                </span>
                <span>
                    <i className="fa-solid fa-rotate-left" aria-hidden="true" /> Easy returns
                </span>
                <span>
                    <i className="fa-solid fa-tag" aria-hidden="true" /> Deals worth a look
                </span>
            </div>

            <ProductShelf
                title="Popular right now"
                subtitle="Top-rated picks from shoppers"
                products={topPicks}
                shelfId="popular-shelf"
                onScroll={scrollShelf}
                loading={loading}
            />
            <ProductShelf
                title="Big deals, good finds"
                subtitle="More to love for less"
                products={bestDeals}
                shelfId="deals-shelf"
                onScroll={scrollShelf}
                loading={loading}
            />
        </main>
    );
};

const ProductShelf = ({ title, subtitle, products, shelfId, onScroll, loading }) => (
    <section className="home-shelf">
        <div className="home-shelf-heading">
            <div>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
            <div className="home-shelf-actions">
                <Link to="/product" className="home-view-all">
                    View all <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
                <button
                    className="home-shelf-arrow"
                    onClick={() => onScroll(shelfId, -1)}
                    type="button"
                    aria-label={`Scroll ${title} left`}>
                    <i className="fa-solid fa-chevron-left" aria-hidden="true" />
                </button>
                <button
                    className="home-shelf-arrow"
                    onClick={() => onScroll(shelfId, 1)}
                    type="button"
                    aria-label={`Scroll ${title} right`}>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true" />
                </button>
            </div>
        </div>
        {loading ? (
            <div className="home-shelf-loading" aria-live="polite">
                Loading products...
            </div>
        ) : products.length > 0 ? (
            <div className="home-product-track" id={shelfId}>
                {products.map((product) => (
                    <Products_Card
                        key={`${shelfId}-${product.id}`}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.thumbnail}
                        category={product.category}
                    />
                ))}
            </div>
        ) : null}
    </section>
);

export default Home;
