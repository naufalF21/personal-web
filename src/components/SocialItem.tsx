"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

const SocialItem = ({
	children,
	href,
	delay,
}: {
	children: ReactNode;
	href: string;
	delay?: number;
}) => {
	const animationConfig = {
		circlebg: {
			variants: {
				hidden: { opacity: 0, scale: 0 },
				hover: { opacity: 1, scale: 1.2 },
			},
			transition: {
				type: "spring",
				stiffness: 450,
				damping: 20,
			},
			initial: {
				opacity: 0,
			},
		},
		icon: {
			variants: {
				hover: { color: "white" },
			},
		},
		link: {
			transition: {
				type: "spring",
				stiffness: 350,
				damping: 20,
				delay: delay,
			},
			initial: {
				opacity: 0,
				y: 60,
			},
			animate: {
				opacity: 1,
				y: 0,
			},
		},
	};

	return (
		<motion.a
			href={href}
			target="_blank"
			className="rounded-full px-2 py-2 relative flex items-center justify-center cursor-pointer"
			{...animationConfig.link}
			whileHover="hover"
		>
			<motion.div
				className="bg-theme-primary absolute w-[40px] h-[40px] z-10 rounded-full"
				{...animationConfig.circlebg}
			/>
			<motion.div className="z-20 relative" {...animationConfig.icon}>
				{children}
			</motion.div>
		</motion.a>
	);
};

export default SocialItem;
