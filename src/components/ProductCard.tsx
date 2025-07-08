import React from 'react';
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

	// Função recriada a cada render (SEM useCallback)
	const handleAddToCart = () => {
		if (product) {
			addToCart(product);
		}
	};

	// Verificação ineficiente - executa a cada render
	const isProductInCart = product ? isInCart(product.id) : false;

	// Processamento de texto ineficiente - executa a cada render
	const processedTitle = (() => {
		// Simula processamento de texto (como formatação, limpeza, etc.)
		return title.trim().replace(/\s+/g, ' ');
	})();

	// Processamento de descrição ineficiente - executa a cada render
	const processedDescription = (() => {
		// Simula processamento de texto (como truncamento, formatação, etc.)
		return description.length > 100 ? description.substring(0, 100) + '...' : description;
	})();

	// Cálculo de desconto ineficiente - executa a cada render
	const discountInfo = (() => {
		if (!product) return null;

		// Simula cálculo de desconto baseado em regras de negócio
		const hasDiscount = product.price > 50;
		const discountPercentage = hasDiscount ? 10 : 0;
		const discountedPrice = hasDiscount ? product.price * 0.9 : product.price;

		return {
			hasDiscount,
			discountPercentage,
			discountedPrice: discountedPrice.toFixed(2).replace('.', ','),
		};
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

			{/* Exibição de preço com desconto */}
			<div className='font-montserrat font-bold text-base sm:text-lg text-blue1 mb-3'>
				{discountInfo?.hasDiscount ? (
					<div>
						<span className='line-through text-gray-500 text-sm'>R$ {price}</span>
						<div className='text-red-600'>R$ {discountInfo.discountedPrice}</div>
						<span className='text-xs text-red-600'>{discountInfo.discountPercentage}% OFF</span>
					</div>
				) : (
					`R$ ${price}`
				)}
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
