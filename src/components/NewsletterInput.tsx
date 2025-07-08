import React from 'react';

type NewsletterInputProps = {
	placeholder?: string;
	buttonText?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit?: () => void;
};

const NewsletterInput: React.FC<NewsletterInputProps> = ({
	placeholder = 'Digite seu melhor endereço de email',
	buttonText = 'Inscrever',
	value,
	onChange,
	onSubmit,
}) => (
	<div className='flex flex-col sm:flex-row gap-2 w-full max-w-md'>
		<input
			type='email'
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			className='flex-1 border border-gray2 rounded px-3 sm:px-4 py-2 font-montserrat focus:outline-none focus:ring-2 focus:ring-magenta1 bg-white text-sm sm:text-base'
		/>
		<button
			className='bg-magenta1 text-white font-montserrat rounded px-4 sm:px-6 py-2 hover:bg-magenta2 transition-colors duration-200 text-sm sm:text-base'
			onClick={onSubmit}
			type='button'
		>
			{buttonText}
		</button>
	</div>
);

export default NewsletterInput;
