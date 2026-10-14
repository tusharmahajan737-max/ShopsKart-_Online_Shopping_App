import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const Cart = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart, buyCartItem, placeOrder } = useCart();
    const navigate = useNavigate();

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleOrderNow = () => {
        const order = placeOrder();
        if (order) {
            navigate('/your_order', { state: { placedOrderId: order.id } });
        }
    };

    const handleBuyItem = (itemId) => {
        const order = buyCartItem(itemId);
        if (order) {
            navigate('/your_order', { state: { placedOrderId: order.id } });
        }
    };

    return (
        <div className="cart-page container py-4 py-lg-5">
            <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2 mb-4">
                <h2 className="mb-0">Shopping Cart</h2>
                {cart.length > 0 && <span className="text-body-secondary">{totalItems} items</span>}
            </div>

            {cart.length === 0 ? (
                <div className="empty-cart-box text-center py-5 px-3">
                    <h3 className="mb-3">Cart is empty</h3>
                    <p className="text-body-secondary mb-0">Add products to your cart to continue shopping.</p>
                </div>
            ) : (
                <div className="row g-4 align-items-start">
                    <div className="col-12 col-lg-8">
                        <div className="table-responsive">
                            <table className="table table-bordered align-middle cart-table mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col" className="text-center">
                                            Quantity
                                        </th>
                                        <th scope="col" className="text-end">
                                            Price
                                        </th>
                                        <th scope="col" className="text-center">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {cart.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <div className="cart-product-cell">
                                                    {item.image ? (
                                                        <img className="cart-product-image" src={item.image} alt={item.title} />
                                                    ) : (
                                                        <span className="cart-product-image-placeholder" aria-hidden="true">
                                                            <i className="fa-regular fa-image" />
                                                        </span>
                                                    )}
                                                    <span className="fw-semibold">{item.title}</span>
                                                </div>
                                            </td>
                                            <td className="text-center" data-label="Quantity">
                                                <div className="d-inline-flex align-items-center justify-content-center gap-2 cart-quantity-box">
                                                    <button
                                                        className="btn btn-sm cart-qty-btn"
                                                        type="button"
                                                        onClick={() => decreaseQuantity(item.id)}
                                                        aria-label={`Decrease quantity for ${item.title}`}>
                                                        -
                                                    </button>
                                                    <span className="fw-semibold cart-quantity-value">{item.quantity}</span>
                                                    <button
                                                        className="btn btn-sm cart-qty-btn"
                                                        type="button"
                                                        onClick={() => increaseQuantity(item.id)}
                                                        aria-label={`Increase quantity for ${item.title}`}>
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="text-end fw-semibold" data-label="Subtotal">
                                                Rs. {item.price * item.quantity}
                                            </td>
                                            <td className="text-center">
                                                <div className="cart-item-actions d-inline-flex flex-wrap justify-content-center gap-2">
                                                    <button
                                                        className="btn btn-sm cart-remove-button"
                                                        type="button"
                                                        onClick={() => removeFromCart(item.id)}
                                                        aria-label={`Remove ${item.title} from cart`}>
                                                        <i className="fa-solid fa-trash-can me-1" aria-hidden="true" />
                                                        Remove
                                                    </button>
                                                    <button
                                                        className="btn btn-sm cart-buy-button"
                                                        type="button"
                                                        onClick={() => handleBuyItem(item.id)}
                                                        aria-label={`Buy ${item.title} separately`}>
                                                        <i className="fa-solid fa-bag-shopping me-1" aria-hidden="true" />
                                                        Buy now
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className="card shadow-sm cart-summary-card">
                            <div className="card-body p-4">
                                <h4 className="mb-3">Order Summary</h4>
                                <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                                    <span className="text-body-secondary">Products</span>
                                    <strong>{cart.length}</strong>
                                </div>
                                <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                                    <span className="text-body-secondary">Total Items</span>
                                    <strong>{totalItems}</strong>
                                </div>
                                <div className="d-flex justify-content-between align-items-center py-3">
                                    <span className="fw-semibold">Total Amount</span>
                                    <span className="fw-bold text-primary">Rs. {totalAmount}</span>
                                </div>
                                <button className="btn btn-primary w-100 mt-2" type="button" onClick={handleOrderNow}>
                                    Place order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
