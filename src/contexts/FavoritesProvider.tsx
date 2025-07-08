import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import {
	FavoritesContext,
	type FavoritesContextType,
	type FavoriteProduct,
} from './FavoritesContext';

interface FavoritesProviderProps {
	children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
	const [favorites, setFavorites] = useState<FavoriteProduct[]>([]);

	// Load favorites from localStorage on mount
	useEffect(() => {
		const savedFavorites = localStorage.getItem('favorites');
		if (savedFavorites) {
			try {
				setFavorites(JSON.parse(savedFavorites));
			} catch (error) {
				console.error('Error loading favorites from localStorage:', error);
			}
		}
	}, []);

	// Save favorites to localStorage whenever favorites change
	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorites));
	}, [favorites]);

	// Cálculo ineficiente - executa a cada render (SEM useMemo)
	const totalFavorites = (() => {
		return favorites.length;
	})();

	// Cálculo de estatísticas ineficiente - executa a cada render
	const favoritesStats = (() => {
		const totalPrice = favorites.reduce((sum, product) => sum + product.price, 0);
		const averagePrice = totalPrice / favorites.length || 0;
		const expensiveFavorites = favorites.filter((product) => product.price > averagePrice).length;
		const cheapFavorites = favorites.filter((product) => product.price <= averagePrice).length;

		return {
			totalPrice,
			averagePrice,
			expensiveFavorites,
			cheapFavorites,
		};
	})();

	// Função recriada a cada render (SEM useCallback)
	const addToFavorites = (product: {
		id: string | number;
		name: string;
		price: number;
		image: string;
		description: string;
		categoryId: string | number;
	}) => {
		setFavorites((prevFavorites) => {
			const existingFavorite = prevFavorites.find((favorite) => favorite.id === product.id);

			if (existingFavorite) {
				// Product is already in favorites, don't add again
				return prevFavorites;
			} else {
				return [...prevFavorites, product];
			}
		});
	};

	// Função recriada a cada render (SEM useCallback)
	const removeFromFavorites = (productId: string | number) => {
		setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite.id !== productId));
	};

	// Função recriada a cada render (SEM useCallback)
	const clearFavorites = () => {
		setFavorites([]);
	};

	// Função ineficiente - executa a cada render
	const isFavorite = (productId: string | number): boolean => {
		return favorites.some((favorite) => favorite.id === productId);
	};

	// Função para obter favoritos agrupados por categoria (cálculo pesado)
	const getFavoritesByCategory = () => {
		const grouped = favorites.reduce((acc, product) => {
			// Simula obtenção de categoria (em um caso real, viria do produto)
			const category = product.price > 50 ? 'Premium' : 'Regular';
			if (!acc[category]) {
				acc[category] = [];
			}
			acc[category].push(product);
			return acc;
		}, {} as Record<string, FavoriteProduct[]>);

		return grouped;
	};

	// Função para obter produtos similares (cálculo pesado)
	const getSimilarProducts = (productId: string | number) => {
		const currentProduct = favorites.find((fav) => fav.id === productId);
		if (!currentProduct) return [];

		// Simula busca por produtos similares baseado em preço e categoria
		return favorites
			.filter(
				(product) => product.id !== productId && Math.abs(product.price - currentProduct.price) < 20
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
			{/* Cálculos pesados sendo exibidos (causam re-renders) */}
			<div style={{ display: 'none' }}>
				{JSON.stringify(favoritesStats)}
				{JSON.stringify(getFavoritesByCategory())}
				{JSON.stringify(getSimilarProducts(favorites[0]?.id || 0))}
			</div>
			{children}
		</FavoritesContext.Provider>
	);
};
