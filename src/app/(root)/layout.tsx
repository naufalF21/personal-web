import Footer from "@/components/Footer";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<div className="flex min-h-screen flex-1 flex-col w-[55%] mx-auto py-12 text-theme-primary">
				{children}
			</div>
			<Footer />
		</>
	);
};

export default Layout;
