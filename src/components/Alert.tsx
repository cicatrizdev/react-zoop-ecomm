import React from 'react';

interface AlertProps {
	type?: 'success' | 'error' | 'info';
	children: React.ReactNode;
}

const typeClasses = {
	success: 'bg-green3 border-green2 text-blue1',
	error: 'bg-red-100 border-red-400 text-red-700',
	info: 'bg-blue3 border-blue2 text-blue1',
};

const Alert: React.FC<AlertProps> = ({ type = 'info', children }) => (
	<div
		className={`border-l-4 p-3 sm:p-4 rounded font-montserrat text-xs sm:text-sm leading-relaxed ${typeClasses[type]}`}
	>
		{children}
	</div>
);

export default Alert;
