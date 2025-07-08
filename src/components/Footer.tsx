import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo2 from '../assets/logo-2.png';

const Footer: React.FC = () => (
	<footer className='bg-blue1 text-white font-montserrat mt-12'>
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
			{/* Logo e descrição */}
			<div className='sm:col-span-2 lg:col-span-1'>
				<div className='flex items-center gap-2 mb-3'>
					<img src={logo2} alt='Zoop Logo' className='h-8 w-auto' />
					<div className='w-12 h-2 bg-blue2 rounded-full ml-1' />
				</div>
				<p className='text-sm leading-relaxed'>
					O jeito mais prático e rápido de realizar os seus desejos.
				</p>
			</div>
			{/* Institucional */}
			<div>
				<h4 className='font-semibold mb-3 text-base'>Institucional</h4>
				<ul className='space-y-2 text-sm'>
					<li>
						<a href='/nossa-historia' className='hover:underline transition-colors duration-200'>
							Nossa história
						</a>
					</li>
					<li>
						<a href='/carreiras' className='hover:underline transition-colors duration-200'>
							Carreiras
						</a>
					</li>
					<li>
						<a href='/nossa-loja' className='hover:underline transition-colors duration-200'>
							Nossa loja
						</a>
					</li>
				</ul>
			</div>
			{/* SAC */}
			<div>
				<h4 className='font-semibold mb-3 text-base'>Central de atendimento</h4>
				<p className='text-sm'>SAC 4003-4040</p>
			</div>
			{/* Redes sociais */}
			<div>
				<h4 className='font-semibold mb-3 text-base'>Redes Sociais</h4>
				<p className='text-sm mb-3'>Acesse nossas redes:</p>
				<div className='flex gap-4'>
					<a
						href='#'
						aria-label='Instagram'
						className='hover:text-magenta1 transition-colors duration-200'
					>
						<InstagramIcon sx={{ fontSize: 24 }} />
					</a>
					<a
						href='#'
						aria-label='Facebook'
						className='hover:text-magenta1 transition-colors duration-200'
					>
						<FacebookIcon sx={{ fontSize: 24 }} />
					</a>
					<a
						href='#'
						aria-label='WhatsApp'
						className='hover:text-magenta1 transition-colors duration-200'
					>
						<WhatsAppIcon sx={{ fontSize: 24 }} />
					</a>
				</div>
			</div>
		</div>
		<div className='bg-graphite text-center text-xs py-3 px-4'>
			Desenvolvido por Alura. Projeto fictício sem fins comerciais.
		</div>
	</footer>
);

export default Footer;
