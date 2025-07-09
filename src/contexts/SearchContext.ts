import { createContext } from 'react';

interface SearchContextType {
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	clearSearch: () => void;
}

export const SearchContext = createContext<SearchContextType | undefined>(
	undefined
);
