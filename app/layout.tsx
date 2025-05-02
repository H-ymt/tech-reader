import type { Metadata } from "next";
import { Geist, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Container from "./components/container";
import Header from "./components/header";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const notoSans = Noto_Sans_JP({
	variable: "--font-noto-sans",
	weight: ["400", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Tech Reader - エンジニアのための技術記事をまとめサイト",
	description: "エンジニアのための技術記事をまとめサイト",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${notoSans.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<main>
						<Container>{children}</Container>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
