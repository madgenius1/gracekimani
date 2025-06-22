"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CartItem {
    resourceId: string;
    documentTitle: string;
    price: number;
    quantity: number;
    imageSrc: string;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (itemResourceId: string, itemDocumentTitle: string) => void;
    updateCartQuantity: (itemResourceId: string, itemDocumentTitle: string, quantity: number) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem('shoppingCart');
            if (savedCart) {
                setCart(JSON.parse(savedCart));
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('shoppingCart', JSON.stringify(cart));
        }
    }, [cart]);

    const addToCart = (newItem: Omit<CartItem, 'quantity'>) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(
                (item) => item.resourceId === newItem.resourceId && item.documentTitle === newItem.documentTitle
            );

            if (existingItem) {
                return prevCart.map((item) =>
                    item.resourceId === newItem.resourceId && item.documentTitle === newItem.documentTitle
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...newItem, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (itemResourceId: string, itemDocumentTitle: string) => {
        setCart((prevCart) =>
            prevCart.filter(
                (item) => !(item.resourceId === itemResourceId && item.documentTitle === itemDocumentTitle)
            )
        );
    };

    const updateCartQuantity = (itemResourceId: string, itemDocumentTitle: string, quantity: number) => {
        setCart((prevCart) => {
            if (quantity <= 0) {
                return prevCart.filter(
                    (item) => !(item.resourceId === itemResourceId && item.documentTitle === itemDocumentTitle)
                );
            }
            return prevCart.map((item) =>
                item.resourceId === itemResourceId && item.documentTitle === itemDocumentTitle
                    ? { ...item, quantity: quantity }
                    : item
            );
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartQuantity, clearCart, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};