import React, { memo, useMemo } from 'react';
import ProductCard from './ProductCard';
import FavoritesButton from './FavoritesButton';

interface ProductCardWithFavoritesProps {
	image: string;
	title: string;
	description: string;
	price: string;
	onAction?: () => void;
	actionLabel?: string;
	product: {
		id: string | number;
		name: string;
		price: number;
		image: string;
		description: string;
		categoryId: string | number;
	};
	showAddToCart?: boolean;
}

const ProductCardWithFavorites: React.FC<ProductCardWithFavoritesProps> = memo(
	({
		image,
		title,
		description,
		price,
		onAction,
		actionLabel,
		product,
		showAddToCart = false,
	}) => {
		// Convert product to the format expected by ProductCard
		const productForCart = useMemo(
			() => ({
				id: Number(product.id),
				name: product.name,
				price: product.price,
				image: product.image,
			}),
			[product]
		);

		return (
			<div className='relative'>
				<FavoritesButton
					product={product}
					className='absolute top-2 right-2 z-10'
				/>
				<ProductCard
					image={image}
					title={title}
					description={description}
					price={price}
					onAction={onAction}
					actionLabel={actionLabel}
					product={productForCart}
					showAddToCart={showAddToCart}
				/>
			</div>
		);
	},
	(prevProps, nextProps) => {
		return prevProps.product.id === nextProps.product.id;
	}
);

export default ProductCardWithFavorites;
