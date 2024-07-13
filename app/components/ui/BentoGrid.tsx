'use client';

import animationData from '@/app/data/lottie-confetti.json';
import { cn } from '@/app/utils';
import { FC, HTMLAttributes, ReactNode, useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import Lottie from 'react-lottie';
import Marquee from '../Marquee';
import { BackgroundGradientAnimation } from '@/app/components/ui';
import { GridGlobe } from './GridGlobe';
import MagicBorderButton from './MagicBorderButton';
import { backend, frontend } from '@/app/data';

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: ReactNode;
}) => {
	return (
		<div
			className={cn(
				'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
				className,
			)}
		>
			{children}
		</div>
	);
};

interface BentoGridItemProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	itemTitle?: string | ReactNode;
	description?: string | ReactNode;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
}

export const BentoGridItem: FC<BentoGridItemProps> = ({
	className,
	itemTitle,
	description,
	id,
	img,
	spareImg,
	imgClassName,
	titleClassName,
}) => {
	const [isCopied, setIsCopied] = useState(false);

	const lottieOptions = {
		loop: isCopied,
		autoplay: isCopied,
		animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	const handleCopy = () => {
		const text = 'abdullah.ryk94@gmail.com';
		navigator.clipboard.writeText(text).then(() => {
			setIsCopied(true);
		});
	};

	return (
		<div
			id={id}
			className={cn(
				'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4',
				className,
			)}
			style={{
				background: 'rgb(4,7,29)',
				backgroundColor:
					'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
			}}
		>
			<div
				className={cn('h-full', {
					'flex justify-center': id === '6',
				})}
			>
				<div className="w-full h-full absolute">
					{img && (
						<img
							src={img}
							alt={img}
							className={cn(imgClassName, 'object-cover object-center')}
						/>
					)}
				</div>
				<div
					className={cn('absolute right-0 -bottom-5', {
						'w-full opacity-80': id === '5',
					})}
				>
					{spareImg && (
						<img
							src={spareImg}
							alt={spareImg}
							className="object-cover object-center w-full h-full"
						/>
					)}
				</div>
				{id === '6' && (
					<BackgroundGradientAnimation>
						<div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" />
					</BackgroundGradientAnimation>
				)}
				<div
					className={cn(
						titleClassName,
						'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10',
					)}
				>
					<div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
						{description}
					</div>
					<div
						className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
					>
						{itemTitle}
					</div>

					{id === '2' && <GridGlobe />}
					{id === '3' && (
						<div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 h-full">
							<Marquee direction="down">
								<div className="flex flex-col gap-3 md:gap-3 lg:gap-8 h-full">
									{frontend.map((item, i) => (
										<span
											key={i}
											className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
										>
											{item}
										</span>
									))}
									<span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
								</div>
							</Marquee>
							<Marquee direction="up">
								<div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
									<span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
									{backend.map((item, i) => (
										<span
											key={i}
											className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
										>
											{item}
										</span>
									))}
								</div>
							</Marquee>
						</div>
					)}
					{id === '6' && (
						<div className="mt-5 relative">
							<div className="absolute -bottom-5 right-0">
								<Lottie options={lottieOptions} />
							</div>
							<MagicBorderButton
								icon={<IoCopyOutline />}
								iconPosition="left"
								onClick={handleCopy}
							>
								{isCopied ? 'Email is Copied' : 'Copy Email Address'}
							</MagicBorderButton>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default BentoGrid;
