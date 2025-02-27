"use client";

import { ReactNode, useRef } from "react";
import { motion } from "framer-motion";

const DraggerLayout = ({ children }: { children: ReactNode }) => {
	const constraintsRef = useRef<HTMLDivElement>(null);
	return <motion.div ref={constraintsRef}>{children}</motion.div>;
};

export default DraggerLayout;
