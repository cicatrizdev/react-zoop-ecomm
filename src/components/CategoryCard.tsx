import React from 'react';
import type { ReactNode } from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

interface CategoryCardProps {
	image: string | ReactNode;
	label: string;
	onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, label, onClick }) => (
	<div
		className='flex flex-col items-center border-2 border-gray2 rounded-lg p-3 sm:p-4 w-full max-w-32 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer'
		style={{ userSelect: 'none' }}
		onClick={onClick}
	>
		{typeof image === 'string' ? (
			<img
				src={image}
				alt={label}
				className='w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg mb-2'
				onError={(e) => {
					const target = e.target as HTMLImageElement;
					target.style.display = 'none';
					target.nextElementSibling?.classList.remove('hidden');
				}}
			/>
		) : null}
		{typeof image === 'string' && (
			<div className='w-12 h-12 sm:w-16 sm:h-16 items-center justify-center mb-2 bg-gray-100 rounded-lg hidden'>
				<ShoppingBagIcon sx={{ fontSize: { xs: 24, sm: 32 }, color: '#1E3A8A' }} />
			</div>
		)}
		{typeof image !== 'string' && (
			<div className='w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-2'>{image}</div>
		)}
		<span className='font-montserrat text-blue1 text-xs sm:text-sm font-semibold text-center leading-tight'>
			{label}
		</span>
	</div>
);

export default CategoryCard;
