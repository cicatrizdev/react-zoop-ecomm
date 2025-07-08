import { useContext } from 'react';
import { CategoriesContext, type CategoriesContextType } from '../contexts/CategoriesContext';

export const useCategories = (): CategoriesContextType => {
	const context = useContext(CategoriesContext);
	if (context === undefined) {
		throw new Error('useCategories must be used within a CategoriesProvider');
	}
	return context;
};
