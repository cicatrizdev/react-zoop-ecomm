import React, { useEffect, useState, type ReactNode } from 'react';
import {
	CartContext,
	type CartContextType,
	type CartItem,
} from '../contexts/CartContext';

interface CartProviderProps {
	children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
	const [items, setItems] = useState<CartItem[]>([]);

	// Load cart from localStorage on mount
	useEffect(() => {
		const savedCart = localStorage.getItem('cart');
		if (savedCart) {
			try {
				setItems(JSON.parse(savedCart));
			} catch {
				// Error loading cart from localStorage
			}
		}
	}, []);

	// Save cart to localStorage whenever items change
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(items));
	}, [items]);

	// Inefficient calculation - runs on every render (WITHOUT useMemo)
	const totalItems = (() => {
		return items.reduce((total, item) => total + item.quantity, 0);
	})();

	// Inefficient calculation - runs on every render (WITHOUT useMemo)
	const totalPrice = (() => {
		return items.reduce((total, item) => total + item.price * item.quantity, 0);
	})();

	// Inefficient statistics calculation - runs on every render
	const cartStats = (() => {
		const uniqueItems = items.length;
		const averagePrice = totalPrice / totalItems || 0;
		const expensiveItems = items.filter(
			item => item.price > averagePrice
		).length;
		const cheapItems = items.filter(item => item.price <= averagePrice).length;

		return {
			uniqueItems,
			averagePrice,
			expensiveItems,
			cheapItems,
		};
	})();

	// Function recreated on every render (WITHOUT useCallback)
	const addToCart = (product: {
		id: number;
		name: string;
		price: number;
		image: string;
	}) => {
		setItems(prevItems => {
			const existingItem = prevItems.find(item => item.id === product.id);

			if (existingItem) {
				return prevItems.map(item =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			} else {
				return [...prevItems, { ...product, quantity: 1 }];
			}
		});
	};

	// Function recreated on every render (WITHOUT useCallback)
	const removeFromCart = (productId: number) => {
		setItems(prevItems => prevItems.filter(item => item.id !== productId));
	};

	// Function recreated on every render (WITHOUT useCallback)
	const updateQuantity = (productId: number, quantity: number) => {
		if (quantity <= 0) {
			removeFromCart(productId);
			return;
		}

		setItems(prevItems =>
			prevItems.map(item =>
				item.id === productId ? { ...item, quantity: quantity } : item
			)
		);
	};

	// Function recreated on every render (WITHOUT useCallback)
	const clearCart = () => {
		setItems([]);
	};

	// Inefficient function - runs on every render
	const isInCart = (productId: number): boolean => {
		return items.some(item => item.id === productId);
	};

	// Function to get items grouped by category (heavy calculation)
	const getItemsByCategory = () => {
		const grouped = items.reduce(
			(acc, item) => {
				// Simulates category retrieval (in a real case, it would come from the product)
				const category = item.price > 50 ? 'Premium' : 'Regular';
				if (!acc[category]) {
					acc[category] = [];
				}
				acc[category].push(item);
				return acc;
			},
			{} as Record<string, CartItem[]>
		);

		return grouped;
	};

	const value: CartContextType = {
		items,
		totalItems,
		totalPrice,
		addToCart,
		removeFromCart,
		updateQuantity,
		clearCart,
		isInCart,
	};

	return (
		<CartContext.Provider value={value}>
			{/* Heavy calculations being displayed (cause re-renders) */}
			<div style={{ display: 'none' }}>
				{JSON.stringify(cartStats)}
				{JSON.stringify(getItemsByCategory())}
			</div>
			{children}
		</CartContext.Provider>
	);
};
