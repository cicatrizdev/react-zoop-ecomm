import type { ReactNode } from 'react';
import { useCart } from '../hooks/useCart';

interface ProductCardProps {
	image: string | ReactNode;
	title: string;
	description: string;
	price: string;
	onAction?: () => void;
	actionLabel?: string;
	product?: {
		id: number;
		name: string;
		price: number;
		image: string;
	};
	showAddToCart?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
	image,
	title,
	description,
	price,
	onAction,
	actionLabel = 'Quero ver!',
	product,
	showAddToCart = false,
}) => {
	const { addToCart, isInCart } = useCart();

	// Function recreated on every render (WITHOUT useCallback)
	const handleAddToCart = () => {
		if (product) {
			addToCart(product);
		}
	};

	// Inefficient verification - runs on every render
	const isProductInCart = product ? isInCart(product.id) : false;

	// Inefficient text processing - runs on every render
	const processedTitle = (() => {
		// Simulates text processing (like formatting, cleaning, etc.)
		return title.trim().replace(/\s+/g, ' ');
	})();

	// Inefficient description processing - runs on every render
	const processedDescription = (() => {
		// Simulates text processing (like truncation, formatting, etc.)
		return description.length > 100
			? description.substring(0, 100) + '...'
			: description;
	})();

	return (
		<div className='flex flex-col bg-blue3 rounded-lg shadow p-3 sm:p-4 w-full max-w-xs mx-auto'>
			{typeof image === 'string' ? (
				<img
					src={image}
					alt={processedTitle}
					className='w-full h-24 sm:h-32 object-contain mb-3 rounded'
				/>
			) : (
				<div className='w-full h-24 sm:h-32 flex items-center justify-center mb-3 rounded'>
					{image}
				</div>
			)}
			<h3 className='font-montserrat font-bold text-blue1 text-sm sm:text-base mb-1 line-clamp-2'>
				{processedTitle}
			</h3>
			<p className='text-xs text-blue1 mb-2 line-clamp-2 min-h-[32px] leading-relaxed'>
				{processedDescription}
			</p>

			{/* Price display */}
			<div className='font-montserrat font-bold text-base sm:text-lg text-blue1 mb-3'>
				R$ {price}
			</div>

			{showAddToCart && product && (
				<button
					className={`font-montserrat rounded px-3 sm:px-4 py-2 transition-colors duration-200 text-sm sm:text-base mb-2 ${
						isProductInCart
							? 'bg-green-600 text-white cursor-not-allowed'
							: 'bg-blue1 text-white hover:bg-blue2'
					}`}
					onClick={handleAddToCart}
					disabled={isProductInCart}
					type='button'
				>
					{isProductInCart ? 'No carrinho!' : 'Adicionar ao carrinho'}
				</button>
			)}

			<button
				className='bg-magenta1 text-white font-montserrat rounded px-3 sm:px-4 py-2 hover:bg-magenta2 transition-colors duration-200 text-sm sm:text-base'
				onClick={onAction}
				type='button'
			>
				{actionLabel}
			</button>
		</div>
	);
};

export default ProductCard;
