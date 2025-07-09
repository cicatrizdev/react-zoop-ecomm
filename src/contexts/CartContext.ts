import { createContext } from 'react';

export interface CartItem {
	id: number;
	name: string;
	price: number;
	image: string;
	quantity: number;
}

export interface CartContextType {
	items: CartItem[];
	totalItems: number;
	totalPrice: number;
	addToCart: (product: {
		id: number;
		name: string;
		price: number;
		image: string;
	}) => void;
	removeFromCart: (productId: number) => void;
	updateQuantity: (productId: number, quantity: number) => void;
	clearCart: () => void;
	isInCart: (productId: number) => boolean;
}

export const CartContext = createContext<CartContextType | undefined>(
	undefined
);
