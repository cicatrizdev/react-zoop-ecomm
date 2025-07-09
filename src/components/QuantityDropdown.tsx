import React from 'react';

interface QuantityDropdownProps {
	value: number;
	onChange: (value: number) => void;
	min?: number;
	max?: number;
}

const QuantityDropdown: React.FC<QuantityDropdownProps> = ({
	value,
	onChange,
	min = 1,
	max = 5,
}) => {
	return (
		<div className='inline-block'>
			<label className='block text-sm font-montserrat text-blue1 mb-1'>
				Quantidade
			</label>
			<select
				className='w-24 sm:w-32 border border-gray2 rounded px-2 sm:px-3 py-2 font-montserrat focus:outline-none focus:ring-2 focus:ring-magenta1 bg-white text-sm sm:text-base transition-colors duration-200'
				value={value}
				onChange={e => onChange(Number(e.target.value))}
			>
				{Array.from({ length: max - min + 1 }, (_, i) => min + i).map(qty => (
					<option key={qty} value={qty}>
						{qty}
					</option>
				))}
			</select>
		</div>
	);
};

export default QuantityDropdown;
