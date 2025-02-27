interface SocialLink {
	url: string;
	label?: string;
}

interface SocialLinks {
	linkedin: SocialLink;
	email: SocialLink;
	resume: SocialLink;
	github: SocialLink;
}

export const socialLinks: SocialLinks = {
	linkedin: {
		url: "https://www.linkedin.com/in/naufal-firman/",
		label: "LinkedIn Profile",
	},
	email: {
		url: "mailto:naufalfirman098@gmail.com",
		label: "Email Contact",
	},
	resume: {
		url: "https://glints.com/api/s3/download?label=resume&key=33b87a521cdcd8a8a26493e285cbd3be.pdf",
		label: "Download Resume",
	},
	github: {
		url: "https://github.com/naufalF21",
		label: "GitHub Profile",
	},
};

// Freeze the object to prevent modifications
Object.freeze(socialLinks);
