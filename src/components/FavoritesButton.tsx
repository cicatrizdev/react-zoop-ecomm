import React from 'react';
import { useFavorites } from '../hooks/useFavorites';

interface FavoritesButtonProps {
	product: {
		id: string | number;
		name: string;
		price: number;
		image: string;
		description: string;
		categoryId: string | number;
	};
	className?: string;
}

const FavoritesButton: React.FC<FavoritesButtonProps> = ({ product, className = '' }) => {
	const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
	const isProductFavorite = isFavorite(product.id);

	const handleToggleFavorite = () => {
		if (isProductFavorite) {
			removeFromFavorites(product.id);
		} else {
			addToFavorites(product);
		}
	};

	return (
		<button
			onClick={handleToggleFavorite}
			className={`p-2 rounded-full transition-colors duration-200 ${
				isProductFavorite
					? 'bg-red-500 text-white hover:bg-red-600'
					: 'bg-gray-200 text-gray-600 hover:bg-gray-300'
			} ${className}`}
			title={isProductFavorite ? 'Remove from favorites' : 'Add to favorites'}
			type='button'
		>
			<svg
				className='w-5 h-5'
				fill={isProductFavorite ? 'currentColor' : 'none'}
				stroke='currentColor'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
				/>
			</svg>
		</button>
	);
};

export default FavoritesButton;
