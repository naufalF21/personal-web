import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex min-h-screen flex-1 flex-col w-[55%] mx-auto py-12 text-[#191A1B]">
			{children}
		</div>
	);
};

export default Layout;
