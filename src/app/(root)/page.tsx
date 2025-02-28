import AnimatedText from "@/components/AnimatedText";
import AnimatedHeading from "@/components/AnimatedHeading";
import Social from "@/components/Social";
import Dragger from "@/components/Dragger";
import Experiments from "@/components/Experiments";

export default function Home() {
	return (
		<>
			<div className="flex flex-col gap-6">
				<header>
					<div className="font-rammetto-one text-[32px] flex flex-col mb-3">
						<AnimatedHeading delay={0.1}>
							<h2 className="leading-10">Naufal</h2>
						</AnimatedHeading>
						<AnimatedHeading delay={0.2}>
							<h2 className="leading-10">Firman</h2>
						</AnimatedHeading>
					</div>

					<AnimatedText delay={0.6}>
						<h1 className="block text-base max-w-[35ch] pr-8 font-bold leading-6">
							I’m a front-end developer who wants to help make the internet a more
							creative, accessible, and better place.
						</h1>
					</AnimatedText>
				</header>

				<Social />

				<section className="mt-5">
					<div className="font-rammetto-one text-xl">
						<AnimatedHeading delay={1}>
							<h2>Work</h2>
						</AnimatedHeading>
					</div>
					<Dragger />
				</section>

				<section className="flex flex-col gap-5 mt-5">
					<div className="font-rammetto-one text-xl">
						<AnimatedHeading delay={1.4}>
							<h2>Experiments</h2>
						</AnimatedHeading>
					</div>
					<Experiments
						company="Algostudio"
						year="2023"
						summary="Develop a employee attendance web application. Collaborate with	the design team to implement an attractive and responsive user interface design."
					/>
					<Experiments
						company="Satu Atap Akademik"
						year="2024"
						summary="Implement features that fit the needs of the platform, such as course management system, articles, and admin dashboard."
					/>
				</section>
			</div>
		</>
	);
}
