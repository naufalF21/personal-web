export const easeInOut = (delay?: number) => ({
	transition: {
		duration: 0.4,
		delay,
		ease: "easeInOut",
	},
	initial: { opacity: 0, y: 0 },
	animate: { opacity: 1, y: 0 },
});

export const springWhileHover = {
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
};

export const springELement = (delay?: number) => ({
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
});

export const springTextHeading = (delay?: number) => ({
	transition: {
		type: "spring",
		bounce: 0.55,
		duration: 0.5,
		delay: delay,
	},
	initial: {
		opacity: 0,
		y: 15,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
});
