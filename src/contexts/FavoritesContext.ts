import { createContext } from 'react';

export interface FavoriteProduct {
	id: string | number;
	name: string;
	price: number;
	image: string;
	description: string;
	categoryId: string | number;
}

export interface FavoritesContextType {
	favorites: FavoriteProduct[];
	totalFavorites: number;
	addToFavorites: (product: {
		id: string | number;
		name: string;
		price: number;
		image: string;
		description: string;
		categoryId: string | number;
	}) => void;
	removeFromFavorites: (productId: string | number) => void;
	clearFavorites: () => void;
	isFavorite: (productId: string | number) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);
