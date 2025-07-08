import { Link } from 'react-router-dom';

export function About() {
	return (
		<div className='min-h-screen bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16'>
				<div className='max-w-3xl mx-auto'>
					<h1 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center sm:text-left'>
						About Us
					</h1>
					<div className='prose prose-sm sm:prose-base lg:prose-lg text-gray-600'>
						<p className='text-sm sm:text-base leading-relaxed'>
							This is a sample React application built with modern web technologies:
						</p>
						<ul className='space-y-2 text-sm sm:text-base'>
							<li>
								<strong>Vite</strong> - Fast build tool and development server
							</li>
							<li>
								<strong>React</strong> - Popular JavaScript library for building user interfaces
							</li>
							<li>
								<strong>TypeScript</strong> - Type-safe JavaScript that scales
							</li>
							<li>
								<strong>React Router</strong> - Declarative routing for React applications
							</li>
							<li>
								<strong>Tailwind CSS</strong> - Utility-first CSS framework
							</li>
						</ul>
						<p className='text-sm sm:text-base leading-relaxed'>
							This setup provides a solid foundation for building modern web applications with
							excellent developer experience and performance.
						</p>
					</div>
					<div className='mt-6 sm:mt-8 text-center sm:text-left'>
						<Link
							to='/'
							className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition-colors duration-200'
						>
							← Back to Home
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
