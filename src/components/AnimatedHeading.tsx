"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { springTextHeading } from "@/utils/animations";

const AnimatedHeading = ({ children, delay }: { children: ReactNode; delay?: number }) => {
	return <motion.div {...springTextHeading(delay)}>{children}</motion.div>;
};

export default AnimatedHeading;
