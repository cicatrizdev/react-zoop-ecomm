import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { OurHistory } from './pages/OurHistory';
import { Careers } from './pages/Careers';
import { OurStore } from './pages/OurStore';
import { AboutUs } from './pages/AboutUs';
import ProductDetail from './pages/ProductDetail';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='contact' element={<Contact />} />
					<Route path='nossa-historia' element={<OurHistory />} />
					<Route path='carreiras' element={<Careers />} />
					<Route path='nossa-loja' element={<OurStore />} />
					<Route path='sobre-nos' element={<AboutUs />} />
					<Route path='product/:id' element={<ProductDetail />} />
					<Route path='favorites' element={<Favorites />} />
					<Route path='cart' element={<Cart />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
