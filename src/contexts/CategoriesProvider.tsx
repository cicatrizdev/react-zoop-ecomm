import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { CategoriesContext, type CategoriesContextType, type Category } from './CategoriesContext';

interface CategoriesProviderProps {
	children: ReactNode;
}

export const CategoriesProvider: React.FC<CategoriesProviderProps> = ({ children }) => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				setLoading(true);
				const response = await fetch('http://localhost:3001/categories');
				if (!response.ok) {
					throw new Error('Failed to fetch categories');
				}
				const data = await response.json();
				setCategories(data || []);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'An error occurred');
			} finally {
				setLoading(false);
			}
		};

		fetchCategories();
	}, []);

	const getCategoryById = (id: number): Category | undefined => {
		return categories.find((category) => category.id === id);
	};

	const value: CategoriesContextType = {
		categories,
		loading,
		error,
		getCategoryById,
	};

	return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
