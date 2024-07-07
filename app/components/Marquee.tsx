import React from 'react';

interface MarqueeProps {
	children: React.ReactNode;
	direction: 'left' | 'right' | 'up' | 'down';
}

const Marquee: React.FC<MarqueeProps> = ({ direction = 'left', children }) => {
	let animationClass;

	switch (direction) {
		case 'up':
			animationClass = 'animate-scroll-up';
			break;
		case 'down':
			animationClass = 'animate-scroll-down';
			break;
		case 'left':
			animationClass = 'animate-scroll-left';
			break;
		case 'right':
			animationClass = 'animate-scroll-right';
			break;
		default:
			animationClass = 'animate-scroll-left';
	}

	return (
		<div className="overflow-hidden whitespace-nowrap">
			<div className={`inline-block ${animationClass}`}>{children}</div>
		</div>
	);
};

export default Marquee;
