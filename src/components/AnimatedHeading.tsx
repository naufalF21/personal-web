"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

const AnimatedHeading = ({ children, delay }: { children: ReactNode; delay?: number }) => {
	const transition = { type: "spring", bounce: 0.55, duration: 0.5, delay: delay };
	const initial = { opacity: 0, y: 15 };
	const animate = { opacity: 1, y: 0 };

	return (
		<motion.div
			className="leading-10"
			initial={initial}
			animate={animate}
			transition={transition}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedHeading;
