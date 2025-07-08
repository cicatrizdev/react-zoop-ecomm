import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaHeart, FaShareAlt, FaArrowLeft } from 'react-icons/fa';
import { useProducts, useFavorites, useCart } from '../hooks';

export default function ProductDetail() {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const { products, getProductById, loading, error } = useProducts();
	const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
	const { addToCart, isInCart } = useCart();
	const [quantity, setQuantity] = useState<number>(1);
	const [product, setProduct] = useState<import('../contexts/ProductsContext').Product | undefined>(
		undefined
	);

	useEffect(() => {
		if (id && products.length > 0) {
			const foundProduct = getProductById(id);
			setProduct(foundProduct);
		}
	}, [id, products, getProductById]);

	const handleBackToHome = () => {
		navigate('/');
	};

	const handleAddToCart = () => {
		if (product) {
			// Add the product to cart with the selected quantity
			for (let i = 0; i < quantity; i++) {
				addToCart({
					id: Number(product.id),
					name: product.name,
					price: product.price,
					image: product.image,
				});
			}
		}
	};

	const handleToggleFavorite = () => {
		if (product) {
			if (isFavorite(product.id)) {
				removeFromFavorites(product.id);
			} else {
				addToFavorites(product);
			}
		}
	};

	if (loading) {
		return (
			<div className='flex items-center justify-center min-h-[70vh]'>
				<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue1'></div>
				<span className='ml-2 text-gray-600'>Carregando produto...</span>
			</div>
		);
	}

	if (error) {
		return (
			<div className='flex flex-col items-center justify-center min-h-[70vh] py-8 px-4'>
				<p className='text-red-600 mb-4'>Erro ao carregar produto: {error}</p>
				<button
					onClick={() => window.location.reload()}
					className='bg-blue1 text-white px-4 py-2 rounded hover:bg-blue2 transition-colors'
				>
					Tentar novamente
				</button>
			</div>
		);
	}

	if (!product) {
		return (
			<div className='flex flex-col items-center justify-center min-h-[70vh] py-8 px-4'>
				<p className='text-gray-600 mb-4'>Produto não encontrado. ID: {id}</p>
				<p className='text-gray-500 mb-4 text-sm'>Produtos disponíveis: {products.length}</p>
				<button
					onClick={handleBackToHome}
					className='bg-blue1 text-white px-4 py-2 rounded hover:bg-blue2 transition-colors'
				>
					Voltar ao início
				</button>
			</div>
		);
	}

	const isProductFavorite = isFavorite(product.id);
	const isProductInCart = isInCart(Number(product.id));

	return (
		<div className='flex flex-col items-center justify-center min-h-[70vh] py-8 px-4 md:px-0 bg-[#f5f8fc]'>
			<div className='w-full max-w-6xl bg-white rounded-lg shadow-md flex flex-col md:flex-row gap-8 p-6 md:p-12 relative'>
				{/* Botão voltar */}
				<button
					onClick={handleBackToHome}
					className='absolute top-4 left-4 flex items-center gap-2 text-blue1 hover:text-blue2 transition-colors'
				>
					<FaArrowLeft />
					<span>Voltar</span>
				</button>

				{/* Imagem do produto */}
				<div className='flex-1 flex items-center justify-center'>
					<img
						src={product.image}
						alt={product.name}
						className='w-full max-w-xs md:max-w-md rounded-lg object-contain'
					/>
				</div>
				{/* Detalhes do produto */}
				<div className='flex-1 flex flex-col gap-4 justify-center'>
					<div className='flex items-start justify-between gap-4'>
						<h1 className='text-2xl md:text-3xl font-bold text-[#1a3565]'>{product.name}</h1>
						<div className='flex gap-3 text-[#e63963] text-xl mt-1'>
							<button
								title={isProductFavorite ? 'Remove from favorites' : 'Add to favorites'}
								className={`hover:scale-110 transition ${isProductFavorite ? 'text-red-500' : ''}`}
								onClick={handleToggleFavorite}
							>
								<FaHeart />
							</button>
							<button title='Compartilhar' className='hover:scale-110 transition'>
								<FaShareAlt />
							</button>
						</div>
					</div>
					<p className='text-[#1a3565] text-base md:text-lg font-medium'>{product.description}</p>
					<div className='text-2xl md:text-3xl font-bold text-[#e63963] mt-2'>
						{product.price.toLocaleString('pt-BR', {
							style: 'currency',
							currency: 'BRL',
							minimumFractionDigits: 2,
						})}
					</div>
					{/* Quantidade */}
					<div className='mt-4'>
						<label className='block text-[#e63963] font-bold mb-1'>Quantidade</label>
						<select
							value={quantity}
							onChange={(e) => setQuantity(Number(e.target.value))}
							className='w-32 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e63963]'
						>
							{[1, 2, 3, 4, 5].map((q) => (
								<option key={q} value={q}>
									{q}
								</option>
							))}
						</select>
					</div>
					{/* Botão adicionar ao carrinho */}
					<button
						onClick={handleAddToCart}
						disabled={isProductInCart}
						className={`mt-6 w-full md:w-auto font-bold py-3 px-8 rounded transition text-lg flex items-center justify-center gap-2 ${
							isProductInCart
								? 'bg-green-600 text-white cursor-not-allowed'
								: 'bg-[#e63963] hover:bg-[#c72d53] text-white'
						}`}
					>
						<span className='text-xl'>🛒</span>
						{isProductInCart ? 'Produto no carrinho!' : 'Adicionar ao carrinho'}
					</button>
				</div>
			</div>
		</div>
	);
}
