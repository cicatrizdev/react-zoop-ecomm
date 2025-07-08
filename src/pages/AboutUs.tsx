import React from 'react';
import { Link } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SecurityIcon from '@mui/icons-material/Security';

export const AboutUs: React.FC = () => {
	return (
		<div className='max-w-6xl mx-auto px-4 py-8'>
			<h1 className='text-3xl font-bold text-gray-800 mb-6 font-montserrat'>Sobre Nós</h1>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
				{/* Conteúdo Principal */}
				<div className='space-y-6'>
					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-semibold text-gray-800 mb-4 font-montserrat'>
							Quem Somos
						</h2>

						<p className='text-gray-600 leading-relaxed mb-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>

						<p className='text-gray-600 leading-relaxed'>
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
							officia deserunt mollit anim id est laborum.
						</p>
					</div>

					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-semibold text-gray-800 mb-4 font-montserrat'>
							Nossa Missão
						</h2>

						<p className='text-gray-600 leading-relaxed mb-4'>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
							architecto beatae vitae dicta sunt explicabo.
						</p>

						<p className='text-gray-600 leading-relaxed'>
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
							consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
						</p>
					</div>

					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-semibold text-gray-800 mb-4 font-montserrat'>
							Nossa Visão
						</h2>

						<p className='text-gray-600 leading-relaxed mb-4'>
							Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
							molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
						</p>

						<p className='text-gray-600 leading-relaxed'>
							At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
							voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.
						</p>
					</div>
				</div>

				{/* Valores e Diferenciais */}
				<div className='space-y-6'>
					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-semibold text-gray-800 mb-4 font-montserrat'>
							Nossos Valores
						</h2>

						<div className='space-y-4'>
							<div className='flex items-start space-x-3'>
								<FavoriteIcon className='text-red-500 mt-1' />
								<div>
									<h3 className='font-semibold text-gray-800'>Amor pelos Animais</h3>
									<p className='text-gray-600'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
									</p>
								</div>
							</div>

							<div className='flex items-start space-x-3'>
								<SecurityIcon className='text-green-500 mt-1' />
								<div>
									<h3 className='font-semibold text-gray-800'>Qualidade e Segurança</h3>
									<p className='text-gray-600'>
										Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
										aliquip.
									</p>
								</div>
							</div>

							<div className='flex items-start space-x-3'>
								<PeopleIcon className='text-blue-500 mt-1' />
								<div>
									<h3 className='font-semibold text-gray-800'>Atendimento Personalizado</h3>
									<p className='text-gray-600'>
										Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
									</p>
								</div>
							</div>

							<div className='flex items-start space-x-3'>
								<EmojiEventsIcon className='text-yellow-500 mt-1' />
								<div>
									<h3 className='font-semibold text-gray-800'>Excelência</h3>
									<p className='text-gray-600'>
										Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-semibold text-gray-800 mb-4 font-montserrat'>
							Nossos Diferenciais
						</h2>

						<ul className='space-y-2 text-gray-600'>
							<li className='flex items-center space-x-2'>
								<div className='w-2 h-2 bg-green-500 rounded-full'></div>
								<span>Lorem ipsum dolor sit amet</span>
							</li>
							<li className='flex items-center space-x-2'>
								<div className='w-2 h-2 bg-green-500 rounded-full'></div>
								<span>Consectetur adipiscing elit</span>
							</li>
							<li className='flex items-center space-x-2'>
								<div className='w-2 h-2 bg-green-500 rounded-full'></div>
								<span>Sed do eiusmod tempor</span>
							</li>
							<li className='flex items-center space-x-2'>
								<div className='w-2 h-2 bg-green-500 rounded-full'></div>
								<span>Incididunt ut labore</span>
							</li>
							<li className='flex items-center space-x-2'>
								<div className='w-2 h-2 bg-green-500 rounded-full'></div>
								<span>Dolore magna aliqua</span>
							</li>
							<li className='flex items-center space-x-2'>
								<div className='w-2 h-2 bg-green-500 rounded-full'></div>
								<span>Ut enim ad minim veniam</span>
							</li>
						</ul>
					</div>

					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-semibold text-gray-800 mb-4 font-montserrat'>
							Compromisso Social
						</h2>

						<p className='text-gray-600 leading-relaxed mb-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation.
						</p>

						<ul className='space-y-2 text-gray-600'>
							<li className='flex items-center space-x-2'>
								<div className='w-2 h-2 bg-blue-500 rounded-full'></div>
								<span>Ullamco laboris nisi ut aliquip</span>
							</li>
							<li className='flex items-center space-x-2'>
								<div className='w-2 h-2 bg-blue-500 rounded-full'></div>
								<span>Ex ea commodo consequat</span>
							</li>
							<li className='flex items-center space-x-2'>
								<div className='w-2 h-2 bg-blue-500 rounded-full'></div>
								<span>Duis aute irure dolor</span>
							</li>
							<li className='flex items-center space-x-2'>
								<div className='w-2 h-2 bg-blue-500 rounded-full'></div>
								<span>Reprehenderit in voluptate</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Botão Voltar */}
			<div className='mt-8 text-center'>
				<Link
					to='/'
					className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue1 hover:bg-blue-600 transition-colors duration-200'
				>
					← Voltar para Home
				</Link>
			</div>
		</div>
	);
};
