import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { CartContext, type CartContextType, type CartItem } from './CartContext';

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
			} catch (error) {
				console.error('Error loading cart from localStorage:', error);
			}
		}
	}, []);

	// Save cart to localStorage whenever items change
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(items));
	}, [items]);

	// Cálculo ineficiente - executa a cada render (SEM useMemo)
	const totalItems = (() => {
		return items.reduce((total, item) => total + item.quantity, 0);
	})();

	// Cálculo ineficiente - executa a cada render (SEM useMemo)
	const totalPrice = (() => {
		return items.reduce((total, item) => total + item.price * item.quantity, 0);
	})();

	// Cálculo de estatísticas ineficiente - executa a cada render
	const cartStats = (() => {
		const uniqueItems = items.length;
		const averagePrice = totalPrice / totalItems || 0;
		const expensiveItems = items.filter((item) => item.price > averagePrice).length;
		const cheapItems = items.filter((item) => item.price <= averagePrice).length;

		return {
			uniqueItems,
			averagePrice,
			expensiveItems,
			cheapItems,
		};
	})();

	// Função recriada a cada render (SEM useCallback)
	const addToCart = (product: { id: number; name: string; price: number; image: string }) => {
		setItems((prevItems) => {
			const existingItem = prevItems.find((item) => item.id === product.id);

			if (existingItem) {
				return prevItems.map((item) =>
					item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
				);
			} else {
				return [...prevItems, { ...product, quantity: 1 }];
			}
		});
	};

	// Função recriada a cada render (SEM useCallback)
	const removeFromCart = (productId: number) => {
		setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
	};

	// Função recriada a cada render (SEM useCallback)
	const updateQuantity = (productId: number, quantity: number) => {
		if (quantity <= 0) {
			removeFromCart(productId);
			return;
		}

		setItems((prevItems) =>
			prevItems.map((item) => (item.id === productId ? { ...item, quantity: quantity } : item))
		);
	};

	// Função recriada a cada render (SEM useCallback)
	const clearCart = () => {
		setItems([]);
	};

	// Função ineficiente - executa a cada render
	const isInCart = (productId: number): boolean => {
		return items.some((item) => item.id === productId);
	};

	// Função para obter itens agrupados por categoria (cálculo pesado)
	const getItemsByCategory = () => {
		const grouped = items.reduce((acc, item) => {
			// Simula obtenção de categoria (em um caso real, viria do produto)
			const category = item.price > 50 ? 'Premium' : 'Regular';
			if (!acc[category]) {
				acc[category] = [];
			}
			acc[category].push(item);
			return acc;
		}, {} as Record<string, CartItem[]>);

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
			{/* Cálculos pesados sendo exibidos (causam re-renders) */}
			<div style={{ display: 'none' }}>
				{JSON.stringify(cartStats)}
				{JSON.stringify(getItemsByCategory())}
			</div>
			{children}
		</CartContext.Provider>
	);
};
