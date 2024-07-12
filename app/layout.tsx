import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/app/components';

import { STRINGS } from './constants';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: STRINGS.TITLE,
	description: STRINGS.DESC,
	openGraph: {
		title: STRINGS.TITLE,
		description: STRINGS.DESC,
		images: 'https://www.abdullahs.dev/logo.jpg',
		url: 'https://www.abdullahs.dev/',
		type: 'website',
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
