import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import "./globals.scss";
import "./app.scss";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "My React Notes",
	description:
		"A compilation of my favorit topics for React JS job interview preparation",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
