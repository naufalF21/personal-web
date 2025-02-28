import { socialLinks } from "@/constants/socialLinks";
import SocialLink from "./SocialLink";

const Social = () => {
	return (
		<div className="flex items-center gap-4">
			<SocialLink href={socialLinks.linkedin.url} delay={0.3}>
				<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
					></path>
				</svg>
			</SocialLink>

			<SocialLink href={socialLinks.email.url} delay={0.4}>
				<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 4.238l-7.928 7.1L4 7.216V19h16zM4.511 5l7.55 6.662L19.502 5z"
					></path>
				</svg>
			</SocialLink>

			<SocialLink href={socialLinks.resume.url} delay={0.5}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={28}
					height={28}
					viewBox="0 0 256 256"
				>
					<path
						fill="currentColor"
						d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51M178.26 224L48 201L77.75 32L208 55ZM89.34 58.42a8 8 0 0 1 9.27-6.48l83 14.65a8 8 0 0 1-1.39 15.88a8.4 8.4 0 0 1-1.4-.12l-83-14.66a8 8 0 0 1-6.48-9.27M83.8 89.94a8 8 0 0 1 9.27-6.49l83 14.66a8 8 0 0 1-1.4 15.89a7.6 7.6 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1-6.46-9.28m-5.55 31.51a8 8 0 0 1 9.27-6.45l41.48 7.29a8 8 0 0 1-1.38 15.88a8.3 8.3 0 0 1-1.4-.12l-41.5-7.33a8 8 0 0 1-6.47-9.27"
					></path>
				</svg>
			</SocialLink>

			<SocialLink href={socialLinks.github.url} delay={0.6}>
				<svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"
					></path>
				</svg>
			</SocialLink>
		</div>
	);
};

export default Social;
