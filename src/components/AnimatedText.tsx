"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ children, delay }: { children: ReactNode; delay?: number }) => {
	const transition = {
		duration: 0.4,
		delay,
		ease: "easeInOut",
	};
	const initial = { opacity: 0, y: 0 };
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

export default AnimatedText;
