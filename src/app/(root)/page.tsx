import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="flex flex-col gap-5 justify-center items-center h-screen ">
			<h1 className="font-rammetto-one">Rammetto One</h1>
			<p>Plus Jakarata Sans</p>
			<Button>Click me</Button>
		</div>
	);
}
