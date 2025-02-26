import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<main className="flex min-h-screen flex-1 flex-col w-[55%] mx-auto py-12 text-[#191A1B]">
			<div>{children}</div>
		</main>
	);
};

export default Layout;
