import { cn } from '@/app/utils';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface MagicBorderButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	outerClassName?: string;
	innerClassName?: string;
	icon?: ReactNode;
	iconPosition?: 'left' | 'right' | 'r' | 'l';
}

export const MagicBorderButton: FC<MagicBorderButtonProps> = ({
	children,
	className,
	outerClassName,
	innerClassName,
	iconPosition = 'left',
	icon,
	...props
}) => {
	return (
		<button
			className={cn(
				'relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none group',
				className,
			)}
			{...props}
		>
			<span
				className={cn(
					'absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]',
					outerClassName,
				)}
			/>
			<span
				className={cn(
					'inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 text-sm font-medium text-white backdrop-blur-3xl gap-2',
					innerClassName,
				)}
			>
				{icon && iconPosition === 'left' && icon}
				{children}
				{icon && iconPosition === 'right' && icon}
			</span>
		</button>
	);
};

export default MagicBorderButton;
