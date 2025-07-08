import React from 'react';

export const Careers: React.FC = () => {
	return (
		<div className='max-w-4xl mx-auto px-4 py-8'>
			<h1 className='text-3xl font-bold text-gray-800 mb-6 font-montserrat'>Carreiras</h1>

			<div className='prose prose-lg max-w-none'>
				<p className='text-gray-600 leading-relaxed mb-6'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>

				<h2 className='text-2xl font-semibold text-gray-800 mb-4 mt-8 font-montserrat'>
					Por que trabalhar conosco?
				</h2>

				<p className='text-gray-600 leading-relaxed mb-6'>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
					nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>

				<h2 className='text-2xl font-semibold text-gray-800 mb-4 mt-8 font-montserrat'>
					Nossas Vagas
				</h2>

				<div className='bg-gray-50 p-6 rounded-lg mb-6'>
					<h3 className='text-xl font-semibold text-gray-800 mb-3 font-montserrat'>
						Desenvolvedor Frontend
					</h3>
					<p className='text-gray-600 mb-3'>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
					</p>
					<button className='bg-blue1 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200'>
						Candidatar-se
					</button>
				</div>

				<div className='bg-gray-50 p-6 rounded-lg mb-6'>
					<h3 className='text-xl font-semibold text-gray-800 mb-3 font-montserrat'>
						Desenvolvedor Backend
					</h3>
					<p className='text-gray-600 mb-3'>
						Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
						consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
					</p>
					<button className='bg-blue1 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200'>
						Candidatar-se
					</button>
				</div>

				<div className='bg-gray-50 p-6 rounded-lg mb-6'>
					<h3 className='text-xl font-semibold text-gray-800 mb-3 font-montserrat'>
						Designer UX/UI
					</h3>
					<p className='text-gray-600 mb-3'>
						Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
						velit, sed quia non numquam eius modi tempora incidunt.
					</p>
					<button className='bg-blue1 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200'>
						Candidatar-se
					</button>
				</div>

				<h2 className='text-2xl font-semibold text-gray-800 mb-4 mt-8 font-montserrat'>
					Benefícios
				</h2>

				<ul className='list-disc list-inside text-gray-600 space-y-2 mb-6'>
					<li>Plano de saúde completo</li>
					<li>Vale refeição</li>
					<li>Gympass</li>
					<li>Horário flexível</li>
					<li>Home office híbrido</li>
					<li>Plano de carreira</li>
				</ul>

				<h2 className='text-2xl font-semibold text-gray-800 mb-4 mt-8 font-montserrat'>
					Processo Seletivo
				</h2>

				<p className='text-gray-600 leading-relaxed mb-6'>
					Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
					consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et
					accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
					atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
					provident.
				</p>

				<p className='text-gray-600 leading-relaxed'>
					Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
					fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
					soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat
					facere possimus.
				</p>
			</div>
		</div>
	);
};
