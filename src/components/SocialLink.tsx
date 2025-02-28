"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { springELement, springWhileHover } from "@/utils/animations";

const SocialLink = ({
	children,
	href,
	delay,
}: {
	children: ReactNode;
	href: string;
	delay?: number;
}) => {
	return (
		<motion.a
			href={href}
			target="_blank"
			className="rounded-full px-2 py-2 relative flex items-center justify-center cursor-pointer"
			{...springELement(delay)}
			whileHover="hover"
		>
			<motion.div
				className="bg-theme-primary absolute w-[40px] h-[40px] z-10 rounded-full"
				{...springWhileHover}
			/>
			<motion.div className="z-20 relative" variants={{ hover: { color: "white" } }}>
				{children}
			</motion.div>
		</motion.a>
	);
};

export default SocialLink;
