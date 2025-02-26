import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const plusJakartaSans = localFont({
	src: [
		{
			path: "/fonts/PlusJakartaSans-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "/fonts/PlusJakartaSans-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "/fonts/PlusJakartaSans-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "/fonts/PlusJakartaSans-Bold.ttf",
			weight: "700",
			style: "normal",
		},
	],
});

const rammettoOne = localFont({
	src: [
		{
			path: "/fonts/RammettoOne-Regular.ttf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--rammetto-one",
});

export const metadata: Metadata = {
	title: "Naufal Firman | Personal Website",
	description: "Naufal Firman Personal Website",
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en">
			<body className={`${plusJakartaSans.className} ${rammettoOne.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
