export const navItems = [
	{ name: 'About', link: '#about' },
	{ name: 'Projects', link: '#projects' },
	{ name: 'Testimonials', link: '#testimonials' },
	{ name: 'Contact', link: '#contact' },
];

export const gridItems = [
	{
		id: '1',
		title: 'I prioritize client collaboration, fostering open communication ',
		desc: '',
		className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
		imgClassName: 'w-full h-full',
		titleClassName: 'justify-end',
		img: '/b1.svg',
		spareImg: '',
	},
	{
		id: '2',
		title: "I'm very flexible with time zone communications",
		desc: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '',
		spareImg: '',
	},
	{
		id: '3',
		title: 'My tech stack',
		desc: 'I constantly try to improve',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-center',
		img: '',
		spareImg: '',
	},
	{
		id: '4',
		title: 'Tech enthusiast with a passion for development.',
		desc: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '/grid.svg',
		spareImg: '/b4.svg',
	},

	{
		id: '5',
		title: 'Currently learning NestJS',
		desc: 'The Inside Scoop',
		className: 'md:col-span-3 md:row-span-2',
		imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
		titleClassName: 'justify-center md:justify-start lg:justify-center',
		img: '/b5.svg',
		spareImg: '/grid.svg',
	},
	{
		id: '6',
		title: 'Do you want to start a project together?',
		desc: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
		img: '',
		spareImg: '',
	},
];

export const companies = [
	{
		id: '0',
		name: 'Softbuilders Software Design',
		img: '/softt.png',
		nameImg: '/softt.png',
	},
	{
		id: '1',
		name: 'Edraak Systems',
		img: '/edraak_logo.jpeg',
		nameImg: '/edraak-name.png',
	},
	{
		id: '2',
		name: 'Wellnite',
		img: '/wellnite_logo.png',
		nameImg: '/wellnite.png',
	},
	{
		id: '3',
		name: 'Zong CMPak',
		img: '/zong-logo.png',
		nameImg: '/zong-logo.png',
	},
];

export const socialMedia = [
	{
		id: '1',
		img: '/git.svg',
		link: 'https://github.com/abdullah-tsx',
	},
	{
		id: '2',
		img: '/link.svg',
		link: 'https://www.linkedin.com/in/muhabdullah/',
	},
];

export * from './workExp';
export * from './projects';
export * from './testimonials';
export * from './techStack';
