import { useContext } from 'react';
import { FavoritesContext, type FavoritesContextType } from '../contexts/FavoritesContext';

export const useFavorites = (): FavoritesContextType => {
	const context = useContext(FavoritesContext);
	if (context === undefined) {
		throw new Error('useFavorites must be used within a FavoritesProvider');
	}
	return context;
};
