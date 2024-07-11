import { FaFileDownload, FaLocationArrow, FaWhatsapp } from 'react-icons/fa';

import {
	GridBackground,
	MagicBorderButton,
	Spotlight,
	TextGenerateEffect,
	TypewriterEffect,
} from './ui';

const myIntro =
	"Hi, I'm Abdullah, a frontend oriented Full Stack Developer based in Dubai"
		.split(' ')
		.map(word => {
			return { text: word };
		});
export const Hero = () => {
	return (
		<div className="pt-36">
			<div>
				<Spotlight
					className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
					fill="white"
				/>
				<Spotlight
					className="h-[80vh] w-[50vw] top-10 left-full"
					fill="purple"
				/>
				<Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
			</div>
			<GridBackground outerClasses="absolute top-0 left-0" />
			<div className="flex justify-center relative">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
					<h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
						Built with Next.js 14
					</h2>
					<TextGenerateEffect
						words="Creating User-Centric Designs with Precision and Passion"
						className="text-center text-[40px] md:text-5xl lg:text-6xl"
					/>
					<TypewriterEffect
						words={myIntro}
						className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
						cursorClassName="w-0.5"
					/>
					<div className="flex w-full justify-center gap-4 flex-col sm:flex-row mt-20 sm:mt-0">
						<a href="#about">
							<MagicBorderButton
								innerClassName="px-7"
								icon={<FaLocationArrow />}
								iconPosition="right"
							>
								See my Work
							</MagicBorderButton>
						</a>
						<a
							href="https://api.whatsapp.com/send?phone=923101050505&text=Hello%2C%20I%20got%20your%20number%20from%20your%20portfolio."
							target="_blank"
							rel="noopener noreferrer"
						>
							<MagicBorderButton
								innerClassName="px-7"
								icon={<FaWhatsapp />}
								iconPosition="right"
							>
								Whatsapp
							</MagicBorderButton>
						</a>
						<a href="/MuhammadAbdullah.pdf" target="_blank">
							<MagicBorderButton
								innerClassName="px-7"
								icon={<FaFileDownload />}
								iconPosition="right"
							>
								Download Resume
							</MagicBorderButton>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
