import Link from "next/link";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const currentTime = new Date().toLocaleTimeString("en-US", {
		hour12: false,
		hour: "2-digit",
		minute: "2-digit",
	});

	return (
		<div className="bg-theme-primary text-white text-sm font-medium mt-10">
			<div className="w-[55%] flex mx-auto justify-between py-6 items-center">
				<div className="flex gap-2">
					<span>&copy; {currentYear}</span>
					<span>
						Handcraft using{" "}
						<Link
							href="https://nextjs.org/"
							className="underline hover:bg-white hover:text-theme-primary hover:no-underline p-1 rounded"
						>
							Next.js
						</Link>
						hosted on
						<Link
							href="https://www.netlify.com/"
							className="underline hover:bg-white hover:text-theme-primary hover:no-underline p-1 rounded"
						>
							Netlify
						</Link>
					</span>
				</div>
				<div className="flex gap-5">
					<div className="flex gap-1 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={24}
							height={24}
							viewBox="0 0 24 24"
						>
							<g
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
							>
								<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0"></path>
								<path d="M12 7v5l3 3"></path>
							</g>
						</svg>
						<span>{currentTime} Pasuruan, Indonesia</span>
					</div>
					<span className="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={32}
							height={32}
							viewBox="0 0 24 24"
						>
							<path
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.5}
								d="M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-3-3H3m12 0h6"
							></path>
						</svg>
						<Link
							href="https://github.com/naufalF21/personal-web"
							className="hover:bg-white hover:text-theme-primary px-1 rounded"
						>
							98f789p
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
