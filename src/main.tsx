import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {
	CategoriesProvider,
	ProductsProvider,
	CartProvider,
	FavoritesProvider,
	SearchProvider,
} from './providers';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<CategoriesProvider>
			<ProductsProvider>
				<CartProvider>
					<FavoritesProvider>
						<SearchProvider>
							<App />
						</SearchProvider>
					</FavoritesProvider>
				</CartProvider>
			</ProductsProvider>
		</CategoriesProvider>
	</StrictMode>
);
