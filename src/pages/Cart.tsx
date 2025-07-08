import { useCart } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Cart() {
	const { items, totalItems, totalPrice, removeFromCart, updateQuantity, clearCart } = useCart();
	const navigate = useNavigate();
	const [isOrderCompleted, setIsOrderCompleted] = useState(false);
	const [orderSummary, setOrderSummary] = useState({ items: 0, total: 0 });

	const handleFinalizePurchase = () => {
		// Preserva os valores do carrinho para o resumo
		setOrderSummary({ items: totalItems, total: totalPrice });

		// Simula o processamento do pedido
		setTimeout(() => {
			setIsOrderCompleted(true);
			clearCart(); // Limpa o carrinho após finalizar
		}, 1000);
	};

	const handleContinueShopping = () => {
		navigate('/');
	};

	const handleBackToHome = () => {
		navigate('/');
	};

	// Tela de sucesso do pedido
	if (isOrderCompleted) {
		return (
			<div className='min-h-[70vh] flex flex-col items-center py-8 px-4 bg-[#f5f8fc]'>
				<div className='w-full max-w-2xl bg-white rounded-lg shadow-md p-6 md:p-10 text-center'>
					<div className='mb-6'>
						<div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
							<span className='text-3xl text-green-600'>✓</span>
						</div>
						<h1 className='text-2xl md:text-3xl font-bold text-[#1a3565] mb-2'>
							Pedido Finalizado com Sucesso!
						</h1>
						<p className='text-gray-600 mb-6'>
							Obrigado por sua compra. Seu pedido foi processado e será enviado em breve.
						</p>
					</div>

					<div className='bg-[#f5f8fc] rounded-lg p-6 mb-6 text-left'>
						<h2 className='text-xl font-bold text-[#1a3565] mb-4'>Resumo do Pedido</h2>
						<div className='space-y-3'>
							<div className='flex justify-between items-center'>
								<span className='text-[#1a3565]'>Número do Pedido:</span>
								<span className='font-bold text-[#e63963]'>
									#{Math.random().toString(36).substr(2, 9).toUpperCase()}
								</span>
							</div>
							<div className='flex justify-between items-center'>
								<span className='text-[#1a3565]'>Data:</span>
								<span className='font-bold text-[#1a3565]'>
									{new Date().toLocaleDateString('pt-BR')}
								</span>
							</div>
							<div className='flex justify-between items-center'>
								<span className='text-[#1a3565]'>Total de Itens:</span>
								<span className='font-bold text-[#1a3565]'>{orderSummary.items}</span>
							</div>
							<div className='flex justify-between items-center border-t pt-3'>
								<span className='text-lg font-bold text-[#1a3565]'>Valor Total:</span>
								<span className='text-xl font-bold text-[#e63963]'>
									{orderSummary.total.toLocaleString('pt-BR', {
										style: 'currency',
										currency: 'BRL',
									})}
								</span>
							</div>
						</div>
					</div>

					<button
						onClick={handleBackToHome}
						className='bg-[#e63963] hover:bg-[#c72d53] text-white font-bold py-3 px-8 rounded transition text-lg'
					>
						Voltar à Home
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className='min-h-[70vh] flex flex-col items-center py-8 px-4 bg-[#f5f8fc]'>
			<div className='w-full max-w-4xl bg-white rounded-lg shadow-md p-6 md:p-10'>
				<h1 className='text-2xl md:text-3xl font-bold text-[#1a3565] mb-6'>Seu carrinho</h1>

				{items.length === 0 ? (
					<div className='text-center py-8'>
						<p className='text-[#1a3565] mb-4'>Seu carrinho está vazio.</p>
						<button
							onClick={handleContinueShopping}
							className='bg-[#e63963] hover:bg-[#c72d53] text-white font-bold py-3 px-8 rounded transition text-lg'
						>
							Continuar comprando
						</button>
					</div>
				) : (
					<div className='flex flex-col gap-6'>
						{items.map((item) => (
							<div
								key={item.id}
								className='flex flex-col md:flex-row items-center gap-4 border-b pb-4 last:border-b-0'
							>
								<img
									src={item.image}
									alt={item.name}
									className='w-24 h-24 object-contain rounded'
								/>
								<div className='flex-1 flex flex-col gap-1'>
									<span className='font-semibold text-[#1a3565]'>{item.name}</span>
									<span className='text-[#e63963] font-bold'>
										{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
									</span>
								</div>
								<div className='flex items-center gap-2'>
									<span className='text-[#1a3565]'>Qtd:</span>
									<select
										value={item.quantity}
										onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
										className='w-16 border rounded px-2 py-1 text-center'
									>
										{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((q) => (
											<option key={q} value={q}>
												{q}
											</option>
										))}
									</select>
									<button
										onClick={() => removeFromCart(item.id)}
										className='text-red-600 hover:text-red-800 ml-2'
										title='Remover do carrinho'
									>
										🗑️
									</button>
								</div>
								<div className='font-bold text-[#1a3565] min-w-[80px] text-right'>
									{(item.price * item.quantity).toLocaleString('pt-BR', {
										style: 'currency',
										currency: 'BRL',
									})}
								</div>
							</div>
						))}

						<div className='flex flex-col md:flex-row justify-between items-center mt-6 gap-4'>
							<div className='flex flex-col gap-2'>
								<span className='text-lg text-[#1a3565]'>Total de itens: {totalItems}</span>
								<span className='text-xl font-bold text-[#1a3565]'>Subtotal:</span>
							</div>
							<span className='text-2xl font-bold text-[#e63963]'>
								{totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
							</span>
						</div>

						<div className='flex flex-col md:flex-row gap-4 mt-6'>
							<button
								onClick={clearCart}
								className='bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded transition text-lg'
							>
								Limpar carrinho
							</button>
							<button
								onClick={handleFinalizePurchase}
								className='bg-[#e63963] hover:bg-[#c72d53] text-white font-bold py-3 px-8 rounded transition text-lg flex-1'
							>
								Finalizar Compra
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
