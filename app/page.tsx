import dynamic from 'next/dynamic';

import { FloatingNav } from '@/app/components/ui/';
import { navItems } from '@/app/data';

import {
	Experiences,
	Footer,
	Hero,
	RecentProjects,
	Testimonials,
} from './components';

// TODO: Investigate window is not defined error.
const Grid = dynamic(() => import('./components/Grid').then(m => m.Grid), {
	ssr: false,
});

const Home = () => {
	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5no-scrollbar">
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
