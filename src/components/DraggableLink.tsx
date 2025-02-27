"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface DraggableButtonProps {
	imgSrc: string;
	delay: number;
	startDrag: (event: React.PointerEvent<Element>) => void;
}

const DraggableLink: React.FC<DraggableButtonProps> = ({ imgSrc, delay, startDrag }) => {
	const animationConfig = {
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
	};

	return (
		<motion.button
			className="cursor-pointer relative h-[450px] w-full"
			onPointerDown={startDrag}
			{...animationConfig}
		>
			<Image src={imgSrc} alt="Card Img" fill className="object-cover" />
		</motion.button>
	);
};

export default DraggableLink;
