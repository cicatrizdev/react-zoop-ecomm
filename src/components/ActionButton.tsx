import React from 'react';

interface ActionButtonProps {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary' | 'danger';
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
}

const variantClasses = {
	primary: 'bg-magenta1 hover:bg-magenta2 text-white',
	secondary: 'bg-blue1 hover:bg-blue2 text-white',
	danger: 'bg-red-500 hover:bg-red-600 text-white',
};

const ActionButton: React.FC<ActionButtonProps> = ({
	children,
	variant = 'primary',
	onClick,
	type = 'button',
}) => (
	<button
		className={`font-montserrat rounded px-3 sm:px-4 py-2 transition-colors duration-200 font-semibold text-sm sm:text-base ${variantClasses[variant]}`}
		onClick={onClick}
		type={type}
	>
		{children}
	</button>
);

export default ActionButton;
