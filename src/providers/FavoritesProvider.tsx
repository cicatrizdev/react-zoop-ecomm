import React, { useEffect, useState, type ReactNode } from 'react';
import {
	FavoritesContext,
	type FavoritesContextType,
	type FavoriteProduct,
} from '../contexts/FavoritesContext';

interface FavoritesProviderProps {
	children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({
	children,
}) => {
	const [favorites, setFavorites] = useState<FavoriteProduct[]>([]);

	// Load favorites from localStorage on mount
	useEffect(() => {
		const savedFavorites = localStorage.getItem('favorites');
		if (savedFavorites) {
			try {
				setFavorites(JSON.parse(savedFavorites));
			} catch {
				// Error loading favorites from localStorage
			}
		}
	}, []);

	// Save favorites to localStorage whenever favorites change
	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorites));
	}, [favorites]);

	// Inefficient calculation - runs on every render (WITHOUT useMemo)
	const totalFavorites = (() => {
		return favorites.length;
	})();

	// Inefficient statistics calculation - runs on every render
	const favoritesStats = (() => {
		const totalPrice = favorites.reduce(
			(sum, product) => sum + product.price,
			0
		);
		const averagePrice = totalPrice / favorites.length || 0;
		const expensiveFavorites = favorites.filter(
			product => product.price > averagePrice
		).length;
		const cheapFavorites = favorites.filter(
			product => product.price <= averagePrice
		).length;

		return {
			totalPrice,
			averagePrice,
			expensiveFavorites,
			cheapFavorites,
		};
	})();

	// Function recreated on every render (WITHOUT useCallback)
	const addToFavorites = (product: {
		id: string | number;
		name: string;
		price: number;
		image: string;
		description: string;
		categoryId: string | number;
	}) => {
		setFavorites(prevFavorites => {
			const existingFavorite = prevFavorites.find(
				favorite => favorite.id === product.id
			);

			if (existingFavorite) {
				// Product is already in favorites, don't add again
				return prevFavorites;
			} else {
				return [...prevFavorites, product];
			}
		});
	};

	// Function recreated on every render (WITHOUT useCallback)
	const removeFromFavorites = (productId: string | number) => {
		setFavorites(prevFavorites =>
			prevFavorites.filter(favorite => favorite.id !== productId)
		);
	};

	// Function recreated on every render (WITHOUT useCallback)
	const clearFavorites = () => {
		setFavorites([]);
	};

	// Inefficient function - runs on every render
	const isFavorite = (productId: string | number): boolean => {
		return favorites.some(favorite => favorite.id === productId);
	};

	// Function to get favorites grouped by category (heavy calculation)
	const getFavoritesByCategory = () => {
		const grouped = favorites.reduce(
			(acc, product) => {
				// Simulates category retrieval (in a real case, it would come from the product)
				const category = product.price > 50 ? 'Premium' : 'Regular';
				if (!acc[category]) {
					acc[category] = [];
				}
				acc[category].push(product);
				return acc;
			},
			{} as Record<string, FavoriteProduct[]>
		);

		return grouped;
	};

	// Function to get similar products (heavy calculation)
	const getSimilarProducts = (productId: string | number) => {
		const currentProduct = favorites.find(fav => fav.id === productId);
		if (!currentProduct) return [];

		// Simulates search for similar products based on price and category
		return favorites
			.filter(
				product =>
					product.id !== productId &&
					Math.abs(product.price - currentProduct.price) < 20
			)
			.slice(0, 3);
	};

	const value: FavoritesContextType = {
		favorites,
		totalFavorites,
		addToFavorites,
		removeFromFavorites,
		clearFavorites,
		isFavorite,
	};

	return (
		<FavoritesContext.Provider value={value}>
			{/* Heavy calculations being displayed (cause re-renders) */}
			<div style={{ display: 'none' }}>
				{JSON.stringify(favoritesStats)}
				{JSON.stringify(getFavoritesByCategory())}
				{JSON.stringify(getSimilarProducts(favorites[0]?.id || 0))}
			</div>
			{children}
		</FavoritesContext.Provider>
	);
};
