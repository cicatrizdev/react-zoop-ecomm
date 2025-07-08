import React from 'react';

type SearchInputProps = {
	placeholder?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, value, onChange }) => (
	<input
		type='text'
		placeholder={placeholder || 'Digite aqui o produto que você busca'}
		value={value}
		onChange={onChange}
		className='w-full border border-gray2 rounded px-3 sm:px-4 py-2 font-montserrat focus:outline-none focus:ring-2 focus:ring-magenta1 bg-white text-sm sm:text-base transition-colors duration-200'
	/>
);

export default SearchInput;
