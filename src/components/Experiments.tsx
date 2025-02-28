interface ExperimentsProps {
	company: string;
	year: string;
	summary: string;
}

const Experiments = ({ company, year, summary }: ExperimentsProps) => {
	return (
		<div className="flex gap-5">
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 32 32">
					<path
						fill="currentColor"
						d="M15 20H9a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3m-3-1a4 4 0 1 0-4-4a4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2"
					></path>
					<path
						fill="currentColor"
						d="M28 19v9H4V8h12V6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-9Z"
					></path>
					<path
						fill="currentColor"
						d="M20 19h6v2h-6zm2 4h4v2h-4zm10-13V8h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 26 4.101V2h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 20.101 8H18v2h2.101a5 5 0 0 0 .732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V16h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 29.899 10zm-7 2a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"
					></path>
				</svg>
			</div>
			<div className="text-sm flex flex-col gap-2 max-w-[50ch]">
				<h3 className="font-bold">
					{company}, {year}
				</h3>
				<p>{summary}</p>
			</div>
		</div>
	);
};

export default Experiments;
