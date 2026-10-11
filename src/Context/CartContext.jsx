import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext();
const CART_STORAGE_KEY = 'shopskart-cart';

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
            return Array.isArray(savedCart) ? savedCart : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        } catch {
            // Keep the in-memory cart usable if browser storage is unavailable.
        }
    }, [cart]);

    const addToCart = (product) => {
        setCart((currentCart) => {
            const existingProduct = currentCart.find((item) => item.id === product.id);

            if (existingProduct) {
                return currentCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
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

    const value = useMemo(() => ({ cart, addToCart, increaseQuantity, decreaseQuantity }), [cart]);

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
