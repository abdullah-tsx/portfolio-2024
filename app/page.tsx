import dynamic from 'next/dynamic';

import { FloatingNav } from '@/app/components/ui/';
import { navItems } from '@/app/data';

import { Experiences, Footer, Hero, Testimonials } from './components';

// The following SVG values are not currently compatible with server-side rendering: scale, rotate, pathLength, pathOffset and pathSpacing.
const Grid = dynamic(() => import('./components/Grid').then(m => m.Grid), {
	ssr: false,
});
// The following SVG values are not currently compatible with server-side rendering: scale, rotate, pathLength, pathOffset and pathSpacing.
const RecentProjects = dynamic(
	() => import('./components/RecentProjects').then(m => m.RecentProjects),
	{
		ssr: false,
	},
);

const Home = () => {
	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5 no-scrollbar md:px-20 lg:px-20 xl:px-52">
			<div className="w-full">
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
				<RecentProjects />
				<Testimonials />
				<Experiences />
				<Footer />
			</div>
		</main>
	);
};

export default Home;
