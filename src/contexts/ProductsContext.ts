import { createContext } from 'react';

export interface Product {
	id: string | number;
	name: string;
	description: string;
	price: number;
	image: string;
	categoryId: string | number;
}

export interface ProductsContextType {
	products: Product[];
	loading: boolean;
	error: string | null;
	getProductById: (id: string | number) => Product | undefined;
	getProductsByCategory: (categoryId: string | number) => Product[];
	searchProducts: (query: string) => Product[];
}

export const ProductsContext = createContext<ProductsContextType | undefined>(undefined);
