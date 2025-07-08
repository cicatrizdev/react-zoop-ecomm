import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo1 from '../assets/logo-1.svg';
import { useFavorites, useCart } from '../hooks';

const Header: React.FC = () => {
	const { totalFavorites } = useFavorites();
	const { totalItems } = useCart();

	return (
		<header className='w-full flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-4 bg-white shadow-sm gap-4 sm:gap-0'>
			{/* Logo */}
			<Link
				to='/'
				className='flex items-center gap-2 hover:opacity-80 transition-opacity duration-200'
			>
				<img src={logo1} alt='Zoop Logo' className='h-8 w-auto' />
			</Link>

			{/* Busca - oculta em mobile, aparece em desktop */}
			<div className='hidden sm:flex flex-1 mx-8 max-w-lg'>
				<input
					type='text'
					placeholder='Digite aqui o produto que você busca'
					className='w-full border border-gray2 rounded px-4 py-2 font-montserrat focus:outline-none focus:ring-2 focus:ring-magenta1'
				/>
			</div>

			{/* Navegação e Ícones */}
			<div className='flex items-center gap-4 sm:gap-6 lg:gap-8'>
				{/* Navegação - oculta em mobile */}
				<nav className='hidden sm:flex items-center gap-6 lg:gap-8'>
					<Link
						to='/sobre-nos'
						className='text-blue1 font-montserrat hover:underline transition-colors duration-200'
					>
						Sobre nós
					</Link>
				</nav>

				{/* Ícones */}
				<div className='flex items-center gap-4 sm:gap-6'>
					<Link
						to='/favorites'
						className='text-blue1 hover:text-magenta1 transition-colors duration-200 relative'
						aria-label='Favoritos'
					>
						<FavoriteIcon sx={{ fontSize: { xs: 20, sm: 22 } }} />
						{totalFavorites > 0 && (
							<span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold'>
								{totalFavorites > 99 ? '99+' : totalFavorites}
							</span>
						)}
					</Link>
					<Link
						to='/cart'
						className='text-blue1 hover:text-magenta1 transition-colors duration-200 relative'
						aria-label='Carrinho'
					>
						<ShoppingCartIcon sx={{ fontSize: { xs: 20, sm: 22 } }} />
						{totalItems > 0 && (
							<span className='absolute -top-2 -right-2 bg-magenta1 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold'>
								{totalItems > 99 ? '99+' : totalItems}
							</span>
						)}
					</Link>
				</div>
			</div>

			{/* Busca mobile - aparece apenas em mobile */}
			<div className='w-full sm:hidden'>
				<input
					type='text'
					placeholder='Digite aqui o produto que você busca'
					className='w-full border border-gray2 rounded px-4 py-2 font-montserrat focus:outline-none focus:ring-2 focus:ring-magenta1'
				/>
			</div>
		</header>
	);
};

export default Header;
