import { Link } from 'react-router-dom';

export function Contact() {
	return (
		<div className='min-h-screen bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16'>
				<div className='max-w-md mx-auto'>
					<h1 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center'>
						Contact Us
					</h1>
					<form className='space-y-4 sm:space-y-6'>
						<div>
							<label
								htmlFor='name'
								className='block text-sm font-medium text-gray-700 mb-1'
							>
								Name
							</label>
							<input
								type='text'
								id='name'
								className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base transition-colors duration-200'
							/>
						</div>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-700 mb-1'
							>
								Email
							</label>
							<input
								type='email'
								id='email'
								className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base transition-colors duration-200'
							/>
						</div>
						<div>
							<label
								htmlFor='message'
								className='block text-sm font-medium text-gray-700 mb-1'
							>
								Message
							</label>
							<textarea
								id='message'
								rows={4}
								className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base transition-colors duration-200 resize-vertical'
							></textarea>
						</div>
						<button
							type='submit'
							className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200'
						>
							Send Message
						</button>
					</form>
					<div className='mt-6 sm:mt-8 text-center'>
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
