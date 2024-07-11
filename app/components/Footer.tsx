import { MdOutlineEmail } from 'react-icons/md';

import { MagicBorderButton } from '@/app/components/ui/MagicBorderButton';
import { socialMedia } from '@/app/data';

export const Footer = () => {
	return (
		<footer
			className="w-full pt-20 pb-10 relative overflow-hidden"
			id="contact"
		>
			<div className="flex flex-col items-center ">
				<h1 className="heading lg:max-w-[45vw]">
					Ready to take your{' '}
					<span className="text-purple">digital presence</span> to next level
				</h1>
				<p className="text-white-200 md:mt-10 my-5 text-center">
					React out to me and lets discuss how can i help you achieve your goals
				</p>

				<MagicBorderButton icon={<MdOutlineEmail />} iconPosition="right">
					<a href="mailto:abdullah.ryk94@gmail.com" className="text-white">
						Send me an Email
					</a>
				</MagicBorderButton>
			</div>
			<div className="flex mt-16 flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
				<p className="text-sm md:text-base font-light">Copyright © 2024 MA</p>
				<div className="flex items-center gap-3 lg:gap-6">
					{socialMedia.map(({ img, id, link }) => {
						return (
							<div
								key={id}
								className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
							>
								<a href={link} target="_blank" rel="noopener noreferrer">
									<img src={img} alt={img} width={20} height={20} />
								</a>
							</div>
						);
					})}
				</div>
			</div>
			<div className="w-full absolute left-0 -bottom-72 opacity-50 z-[-1]">
				<img src="/footer-grid.svg" alt="grid" className="w-full h-full" />
			</div>
		</footer>
	);
};

export default Footer;
