"use client";

import { motion, useDragControls, DragControls } from "framer-motion";
import DraggableLink from "./DraggableLink";

const Dragger = () => {
	const dragControls: DragControls = useDragControls();

	const startDrag = (event: React.PointerEvent<Element>): void => {
		event.preventDefault();
		dragControls.start(event);
	};

	return (
		<motion.div
			className="relative flex gap-8 w-full"
			dragControls={dragControls}
			drag="x"
			dragConstraints={{ left: -300, right: 300, top: 0, bottom: 0 }}
			dragElastic={0.2}
			style={{
				cursor: "grab",
				userSelect: "none",
			}}
		>
			<DraggableLink imgSrc="/card-img.png" delay={0.4} startDrag={startDrag} />
			<DraggableLink imgSrc="/card-img.png" delay={0.5} startDrag={startDrag} />
			<DraggableLink imgSrc="/card-img.png" delay={0.6} startDrag={startDrag} />
		</motion.div>
	);
};

export default Dragger;
