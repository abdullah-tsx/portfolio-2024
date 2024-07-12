import { Button } from '@/app/components/ui/MovingBorder';

import { workExperience } from '../data';

export const Experiences = () => {
	return (
		<div id="experience" className="py-10">
			<h1 className="heading">
				Some <span className="text-purple"> Experiences</span>
			</h1>
			<div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
				{workExperience.map(({ thumbnail, id, title, desc }) => {
					return (
						<Button
							key={id}
							id={id}
							borderRadius="1.75rem"
							className="flex-1 text-white border-neutral-200 dark:border-slate-800"
							duration={Math.floor(Math.random() * 10000) + 8000}
						>
							<div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
								<img
									src={thumbnail}
									alt={thumbnail}
									className="w-16  md:md-20 lg:w-32"
								/>
								<div className="lg:ms-5">
									<h1 className="text-start text-xl md:text-2xl font-bold">
										{title}
									</h1>
									<p className="text-start text-white-100 mt-3 text-semibold">
										{desc}
									</p>
								</div>
							</div>
						</Button>
					);
				})}
			</div>
		</div>
	);
};

export default Experiences;
