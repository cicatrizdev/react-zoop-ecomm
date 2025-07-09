import { createContext } from 'react';

export interface Category {
	id: number;
	name: string;
	description: string;
	image: string;
}

export interface CategoriesContextType {
	categories: Category[];
	loading: boolean;
	error: string | null;
	getCategoryById: (id: number) => Category | undefined;
}

export const CategoriesContext = createContext<
	CategoriesContextType | undefined
>(undefined);
