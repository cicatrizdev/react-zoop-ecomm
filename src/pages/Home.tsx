import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import ProductCardWithFavorites from '../components/ProductCardWithFavorites';
import NewsletterInput from '../components/NewsletterInput';
import Accordion from '../components/Accordion';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import WelcomeModal from '../components/WelcomeModal';
import { useCategories, useProducts } from '../hooks';

export function Home() {
	const [showWelcome, setShowWelcome] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState<string | number | null>(null);
	const [searchTerm, setSearchTerm] = useState('');
	const navigate = useNavigate();
	const { categories, loading, error } = useCategories();
	const { products, loading: productsLoading, error: productsError } = useProducts();

	const handleOpen = () => setShowWelcome(true);
	const handleClose = () => setShowWelcome(false);

	const handleCategoryClick = (categoryId: string | number) => {
		setSelectedCategory(categoryId);
	};

	const handleBackToHome = () => {
		setSelectedCategory(null);
	};

	const handleViewProduct = (productId: string | number) => {
		navigate(`/product/${productId}`);
	};

	const randomProducts = (() => {
		if (products.length === 0) return [];

		const shuffled = [...products].sort(() => 0.5 - Math.random());
		return shuffled.slice(0, 4);
	})();

	const filteredProducts = selectedCategory
		? (() => {
				return products.filter(
					(product) =>
						product.categoryId === selectedCategory ||
						String(product.categoryId) === String(selectedCategory)
				);
		  })()
		: [];

	const selectedCategoryName = selectedCategory
		? (() => {
				return (
					categories.find(
						(cat) => cat.id === selectedCategory || String(cat.id) === String(selectedCategory)
					)?.name || ''
				);
		  })()
		: '';

	const searchResults = searchTerm
		? (() => {
				const lowercaseQuery = searchTerm.toLowerCase();
				return products.filter(
					(product) =>
						product.name.toLowerCase().includes(lowercaseQuery) ||
						product.description.toLowerCase().includes(lowercaseQuery)
				);
		  })()
		: [];

	const productStats = (() => {
		const totalProducts = products.length;
		const totalCategories = categories.length;
		const averagePrice =
			products.reduce((sum, product) => sum + product.price, 0) / totalProducts || 0;
		const expensiveProducts = products.filter((product) => product.price > averagePrice).length;

		return {
			totalProducts,
			totalCategories,
			averagePrice,
			expensiveProducts,
		};
	})();

	return (
		<div className='bg-white'>
			<WelcomeModal open={showWelcome} onClose={handleClose} />
			{/* Banner principal */}
			<section className='bg-blue1 text-white w-full'>
				<div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-8 sm:py-12 gap-6 lg:gap-8'>
					<div className='flex-1 flex flex-col gap-4 text-center lg:text-left'>
						<h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold font-montserrat leading-tight'>
							Faça um <span className='text-blue2'>zoop</span>
							<br />
							<span className='text-magenta1 italic'>e realize seus desejos!</span>
						</h1>
						<p className='text-sm sm:text-base lg:text-lg max-w-md mx-auto lg:mx-0'>
							Encontre tudo que você precisa em um só lugar com 15% de desconto na primeira compra!
						</p>
						<button
							className='bg-magenta1 hover:bg-magenta2 text-white font-montserrat rounded px-6 py-3 w-max mx-auto lg:mx-0 mt-2 transition-colors duration-200'
							onClick={handleOpen}
						>
							Ganhar desconto!
						</button>
					</div>
					<div className='flex-1 flex justify-center items-center'>
						<ShoppingBagIcon sx={{ fontSize: { xs: 200, sm: 240, lg: 288 }, color: 'white' }} />
					</div>
				</div>
			</section>

			{/* Barra de busca */}
			<section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
				<div className='relative'>
					<input
						type='text'
						placeholder='Buscar produtos...'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue1'
					/>
					{searchTerm && (
						<div className='absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto z-10'>
							{searchResults.map((product) => (
								<div
									key={product.id}
									className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
									onClick={() => handleViewProduct(product.id)}
								>
									<div className='font-semibold'>{product.name}</div>
									<div className='text-sm text-gray-600'>R$ {product.price.toFixed(2)}</div>
								</div>
							))}
						</div>
					)}
				</div>
			</section>

			{/* Estatísticas (cálculo pesado) */}
			<section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
					<div className='bg-blue3 p-4 rounded-lg'>
						<div className='text-2xl font-bold text-blue1'>{productStats.totalProducts}</div>
						<div className='text-sm text-gray-600'>Produtos</div>
					</div>
					<div className='bg-blue3 p-4 rounded-lg'>
						<div className='text-2xl font-bold text-blue1'>{productStats.totalCategories}</div>
						<div className='text-sm text-gray-600'>Categorias</div>
					</div>
					<div className='bg-blue3 p-4 rounded-lg'>
						<div className='text-2xl font-bold text-blue1'>
							R$ {productStats.averagePrice.toFixed(2)}
						</div>
						<div className='text-sm text-gray-600'>Preço Médio</div>
					</div>
					<div className='bg-blue3 p-4 rounded-lg'>
						<div className='text-2xl font-bold text-blue1'>{productStats.expensiveProducts}</div>
						<div className='text-sm text-gray-600'>Produtos Caros</div>
					</div>
				</div>
			</section>

			{/* Categorias */}
			<section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
				<h2 className='text-xl sm:text-2xl font-bold font-montserrat text-center mb-2'>
					Categorias
				</h2>
				<p className='text-center text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base'>
					Escolha a categoria de produto que você deseja:
				</p>

				{loading && (
					<div className='flex justify-center items-center py-8'>
						<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue1'></div>
						<span className='ml-2 text-gray-600'>Carregando categorias...</span>
					</div>
				)}

				{error && (
					<div className='text-center py-8'>
						<p className='text-red-600 mb-4'>Erro ao carregar categorias: {error}</p>
						<button
							onClick={() => window.location.reload()}
							className='bg-blue1 text-white px-4 py-2 rounded hover:bg-blue2 transition-colors'
						>
							Tentar novamente
						</button>
					</div>
				)}

				{!loading && !error && categories.length > 0 && (
					<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 justify-items-center'>
						{categories.map((category) => (
							<CategoryCard
								key={category.id}
								image={category.image}
								label={category.name}
								onClick={() => handleCategoryClick(category.id)}
							/>
						))}
					</div>
				)}

				{!loading && !error && categories.length === 0 && (
					<div className='text-center py-8'>
						<p className='text-gray-600'>Nenhuma categoria encontrada.</p>
					</div>
				)}
			</section>

			{/* Resultados da busca ou Mais procurados da semana */}
			{selectedCategory ? (
				<section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
					<div className='flex items-center justify-between mb-4 sm:mb-6'>
						<h2 className='text-xl sm:text-2xl font-bold font-montserrat'>
							Resultados da busca - {selectedCategoryName}
						</h2>
						<button
							onClick={handleBackToHome}
							className='text-magenta1 font-semibold hover:underline transition-colors duration-200'
						>
							Voltar ao início
						</button>
					</div>

					{productsLoading && (
						<div className='flex justify-center items-center py-8'>
							<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue1'></div>
							<span className='ml-2 text-gray-600'>Carregando produtos...</span>
						</div>
					)}

					{productsError && (
						<div className='text-center py-8'>
							<p className='text-red-600 mb-4'>Erro ao carregar produtos: {productsError}</p>
							<button
								onClick={() => window.location.reload()}
								className='bg-blue1 text-white px-4 py-2 rounded hover:bg-blue2 transition-colors'
							>
								Tentar novamente
							</button>
						</div>
					)}

					{!productsLoading && !productsError && filteredProducts.length > 0 && (
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6'>
							{filteredProducts.map((product) => (
								<ProductCardWithFavorites
									key={product.id}
									image={product.image}
									title={product.name}
									description={product.description}
									price={product.price.toFixed(2).replace('.', ',')}
									actionLabel='Quero ver!'
									onAction={() => handleViewProduct(product.id)}
									product={product}
									showAddToCart={true}
								/>
							))}
						</div>
					)}

					{!productsLoading && !productsError && filteredProducts.length === 0 && (
						<div className='text-center py-8'>
							<p className='text-gray-600'>Nenhum produto encontrado nesta categoria.</p>
						</div>
					)}
				</section>
			) : (
				<section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
					<h2 className='text-xl sm:text-2xl font-bold font-montserrat mb-4 sm:mb-6'>
						Mais procurados da semana
					</h2>

					{productsLoading && (
						<div className='flex justify-center items-center py-8'>
							<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue1'></div>
							<span className='ml-2 text-gray-600'>Carregando produtos...</span>
						</div>
					)}

					{productsError && (
						<div className='text-center py-8'>
							<p className='text-red-600 mb-4'>Erro ao carregar produtos: {productsError}</p>
							<button
								onClick={() => window.location.reload()}
								className='bg-blue1 text-white px-4 py-2 rounded hover:bg-blue2 transition-colors'
							>
								Tentar novamente
							</button>
						</div>
					)}

					{!productsLoading && !productsError && randomProducts.length > 0 && (
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6'>
							{randomProducts.map((product) => (
								<ProductCardWithFavorites
									key={product.id}
									image={product.image}
									title={product.name}
									description={product.description}
									price={product.price.toFixed(2).replace('.', ',')}
									actionLabel='Quero ver!'
									onAction={() => handleViewProduct(product.id)}
									product={product}
									showAddToCart={true}
								/>
							))}
						</div>
					)}

					{!productsLoading && !productsError && randomProducts.length === 0 && (
						<div className='text-center py-8'>
							<p className='text-gray-600'>Nenhum produto encontrado.</p>
						</div>
					)}
				</section>
			)}

			{/* Newsletter */}
			<section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
				<NewsletterInput />
			</section>

			{/* FAQ */}
			<section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
				<h2 className='text-xl sm:text-2xl font-bold font-montserrat text-center mb-2'>
					Dúvidas frequentes
				</h2>
				<p className='text-center text-gray-700 mb-6 text-sm sm:text-base'>
					Antes de entrar em contato, verifique se sua dúvida está respondida em nossa FAQ!
				</p>
				<Accordion
					items={[
						{
							title: 'Como posso fazer devoluções de produtos na Zoop?',
							content:
								'As devoluções são simples! Basta trazer o item não utilizado com a nota fiscal para nossa loja dentro de 30 dias para troca ou reembolso.',
						},
						{
							title: 'A Zoop oferece programa de fidelidade para clientes?',
							content:
								'Sim! Consulte nossas condições para participar do programa de fidelidade e ganhar benefícios exclusivos.',
						},
						{
							title: 'Posso comprar online e retirar na loja física da Zoop?',
							content:
								'Sim! Você pode comprar online e escolher a opção de retirada em loja física no checkout.',
						},
						{
							title: 'A Zoop oferece garantia para seus produtos?',
							content:
								'Sim, todos os produtos possuem garantia conforme especificado no momento da compra.',
						},
					]}
				/>
			</section>
		</div>
	);
}
