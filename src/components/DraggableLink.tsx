"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { springELement } from "@/utils/animations";

interface DraggableButtonProps {
	imgSrc: string;
	delay: number;
	startDrag: (event: React.PointerEvent<Element>) => void;
}

const DraggableLink: React.FC<DraggableButtonProps> = ({ imgSrc, delay, startDrag }) => {
	return (
		<motion.button
			className="cursor-pointer relative h-[450px] w-full"
			onPointerDown={startDrag}
			{...springELement(delay)}
		>
			<Image src={imgSrc} alt="Card Img" fill className="object-cover" />
		</motion.button>
	);
};

export default DraggableLink;
