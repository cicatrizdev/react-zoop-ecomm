import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';

export const OurStore: React.FC = () => {
	return (
		<div className='max-w-6xl mx-auto px-4 py-8'>
			<h1 className='text-3xl font-bold text-gray-800 mb-6 font-montserrat'>
				Nossa Loja
			</h1>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
				{/* Informações da Loja */}
				<div className='space-y-6'>
					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-semibold text-gray-800 mb-4 font-montserrat'>
							Informações da Loja
						</h2>

						<div className='space-y-4'>
							<div className='flex items-start space-x-3'>
								<LocationOnIcon className='text-blue1 mt-1' />
								<div>
									<h3 className='font-semibold text-gray-800'>Endereço</h3>
									<p className='text-gray-600'>
										Rua das Flores, 1234
										<br />
										Jardim Botânico
										<br />
										São Paulo - SP, 01234-567
									</p>
								</div>
							</div>

							<div className='flex items-start space-x-3'>
								<PhoneIcon className='text-blue1 mt-1' />
								<div>
									<h3 className='font-semibold text-gray-800'>Telefone</h3>
									<p className='text-gray-600'>(11) 4003-4040</p>
								</div>
							</div>

							<div className='flex items-start space-x-3'>
								<EmailIcon className='text-blue1 mt-1' />
								<div>
									<h3 className='font-semibold text-gray-800'>E-mail</h3>
									<p className='text-gray-600'>loja@zoop.com.br</p>
								</div>
							</div>

							<div className='flex items-start space-x-3'>
								<AccessTimeIcon className='text-blue1 mt-1' />
								<div>
									<h3 className='font-semibold text-gray-800'>
										Horário de Funcionamento
									</h3>
									<p className='text-gray-600'>
										Segunda a Sexta: 9h às 18h
										<br />
										Sábado: 9h às 16h
										<br />
										Domingo: Fechado
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-semibold text-gray-800 mb-4 font-montserrat'>
							Como Chegar
						</h2>

						<div className='space-y-3 text-gray-600'>
							<p>
								<strong>Metrô:</strong> Estação Jardim Botânico (Linha Azul)
							</p>
							<p>
								<strong>Ônibus:</strong> Linhas 8000, 8001, 8002
							</p>
							<p>
								<strong>Carro:</strong> Estacionamento gratuito no local
							</p>
							<p>
								<strong>Uber/Táxi:</strong> Endereço facilmente localizável
							</p>
						</div>
					</div>

					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-semibold text-gray-800 mb-4 font-montserrat'>
							Sobre Nossa Loja
						</h2>

						<p className='text-gray-600 leading-relaxed mb-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>

						<p className='text-gray-600 leading-relaxed'>
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit
							anim id est laborum.
						</p>
					</div>
				</div>

				{/* Mapa Mock */}
				<div className='space-y-6'>
					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-semibold text-gray-800 mb-4 font-montserrat'>
							Localização
						</h2>

						{/* Mapa Mock */}
						<div className='bg-gray-200 rounded-lg h-96 mb-4 relative overflow-hidden'>
							<div className='absolute inset-0 flex items-center justify-center'>
								<div className='text-center'>
									<div className='w-16 h-16 bg-blue1 rounded-full flex items-center justify-center mx-auto mb-4'>
										<LocationOnIcon className='text-white text-2xl' />
									</div>
									<p className='text-gray-600 font-medium'>Mapa Interativo</p>
									<p className='text-gray-500 text-sm'>Clique para ampliar</p>
								</div>
							</div>

							{/* Elementos decorativos do mapa */}
							<div className='absolute top-4 left-4 w-8 h-8 bg-green-400 rounded-full opacity-60'></div>
							<div className='absolute top-12 right-8 w-6 h-6 bg-yellow-400 rounded-full opacity-60'></div>
							<div className='absolute bottom-8 left-12 w-4 h-4 bg-red-400 rounded-full opacity-60'></div>
							<div className='absolute bottom-16 right-4 w-10 h-10 bg-blue-400 rounded-full opacity-60'></div>

							{/* Linhas simulando ruas */}
							<div className='absolute top-1/2 left-0 right-0 h-1 bg-gray-300'></div>
							<div className='absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300'></div>
						</div>

						<button className='w-full bg-blue1 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium'>
							Abrir no Google Maps
						</button>
					</div>

					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-semibold text-gray-800 mb-4 font-montserrat'>
							Serviços Disponíveis
						</h2>

						<ul className='space-y-2 text-gray-600'>
							<li className='flex items-center space-x-2'>
								<div className='w-2 h-2 bg-green-500 rounded-full'></div>
								<span>Atendimento presencial</span>
							</li>
							<li className='flex items-center space-x-2'>
								<div className='w-2 h-2 bg-green-500 rounded-full'></div>
								<span>Retirada de pedidos online</span>
							</li>
							<li className='flex items-center space-x-2'>
								<div className='w-2 h-2 bg-green-500 rounded-full'></div>
								<span>Troca e devolução</span>
							</li>
							<li className='flex items-center space-x-2'>
								<div className='w-2 h-2 bg-green-500 rounded-full'></div>
								<span>Consultoria especializada</span>
							</li>
							<li className='flex items-center space-x-2'>
								<div className='w-2 h-2 bg-green-500 rounded-full'></div>
								<span>Wi-Fi gratuito</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
