import React from 'react';

const orderSummary = [
	{
		name: 'Notebook Samsung NP550XDA KU1BR',
		price: 2800.0,
		quantity: 1,
	},
	{
		name: 'Mouse Logitech M170',
		price: 80.0,
		quantity: 2,
	},
];

const total = orderSummary.reduce(
	(sum, item) => sum + item.price * item.quantity,
	0
);

export default function Checkout() {
	return (
		<div className='min-h-[70vh] flex flex-col items-center py-8 px-4 bg-[#f5f8fc]'>
			<div className='w-full max-w-5xl bg-white rounded-lg shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-10'>
				{/* Formulário do cliente */}
				<form className='flex-1 flex flex-col gap-4'>
					<h1 className='text-2xl md:text-3xl font-bold text-[#1a3565] mb-4'>
						Checkout
					</h1>
					<input
						type='text'
						placeholder='Nome completo'
						className='border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e63963]'
					/>
					<input
						type='email'
						placeholder='E-mail'
						className='border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e63963]'
					/>
					<input
						type='text'
						placeholder='Endereço'
						className='border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e63963]'
					/>
					<div className='flex gap-4'>
						<input
							type='text'
							placeholder='Cidade'
							className='border rounded px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-[#e63963]'
						/>
						<input
							type='text'
							placeholder='UF'
							className='border rounded px-4 py-2 w-1/4 focus:outline-none focus:ring-2 focus:ring-[#e63963]'
						/>
						<input
							type='text'
							placeholder='CEP'
							className='border rounded px-4 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-[#e63963]'
						/>
					</div>
					<input
						type='tel'
						placeholder='Telefone'
						className='border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e63963]'
					/>
					<button
						type='submit'
						className='mt-4 bg-[#e63963] hover:bg-[#c72d53] text-white font-bold py-3 px-8 rounded transition text-lg'
					>
						Finalizar pedido
					</button>
				</form>
				{/* Resumo do pedido */}
				<div className='flex-1 bg-[#f5f8fc] rounded-lg p-6 flex flex-col gap-4 border border-gray-200'>
					<h2 className='text-xl font-bold text-[#1a3565] mb-2'>
						Resumo do pedido
					</h2>
					{orderSummary.map((item, idx) => (
						<div
							key={idx}
							className='flex justify-between items-center border-b pb-2 last:border-b-0'
						>
							<span className='text-[#1a3565]'>
								{item.name}{' '}
								<span className='text-xs text-gray-500'>x{item.quantity}</span>
							</span>
							<span className='text-[#e63963] font-bold'>
								{(item.price * item.quantity).toLocaleString('pt-BR', {
									style: 'currency',
									currency: 'BRL',
								})}
							</span>
						</div>
					))}
					<div className='flex justify-between items-center mt-4'>
						<span className='text-lg font-bold text-[#1a3565]'>Total:</span>
						<span className='text-2xl font-bold text-[#e63963]'>
							{total.toLocaleString('pt-BR', {
								style: 'currency',
								currency: 'BRL',
							})}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
