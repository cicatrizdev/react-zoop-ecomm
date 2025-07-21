import React, { memo } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CelebrationIcon from '@mui/icons-material/Celebration';

interface WelcomeModalProps {
	open: boolean;
	onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = memo(({ open, onClose }) => {
	// console.log('CHAMOU A FUNÇÃO DE WELCOME MODAL');
	if (!open) return null;

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-blue1/20 p-4'>
			<div className='relative bg-blue3 rounded-2xl shadow-lg max-w-lg w-full p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center'>
				{/* Botão de fechar */}
				<button
					className='absolute top-2 right-2 sm:top-4 sm:right-4 text-blue1 hover:text-magenta1 focus:outline-none transition-colors duration-200'
					onClick={onClose}
					aria-label='Fechar'
				>
					<CloseIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />
				</button>
				{/* Ícone de festa */}
				<div className='flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-magenta1 mb-4 sm:mb-6'>
					<CelebrationIcon
						sx={{ fontSize: { xs: 30, sm: 40 }, color: '#E63B7A' }}
					/>
				</div>
				<h2 className='font-montserrat font-bold text-xl sm:text-2xl lg:text-3xl text-blue1 mb-3 sm:mb-4'>
					Boas-vindas ao Zoop!
				</h2>
				<p className='font-montserrat text-blue1 text-sm sm:text-base lg:text-lg mb-2 leading-relaxed'>
					Aqui você já começa com vantagem, utilize o
					<br className='hidden sm:block' />
					cupom <span className='font-bold'>BOASVINDAS15</span> e ganhe um
					desconto de
					<br className='hidden sm:block' />
					15% em sua primeira compra no site!
				</p>
			</div>
		</div>
	);
});

export default WelcomeModal;
