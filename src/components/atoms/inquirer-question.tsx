import { cn } from "@/lib/helpers/cn";

interface InquirerQuestionProps {
	question: string;
	answer: string;
	current?: boolean;
}

export function InquirerQuestion({
	question,
	answer,
	current = false,
}: InquirerQuestionProps) {
	return (
		<p>
			{current ? (
				<span className="text-blue-500">?</span>
			) : (
				<span className="text-green-500">✔</span>
			)}
			<strong className="text-nowrap">{question}</strong>
			<span
				className={cn({ "text-stone-200": current, "text-cyan-500": !current })}
			>
				{answer}
			</span>
		</p>
	);
}
