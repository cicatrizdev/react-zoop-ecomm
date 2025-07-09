import { useState, type ReactNode } from 'react';
import { SearchContext } from '../contexts/SearchContext';

interface SearchProviderProps {
	children: ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
	const [searchTerm, setSearchTerm] = useState('');

	const clearSearch = () => {
		setSearchTerm('');
	};

	return (
		<SearchContext.Provider value={{ searchTerm, setSearchTerm, clearSearch }}>
			{children}
		</SearchContext.Provider>
	);
};
