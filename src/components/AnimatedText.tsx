"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { easeInOut } from "@/utils/animations";

const AnimatedText = ({ children, delay }: { children: ReactNode; delay?: number }) => {
	return (
		<motion.div className="leading-10" {...easeInOut(delay)}>
			{children}
		</motion.div>
	);
};

export default AnimatedText;
