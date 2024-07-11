import {
	Experiences,
	FloatingNav,
	Footer,
	Grid,
	Hero,
	RecentProjects,
	Testimonials,
} from './components';
import { navItems } from './data';

const Home = () => {
	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-x-hidden sm:px-10 px-5 no-scrollbar">
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
