'use client';

import { FaLocationArrow } from 'react-icons/fa';

import { PinContainer } from './ui/3DPin';
import { projects } from '../data';

export const RecentProjects = () => {
	return (
		<div id="projects" className="py-20">
			<h1 className="heading">
				A small selection of{' '}
				<span className="text-purple">recent projects</span>
			</h1>
			<div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
				{projects.map(({ id, title, desc, iconLists, link, img }) => {
					return (
						<div
							id={id}
							key={id}
							className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
						>
							<PinContainer title={title} href={link}>
								<div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
									<div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
										<img src="/bg.png" alt="bg-png" />
									</div>
									<img
										src={img}
										alt={title}
										className="z-10 absolute bottom-0 rounded-lg rotate-3"
									/>
								</div>
								<h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
									{title}
								</h1>
								<p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
									{desc}
								</p>
								<div className="flex items-center justify-between mt-7 mb-3">
									<div className="flex items-center">
										{iconLists.map((icon, idx) => (
											<div
												key={icon}
												className="border border-white/[.2] rounded-full bg-black lg:w-10 aspect-square w-8 flex justify-center items-center"
												style={{
													transform: `translateX(-${5 * idx + 2}px)`,
												}}
											>
												<img src={icon} alt="icon5" className="p-2" />
											</div>
										))}
									</div>
									<div className="flex justify-center items-center">
										<p className="flex lg:text-xl md:text-xs text-sm text-purple">
											Check Live
										</p>
										<FaLocationArrow className="ms-3" color="#CBACF9" />
									</div>
								</div>
							</PinContainer>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default RecentProjects;
