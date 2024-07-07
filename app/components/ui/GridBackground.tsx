import { cn } from '@/app/utils';
import { FC } from 'react';

interface GridBackgroundProps {
	outerClasses?: string;
	innerClasses?: string;
}

export const GridBackground: FC<GridBackgroundProps> = ({
	outerClasses,
	innerClasses,
}) => {
	return (
		<div
			className={cn(
				'h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] relative flex items-center justify-center',
				outerClasses,
			)}
		>
			<div
				className={cn(
					'absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]',
					innerClasses,
				)}
			/>
		</div>
	);
};

export default GridBackground;
