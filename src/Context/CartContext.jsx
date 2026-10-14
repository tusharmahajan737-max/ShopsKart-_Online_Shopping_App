import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext();
const CART_STORAGE_KEY = 'shopskart-cart';
const ORDERS_STORAGE_KEY = 'shopskart-orders';

const readStoredItems = (storageKey) => {
    try {
        const storedItems = JSON.parse(localStorage.getItem(storageKey) || '[]');
        return Array.isArray(storedItems) ? storedItems : [];
    } catch {
        return [];
    }
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => readStoredItems(CART_STORAGE_KEY));
    const [orders, setOrders] = useState(() => readStoredItems(ORDERS_STORAGE_KEY));

    useEffect(() => {
        try {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        } catch {
            // Keep the in-memory cart usable if browser storage is unavailable.
        }
    }, [cart]);

    useEffect(() => {
        try {
            localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
        } catch {
            // Keep order history available for the current session if storage is unavailable.
        }
    }, [orders]);

    const addToCart = (product) => {
        setCart((currentCart) => {
            const existingProduct = currentCart.find((item) => item.id === product.id);

            if (existingProduct) {
                return currentCart.map((item) =>
                    item.id === product.id ? { ...item, image: item.image || product.image, quantity: item.quantity + 1 } : item
                );
            }

            return [
                ...currentCart,
                {
                    ...product,
                    quantity: 1,
                },
            ];
        });
    };

    const increaseQuantity = (id) => {
        setCart((currentCart) => currentCart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
    };

    const decreaseQuantity = (id) => {
        setCart((currentCart) =>
            currentCart
                .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (id) => {
        setCart((currentCart) => currentCart.filter((item) => item.id !== id));
    };

    const value = useMemo(() => {
        const createOrder = (items) => {
            if (items.length === 0) {
                return null;
            }

            const order = {
                id: `SK-${Date.now()}`,
                createdAt: new Date().toISOString(),
                status: 'Processing',
                items: items.map((item) => ({ ...item })),
                total: items.reduce((amount, item) => amount + item.price * item.quantity, 0),
            };

            setOrders((currentOrders) => [order, ...currentOrders]);
            return order;
        };

        return {
            cart,
            orders,
            addToCart,
            increaseQuantity,
            decreaseQuantity,
            removeFromCart,
            placeOrder: () => {
                const order = createOrder(cart);
                if (order) {
                    setCart([]);
                }
                return order;
            },
            buyCartItem: (id) => {
                const item = cart.find((cartItem) => cartItem.id === id);
                if (!item) {
                    return null;
                }

                const order = createOrder([item]);
                if (order) {
                    setCart((currentCart) => currentCart.filter((cartItem) => cartItem.id !== id));
                }
                return order;
            },
            buyNow: (product) => createOrder([{ ...product, quantity: 1 }]),
            cancelOrder: (id) => {
                setOrders((currentOrders) =>
                    currentOrders.map((order) =>
                        order.id === id && order.status === 'Processing' ? { ...order, status: 'Cancelled' } : order
                    )
                );
            },
            removeOrder: (id) => {
                setOrders((currentOrders) => currentOrders.filter((order) => order.id !== id));
            },
        };
    }, [cart, orders]);

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
