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
	const variants = {
		circleBg: {
			hidden: { opacity: 0, scale: 0 },
			hover: { opacity: 1, scale: 1.2 },
		},
		icon: {
			hover: { color: "white" },
		},
	};

	const transition = {
		circleBg: {
			type: "spring",
			stiffness: 450,
			damping: 20,
		},
		link: {
			type: "spring",
			stiffness: 350,
			damping: 20,
			delay: delay,
		},
	};

	const initial = {
		circleBg: { opacity: 0 },
		link: {
			opacity: 0,
			y: 60,
		},
	};

	const animate = {
		link: {
			opacity: 1,
			y: 0,
		},
	};

	return (
		<motion.a
			href={href}
			target="_blank"
			className="rounded-full px-2 py-2 relative flex items-center justify-center cursor-pointer"
			transition={transition.link}
			initial={initial.link}
			animate={animate.link}
			whileHover="hover"
		>
			<motion.div
				className="bg-theme-primary absolute w-[40px] h-[40px] z-10 rounded-full"
				variants={variants.circleBg}
				transition={transition.circleBg}
				initial={initial.circleBg}
			/>
			<motion.div className="z-20 relative" variants={variants.icon}>
				{children}
			</motion.div>
		</motion.a>
	);
};

export default SocialItem;
