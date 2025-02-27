import AnimatedText from "@/components/AnimatedText";
import AnimatedHeading from "@/components/AnimatedHeading";
import SocialLink from "@/components/SocialLink";
import Dragger from "@/components/Dragger";

export default function Home() {
	return (
		<>
			<div className="flex flex-col gap-6">
				<header>
					<div className="font-rammetto-one text-[32px] flex flex-col mb-3">
						<AnimatedHeading delay={0.1}>Naufal</AnimatedHeading>
						<AnimatedHeading delay={0.2}>Firman</AnimatedHeading>
					</div>
					<AnimatedText delay={0.6}>
						<h1 className="block text-base max-w-[35ch] pr-8 font-bold leading-6">
							I’m a front-end developer who wants to help make the internet a more
							creative, accessible, and better place.
						</h1>
					</AnimatedText>
				</header>

				<SocialLink />

				<section>
					<div className="font-rammetto-one text-xl">
						<AnimatedHeading delay={1}>Work</AnimatedHeading>
					</div>
					<Dragger />
				</section>
			</div>
		</>
	);
}
