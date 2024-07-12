import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/app/components';

import { STRINGS } from './constants';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	applicationName: STRINGS.TITLE,
	title: STRINGS.TITLE,
	description: STRINGS.DESC,
	openGraph: {
		title: STRINGS.TITLE,
		description: STRINGS.DESC,
		images: `${process.env.NEXT_PUBLIC_URL}/logo.jpg`,
		url: process.env.NEXT_PUBLIC_URL,
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		site: '@abd_ch11',
		title: STRINGS.TITLE,
		description: STRINGS.DESC,
		images: `${process.env.NEXT_PUBLIC_URL}/logo.jpg`,
	},
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
};
export default RootLayout;
