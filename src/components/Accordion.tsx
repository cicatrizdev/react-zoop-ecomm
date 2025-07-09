import React, { useState } from 'react';

interface AccordionItem {
	title: string;
	content: React.ReactNode;
}

interface AccordionProps {
	items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggle = (idx: number) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};

	return (
		<div className='space-y-3'>
			{items.map((item, idx) => (
				<div
					key={idx}
					className='border border-blue2 rounded overflow-hidden bg-white shadow-sm'
				>
					<button
						className='w-full text-left px-3 sm:px-4 py-3 sm:py-4 font-montserrat font-semibold text-white bg-blue2/80 hover:bg-blue2 transition-colors duration-200 focus:outline-none text-sm sm:text-base'
						onClick={() => toggle(idx)}
					>
						{item.title}
					</button>
					{openIndex === idx && (
						<div className='px-3 sm:px-4 py-3 sm:py-4 text-blue1 bg-blue3 font-montserrat text-xs sm:text-sm border-t border-blue2 leading-relaxed'>
							{item.content}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default Accordion;
