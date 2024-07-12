import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { companies, testimonials } from '../data';

export const Testimonials = () => {
	return (
		<div id="testimonials" className="py-20">
			<h1 className="heading my-10">
				Some <span className="text-purple">Professional Recommendations</span>
			</h1>
			<div className="flex flex-col items-center max-lg:mt-10">
				<InfiniteMovingCards items={testimonials} speed="slow" />
				<div className="flex flex-wrap items-center justofy-center gap-4 md:gap-16 max-lg:mt-10 md:mt-10">
					{companies.map(({ id, nameImg }) => {
						return (
							<div
								key={id}
								className="flex md:max-w-60 max-w-32 gap-2 overflow-hidden rounded-sm"
							>
								<img src={nameImg} className="md:w-24 w-20" alt={nameImg} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
