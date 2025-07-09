import React, { useEffect, useState, type ReactNode } from 'react';
import {
	ProductsContext,
	type ProductsContextType,
	type Product,
} from '../contexts/ProductsContext';

interface ProductsProviderProps {
	children: ReactNode;
}

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
	children,
}) => {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true);
				const response = await fetch('http://localhost:3001/products');
				if (!response.ok) {
					throw new Error('Failed to fetch products');
				}
				const data = await response.json();
				setProducts(data || []);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'An error occurred');
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	// Inefficient function - runs on every render (WITHOUT useMemo)
	const getProductById = (id: string | number): Product | undefined => {
		return products.find(
			product => product.id === id || String(product.id) === String(id)
		);
	};

	// Inefficient function - runs on every render (WITHOUT useMemo)
	const getProductsByCategory = (categoryId: string | number): Product[] => {
		return products.filter(
			product =>
				product.categoryId === categoryId ||
				String(product.categoryId) === String(categoryId)
		);
	};

	// Inefficient function - runs on every render (WITHOUT useMemo)
	const searchProducts = (query: string): Product[] => {
		const lowercaseQuery = query.toLowerCase();
		return products.filter(
			product =>
				product.name.toLowerCase().includes(lowercaseQuery) ||
				product.description.toLowerCase().includes(lowercaseQuery)
		);
	};

	// Inefficient statistics calculation - runs on every render
	const productsStats = (() => {
		const totalProducts = products.length;
		const totalPrice = products.reduce(
			(sum, product) => sum + product.price,
			0
		);
		const averagePrice = totalPrice / totalProducts || 0;
		const expensiveProducts = products.filter(
			product => product.price > averagePrice
		).length;
		const cheapProducts = products.filter(
			product => product.price <= averagePrice
		).length;

		// Grouping by category (heavy calculation)
		const productsByCategory = products.reduce(
			(acc, product) => {
				const categoryId = String(product.categoryId);
				if (!acc[categoryId]) {
					acc[categoryId] = [];
				}
				acc[categoryId].push(product);
				return acc;
			},
			{} as Record<string, Product[]>
		);

		return {
			totalProducts,
			totalPrice,
			averagePrice,
			expensiveProducts,
			cheapProducts,
			productsByCategory,
		};
	})();

	// Function to get recommended products (heavy calculation)
	const getRecommendedProducts = (productId: string | number) => {
		const currentProduct = products.find(p => p.id === productId);
		if (!currentProduct) return [];

		// Simulates recommendation algorithm based on price and category
		return products
			.filter(
				product =>
					product.id !== productId &&
					product.categoryId === currentProduct.categoryId &&
					Math.abs(product.price - currentProduct.price) < 30
			)
			.slice(0, 4);
	};

	// Function to get products on sale (heavy calculation)
	const getProductsOnSale = () => {
		const averagePrice =
			products.reduce((sum, product) => sum + product.price, 0) /
				products.length || 0;
		return products
			.filter(product => product.price < averagePrice * 0.8)
			.slice(0, 6);
	};

	const value: ProductsContextType = {
		products,
		loading,
		error,
		getProductById,
		getProductsByCategory,
		searchProducts,
	};

	return (
		<ProductsContext.Provider value={value}>
			{/* Heavy calculations being displayed (cause re-renders) */}
			<div style={{ display: 'none' }}>
				{JSON.stringify(productsStats)}
				{JSON.stringify(getRecommendedProducts(products[0]?.id || 0))}
				{JSON.stringify(getProductsOnSale())}
			</div>
			{children}
		</ProductsContext.Provider>
	);
};
