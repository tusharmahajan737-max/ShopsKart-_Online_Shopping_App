import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const formatPrice = (amount) =>
    new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    }).format(amount);

const formatDate = (date) =>
    new Intl.DateTimeFormat('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(new Date(date));

const Order = () => {
    const { orders, cancelOrder, removeOrder } = useCart();
    const location = useLocation();
    const placedOrderId = location.state?.placedOrderId;

    const handleCancelOrder = (orderId) => {
        if (window.confirm(`Cancel order ${orderId}?`)) {
            cancelOrder(orderId);
        }
    };

    const handleRemoveOrder = (orderId) => {
        if (window.confirm(`Remove order ${orderId} from your history? This cannot be undone.`)) {
            removeOrder(orderId);
        }
    };

    return (
        <section className="orders-page container py-4 py-lg-5">
            <div className="orders-heading d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3 mb-4">
                <div>
                    <p className="orders-eyebrow mb-2">Your ShopKart account</p>
                    <h1 className="mb-2">Your orders</h1>
                    <p className="text-body-secondary mb-0">Track your purchases and keep their details close.</p>
                </div>
                <Link className="btn btn-outline-primary d-inline-flex align-items-center justify-content-center gap-2" to="/product">
                    <i className="fa-solid fa-bag-shopping" aria-hidden="true" />
                    Continue shopping
                </Link>
            </div>

            {placedOrderId && orders.some((order) => order.id === placedOrderId) && (
                <div className="alert alert-success d-flex align-items-center gap-2" role="status">
                    <i className="fa-solid fa-circle-check" aria-hidden="true" />
                    Order placed successfully. We are preparing your items.
                </div>
            )}

            {orders.length === 0 ? (
                <div className="orders-empty-state text-center px-3 py-5">
                    <span className="orders-empty-icon" aria-hidden="true">
                        <i className="fa-solid fa-box-open" />
                    </span>
                    <h2 className="h4 mt-3 mb-2">No orders yet</h2>
                    <p className="text-body-secondary mb-4">When you place an order, its status and details will show up here.</p>
                    <Link className="btn btn-primary d-inline-flex align-items-center gap-2" to="/product">
                        Explore products <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                    </Link>
                </div>
            ) : (
                <div className="orders-list d-grid gap-3">
                    {orders.map((order) => {
                        const itemCount = order.items.reduce((count, item) => count + item.quantity, 0);

                        return (
                            <article className="order-card" key={order.id}>
                                <header className="order-card-header d-flex flex-column flex-md-row justify-content-between gap-3">
                                    <div className="d-flex flex-wrap gap-4">
                                        <div>
                                            <span className="order-meta-label">Order placed</span>
                                            <strong>{formatDate(order.createdAt)}</strong>
                                        </div>
                                        <div>
                                            <span className="order-meta-label">Order number</span>
                                            <strong>{order.id}</strong>
                                        </div>
                                    </div>
                                    <div className="order-header-actions d-flex flex-wrap align-items-center gap-2 align-self-start">
                                        <span
                                            className={`order-status-dot ${order.status === 'Cancelled' ? 'is-cancelled' : ''}`}
                                            aria-hidden="true"
                                        />
                                        <span className={`order-status ${order.status === 'Cancelled' ? 'is-cancelled' : ''}`}>
                                            {order.status}
                                        </span>
                                        {order.status === 'Processing' && (
                                            <button
                                                className="btn btn-sm btn-outline-danger"
                                                type="button"
                                                onClick={() => handleCancelOrder(order.id)}>
                                                <i className="fa-solid fa-ban me-1" aria-hidden="true" />
                                                Cancel
                                            </button>
                                        )}
                                        <button
                                            className="btn btn-sm btn-outline-secondary"
                                            type="button"
                                            onClick={() => handleRemoveOrder(order.id)}>
                                            <i className="fa-solid fa-trash-can me-1" aria-hidden="true" />
                                            Remove
                                        </button>
                                    </div>
                                </header>

                                <div className="order-card-body">
                                    <div className="d-flex flex-column flex-sm-row justify-content-between gap-3 mb-3">
                                        <div>
                                            <h2 className="h5 mb-1">
                                                {itemCount} {itemCount === 1 ? 'item' : 'items'}
                                            </h2>
                                            <p className="text-body-secondary small mb-0">
                                                Delivery updates will appear as your order moves along.
                                            </p>
                                        </div>
                                        <div className="order-total text-sm-end">
                                            <span className="order-meta-label">Order total</span>
                                            <strong>{formatPrice(order.total)}</strong>
                                        </div>
                                    </div>

                                    <ul className="order-item-list list-unstyled mb-0">
                                        {order.items.map((item) => (
                                            <li className="order-item-row" key={item.id}>
                                                <div className="order-item-product">
                                                    {item.image ? (
                                                        <img
                                                            className="order-item-image"
                                                            src={item.image}
                                                            alt={item.title}
                                                            loading="lazy"
                                                        />
                                                    ) : (
                                                        <span className="order-item-image-placeholder" aria-hidden="true">
                                                            <i className="fa-regular fa-image" />
                                                        </span>
                                                    )}
                                                    <span className="order-item-title">{item.title}</span>
                                                </div>
                                                <div className="order-item-meta">
                                                    <span className="text-body-secondary">Qty {item.quantity}</span>
                                                    <strong>{formatPrice(item.price * item.quantity)}</strong>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default Order;
